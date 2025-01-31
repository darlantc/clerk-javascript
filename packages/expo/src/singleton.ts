import type { FapiRequestInit, FapiResponse } from '@clerk/clerk-js/dist/types/src/core/fapiClient';
import Clerk from '@clerk/clerk-js/headless';
import type { HeadlessBrowserClerk } from '@clerk/clerk-react';

import type { TokenCache } from './cache';
import { getToken as getTokenFromMemory, saveToken as saveTokenInMemory } from './cache';

const KEY = '__clerk_client_jwt';

export let clerk: HeadlessBrowserClerk;

type BuildClerkOptions = {
  key: string;
  tokenCache?: TokenCache;
};

export function buildClerk({ key, tokenCache }: BuildClerkOptions): HeadlessBrowserClerk {
  if (!clerk) {
    const getToken = (tokenCache && tokenCache.getToken) ?? getTokenFromMemory;
    const saveToken = (tokenCache && tokenCache.saveToken) ?? saveTokenInMemory;

    clerk = new Clerk(key);

    if (!tokenCache) {
      return clerk;
    }

    // @ts-expect-error
    clerk.__unstable__onBeforeRequest(async (requestInit: FapiRequestInit) => {
      // https://reactnative.dev/docs/0.61/network#known-issues-with-fetch-and-cookie-based-authentication
      requestInit.credentials = 'omit';

      requestInit.url?.searchParams.append('_is_native', '1');

      const jwt = await getToken(KEY);
      (requestInit.headers as Headers).set('authorization', jwt || '');
    });

    // @ts-expect-error
    clerk.__unstable__onAfterResponse(async (_: FapiRequestInit, response: FapiResponse<unknown>) => {
      const authHeader = response.headers.get('authorization');
      if (authHeader) {
        await saveToken(KEY, authHeader);
      }
    });
  }

  return clerk;
}
