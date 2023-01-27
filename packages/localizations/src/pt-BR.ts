import { DeepRequired, LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Verifique seu celular',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu celular',
      resendButton: 'Reenviar código',
    },
  },
} as const;

export const ptBR: DeepRequired<LocalizationResource> = {
  socialButtonsBlockButton: 'Continuar com {{provider|titleize}}',
  dividerText: 'ou',
  formFieldLabel__emailAddress: 'Seu e-mail',
  formFieldLabel__emailAddresses: 'Endereços de e-mail',
  formFieldLabel__phoneNumber: 'Celular',
  formFieldLabel__username: 'Nome de usuário',
  formFieldLabel__emailAddress_phoneNumber: 'E-mail ou Celular',
  formFieldLabel__emailAddress_username: 'E-mail ou nome de usuário',
  formFieldLabel__phoneNumber_username: 'celular ou nome de usuário',
  formFieldLabel__emailAddress_phoneNumber_username: 'E-mail, celular ou nome de usuário',
  formFieldLabel__password: 'Senha',
  formFieldLabel__newPassword: 'Nova senha',
  formFieldLabel__confirmPassword: 'Confirmar senha',
  formFieldLabel__firstName: 'Nome',
  formFieldLabel__lastName: 'Sobrenome',
  formFieldLabel__backupCode: 'Código de backup',
  formFieldLabel__organizationName: 'Nome da organização',
  formFieldLabel__role: 'Função',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses: 'Insira um ou mais endereços de e-mail separados por espaços ou vírgulas',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldAction__forgotPassword: 'Esqueceu a senha',
  formFieldHintText__optional: 'Opcional',
  formButtonPrimary: 'Continuar',
  signInEnterPasswordTitle: 'Insira sua senha',
  backButton: 'Voltar',
  footerActionLink__useAnotherMethod: 'Utilize outro método',
  badge__primary: 'Principal',
  badge__thisDevice: 'Este dispositivo',
  badge__userDevice: 'Dispositivo do usuário',
  badge__otherImpersonatorDevice: 'Personificar outro dispositivo',
  badge__default: 'Padrão',
  badge__unverified: 'Não verificado',
  badge__requiresAction: 'Requer ação',
  badge__you: 'Você',
  footerPageLink__help: 'Ajuda',
  footerPageLink__privacy: 'Privacidade',
  footerPageLink__terms: 'Termos de uso',
  paginationButton__previous: 'Anterior',
  paginationButton__next: 'Próximo',
  paginationRowText__displaying: 'Exibindo',
  paginationRowText__of: 'de',
  membershipRole__admin: 'Administrador',
  membershipRole__basicMember: 'Membro',
  membershipRole__guestMember: 'Convidado',
  signUp: {
    start: {
      title: 'Criar sua conta',
      subtitle: 'para continuar em {{applicationName}}',
      actionText: 'Possui uma conta?',
      actionLink: 'Entrar',
    },
    emailLink: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Link de verificação',
      formSubtitle: 'Utilize o link enviado no seu e-mail',
      resendButton: 'Reenviar link',
      verified: {
        title: 'Cadastro realizado com sucesso',
      },
      loading: {
        title: 'Conectando...',
      },
      verifiedSwitchTab: {
        title: 'E-mail verificado com sucesso',
        subtitle: 'Retorne para a nova aba que foi aberta para continuar',
        subtitleNewTab: 'Retorne para a aba anterior para continuar',
      },
    },
    emailCode: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu e-mail',
      resendButton: 'Reenviar código',
    },
    phoneCode: {
      title: 'Verifique seu celular',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu celular',
      resendButton: 'Reenviar código',
    },
    continue: {
      title: 'Preencha os campos ausentes',
      subtitle: 'para continuar em {{applicationName}}',
      actionText: 'Possui uma conta?',
      actionLink: 'Entrar',
    },
  },
  signIn: {
    start: {
      title: 'Entrar',
      subtitle: 'para continuar em {{applicationName}}',
      actionText: 'Não possui uma conta?',
      actionLink: 'Registre-se',
    },
    password: {
      title: 'Insira sua senha',
      subtitle: 'para continuar em {{applicationName}}',
      actionLink: 'Utilize outro método',
    },
    emailCode: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu e-mail',
      resendButton: 'Reenviar código',
    },
    emailLink: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Link d',
      formSubtitle: 'Utilize o link enviado no seu e-mail',
      resendButton: 'Reenviar link',
      unusedTab: {
        title: 'Você pode fechar esta aba',
      },
      verified: {
        title: 'Login realizado com sucesso',
        subtitle: 'Você será redirecionado em breve',
      },
      verifiedSwitchTab: {
        subtitle: 'Retorne para a aba original para continuar',
        titleNewTab: 'Conectado em outra aba',
        subtitleNewTab: 'Retorne para a nova aba que foi aberta para continuar',
      },
      loading: {
        title: 'Conectando...',
        subtitle: 'Você será redirecionado em breve',
      },
      failed: {
        title: 'Este link de verificação é inválido',
        subtitle: 'Retorne para a aba original para continuar',
      },
      expired: {
        title: 'Este link de verificação expirou',
        subtitle: 'Retorne para a aba original para continuar',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Verificação em duas etapas',
      subtitle: '',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código gerado pelo seu aplicativo autenticador',
    },
    backupCodeMfa: {
      title: 'Insira um código de backup',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de backup',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Utilize outro método',
      actionLink: 'Ajuda',
      blockButton__emailLink: 'Enviar link para {{identifier}}',
      blockButton__emailCode: 'Enviar código para {{identifier}}',
      blockButton__phoneCode: 'Enviar código para {{identifier}}',
      blockButton__password: 'Conectar com sua senha',
      blockButton__totp: 'Utilize seu aplicativo autenticador',
      blockButton__backupCode: 'Utilize um código de backup',
      getHelp: {
        title: 'Ajuda',
        content:
          'Se estiver com dificuldades para entrar em sua conta, envie um e-mail para nós que iremos te ajudar a restaurar seu acesso o mais rápido possível.',
        blockButton__emailSupport: 'E-mail de suporte',
      },
    },
    noAvailableMethods: {
      title: 'Não foi possível conectar',
      subtitle: 'Aconteceu um erro',
      message: 'Não foi possível conectar. Não há nenhum método de autenticação disponível.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu',
    formButtonPrimary__continue: 'Continuar',
    formButtonPrimary__finish: 'Finalizar',
    formButtonReset: 'Cancelar',
    start: {
      headerTitle__account: 'Conta',
      headerTitle__security: 'Segurança',
      headerSubtitle__account: 'Gerencie suas informações de conta',
      headerSubtitle__security: 'Gerencie suas preferencias de segurança',
      profileSection: {
        title: 'Perfil',
      },
      usernameSection: {
        title: 'Nome de usuário',
        primaryButton__changeUsername: 'Trocar nome de usuário',
        primaryButton__setUsername: 'Definir nome de usuário',
      },
      emailAddressesSection: {
        title: 'Endereços de e-mail',
        primaryButton: 'Adicionar um e-mail',
        detailsTitle__primary: 'E-mail principal',
        detailsSubtitle__primary: 'Este é seu e-mail principal',
        detailsAction__primary: 'Completar verificação',
        detailsTitle__nonPrimary: 'Definir como e-mail principal',
        detailsSubtitle__nonPrimary: 'Defina este e-mail como principal para receber as comunicações sobre sua conta',
        detailsAction__nonPrimary: 'Definir como principal',
        detailsTitle__unverified: 'E-mail não verificado',
        detailsSubtitle__unverified: 'Este e-mail não foi verificado e pode ter limitações de funcionalidade',
        detailsAction__unverified: 'Completar verificação',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Você não conseguirá conectar novamente utilizando este endereço de e-mail',
        destructiveAction: 'Remover e-mail',
      },
      phoneNumbersSection: {
        title: 'Números de celular',
        primaryButton: 'Adicione um celular',
        detailsTitle__primary: 'Celular principal',
        detailsSubtitle__primary: 'Este é o celular principal',
        detailsAction__primary: 'Completar verificação',
        detailsTitle__nonPrimary: 'Definir como celular principal',
        detailsSubtitle__nonPrimary:
          'Defina este celular como o principal para receber as comunicações sobre sua conta',
        detailsAction__nonPrimary: 'Definir como principal',
        detailsTitle__unverified: 'Celular não verificado',
        detailsSubtitle__unverified: 'Este celular não foi verificado e pode ter limitações de funcionalidade',
        detailsAction__unverified: 'Completar verificação',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remover este celular desta conta',
        destructiveAction: 'Remover celular',
      },
      connectedAccountsSection: {
        title: 'Contas conectadas',
        primaryButton: 'Conectar conta',
        title__conectionFailed: 'Conexão falhou, tente novamente',
        actionLabel__conectionFailed: 'Tentar novamente',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remover esta conexão da sua conta',
        destructiveActionAccordionSubtitle: 'Remover conexão',
      },
      passwordSection: {
        title: 'Senha',
        primaryButton__changePassword: 'Trocar a senha',
        primaryButton__setPassword: 'Defina a senha',
      },
      mfaSection: {
        title: 'Verificação em duas etapas',
        primaryButton: 'Adicione verificação ',
        phoneCode: {
          destructiveActionTitle: 'Remover',
          destructiveActionSubtitle: 'Remover este celular dos métodos de verificação em duas etapas',
          destructiveActionLabel: 'Remover celular',
          title__default: 'Celular principal',
          title__setDefault: 'Definir como celular principal',
          subtitle__default: 'Este celular será usado como o método de verificação em duas etapas ao conectar.',
          subtitle__setDefault:
            'Defina este celular como principal para usá-lo como o método de verificação em duas etapas ao conectar.',
          actionLabel__setDefault: 'Definir como principal',
        },
        backupCodes: {
          headerTitle: 'Códigos de backup',
          title__regenerate: 'Gerar códigos de backup novamente',
          subtitle__regenerate:
            'Obtenha um novo conjunto de códigos de backup seguros. Os códigos de backup anteriores serão excluídos e não poderão ser usados.',
          actionLabel__regenerate: 'Gerar códigos novamente',
        },
        totp: {
          headerTitle: 'Applicativo autenticador',
          title: 'Fator principal',
          subtitle: 'Este fator será usado como o método de verificação em duas etapas padrão ao conectar.',
          destructiveActionTitle: 'Remover',
          destructiveActionSubtitle: 'Remover aplicativo autenticador dos métodos de verificação em duas etapas',
          destructiveActionLabel: 'Remover aplicativo autenticador',
        },
      },
      activeDevicesSection: {
        title: 'Dispositivos',
        primaryButton: 'Dispositivos',
        detailsTitle: 'Dispositivo atual',
        detailsSubtitle: 'Este é o dispositivo que você está utilizando agora',
        destructiveActionTitle: 'Sair',
        destructiveActionSubtitle: 'Sair da sua conta neste dispositivo',
        destructiveAction: 'Sair do dispositivo',
      },
      web3WalletsSection: {
        title: 'Carteiras Web3',
        primaryButton: 'Carteiras Web3',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remover esta carteira Web3 da sua conta',
        destructiveAction: 'Remover carteira',
      },
    },
    profilePage: {
      title: 'Atualizar perfil',
      imageFormTitle: 'Imagem de perfil',
      imageFormSubtitle: 'Enviar imagem',
      imageFormDestructiveActionSubtitle: 'Remover imagem',
      fileDropAreaTitle: 'Solte uma imagem aqui ou...',
      fileDropAreaAction: 'Selecionar uma imagem',
      fileDropAreaHint: 'Envie uma imagem JPG, PNG, GIF, ou WEBP menor que 10 MB',
      successMessage: 'Seu perfil foi atualizado.',
    },
    usernamePage: {
      title: 'Atualizar nome de usuário',
      successMessage: 'Seu nome de usuário foi atualizado.',
    },
    emailAddressPage: {
      title: 'Adicionar e-mail',
      emailCode: {
        formHint: 'Um e-mail contendo um código de verificação será enviado para este endereço de e-mail.',
        formTitle: 'Código de verificação',
        formSubtitle: 'Insira o código de verificação enviado para {{identifier}}',
        resendButton: 'Reenviar código',
        successMessage: 'O e-mail {{identifier}} foi adicionado na sua conta.',
      },
      emailLink: {
        formHint: 'Um e-mail contendo um link de verificação será enviado para este endereço de e-mail.',
        formTitle: 'Link de verificação',
        formSubtitle: 'Clique no link de verificação enviado para {{identifier}}',
        resendButton: 'Reenviar link',
        successMessage: 'O e-email {{identifier}} foi adicionado na sua conta.',
      },
      removeResource: {
        title: 'Remover e-mail',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2: 'Você não conseguirá conectar novamente utilizando este endereço de e-mail.',
        successMessage: '{{emailAddress}} foi removido da sua conta.',
      },
    },
    phoneNumberPage: {
      title: 'Adicionar celular',
      successMessage: '{{identifier}} foi adicionado na sua conta.',
      infoText: 'Um SMS contendo um link de verificação será enviado para este celular.',
      infoText__secondary: 'Pode haver cobranças extras para envio de mensagem e dados por SMS.',
      removeResource: {
        title: 'Remover celular',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2: 'Você não conseguirá conectar novamente utilizando este número de celular.',
        successMessage: '{{phoneNumber}} foi removido da sua conta.',
      },
    },
    connectedAccountPage: {
      title: 'Conecte uma conta',
      formHint: 'Selecione um provedor para conectar sua conta.',
      formHint__noAccounts: 'Não há provedores de conta externos disponíveis.',
      socialButtonsBlockButton: 'Conectar conta {{provider|titleize}}',
      successMessage: 'O provedor foi adicionado à sua conta',
      removeResource: {
        title: 'Remover conta conectada',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2:
          'Você não conseguirá mais usar esta conta e quaisquer recursos dependentes dela deixarão de funcionar.',
        successMessage: '{{connectedAccount}} foi removido da sua conta.',
      },
    },
    web3WalletPage: {
      title: 'Adicionar carteira Web3',
      subtitle__availableWallets: 'Selecione uma carteira Web3 para conectar à sua conta.',
      subtitle__unavailableWallets: 'Não há carteiras Web3 disponíveis.',
      successMessage: 'A carteira foi adicionada à sua conta.',
      removeResource: {
        title: 'Remover carteira Web3',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2: 'Você não poderá mais usar esta carteira Web3 para entrar na sua conta.',
        successMessage: '{{Web3Wallet}} foi removido da sua conta.',
      },
    },
    passwordPage: {
      title: 'Defina a senha',
      successMessage: 'Sua senha foi salva.',
    },
    mfaPage: {
      title: 'Adicione verificação em duas etapas',
      formHint: 'Selecione um método para adicionar',
    },
    mfaTOTPPage: {
      title: 'Adicionar um aplicativo autenticador',
      verifyTitle: 'Código de verificação',
      verifySubtitle: 'Insira o código de verificação gerado pelo seu aplicativo autenticador',
      successMessage:
        'A verificação em duas etapas está ativa agora. Ao conectar, você precisará inserir um código de verificação deste aplicativo autenticador como uma etapa adicional.',
      authenticatorApp: {
        infoText__ableToScan:
          'Configure um novo método de login no seu aplicativo autenticador e escaneie o seguinte código QR para vinculá-lo à sua conta.',
        infoText__unableToScan:
          'Configure um novo método de login no seu aplicativo autenticador e insira a chave informada abaixo.',
        inputLabel__unableToScan1:
          "Certifique-se de que o 'One-time passwords' está habilitado, em seguida, conclua a vinculação de sua conta.",
        inputLabel__unableToScan2:
          'Alternativamente, se seu autenticador suportar URIs TOTP, você também pode copiar a URI completa.',
        buttonAbleToScan__nonPrimary: 'Escanear código QR em vez disso',
        buttonUnableToScan__nonPrimary: 'Não pode escanear o código QR?',
      },
      removeResource: {
        title: 'Remover verificação em duas etapas',
        messageLine1: 'Os códigos de verificação deste aplicativo autenticador não serão mais necessários ao conectar.',
        messageLine2: 'Sua conta pode ficar menos segura. Tem certeza que deseja continuar?',
        successMessage: 'A verificação em duas etapas via aplicativo autenticador foi removida.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Adicionar verificação por SMS',
      primaryButton__addPhoneNumber: 'Adicione um número de telefone',
      subtitle__availablePhoneNumbers:
        'Selecione um número de telefone para registrar a verificação em duas etapas por código SMS.',
      subtitle__unavailablePhoneNumbers:
        'Não há números de telefone disponíveis para registrar a verificação em duas etapas por código SMS.',
      successMessage:
        'Verificação em duas etapas por código SMS agora está habilitada para este número de telefone. Ao conectar, você precisará inserir um código de verificação enviado para este número de telefone como uma etapa adicional.',
      removeResource: {
        title: 'Remover verificação em duas etapas',
        messageLine1: '{{identifier}} não receberá mais códigos de verificação ao realizar o login.',
        messageLine2: 'Sua conta pode ficar menos segura. Tem certeza que deseja continuar?',
        successMessage: 'Código SMS de verificação em duas etapas foi removido para {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Adicionar código de backup para verificação',
      title__codelist: 'Códigos de backup',
      subtitle__codelist: 'Guarde-os em segurança e mantenha-os em sigilo.',
      infoText1: 'Códigos de backup serão ativados para esta conta.',
      infoText2:
        'Guarde-os em segurança e mantenha-os em sigilo. Você pode gerar novos códigos de backup se suspeitar que eles tenham sido comprometidos.',
      successSubtitle:
        'Você pode usar um deles para conectar na sua conta caso perca o acesso ao seu dispositivo de autenticação.',
      successMessage:
        'Códigos de backup foram ativados para esta conta. Você pode usar um deles para conectar na sua conta caso perca o acesso ao seu dispositivo de autenticação. Cada código poderá ser utilizado apenas uma vez.',
      actionLabel__copy: 'Copiar tudo',
      actionLabel__copied: 'Copiado!',
      actionLabel__download: 'Download .txt',
      actionLabel__print: 'Imprimir',
    },
  },
  userButton: {
    action__manageAccount: 'Gerenciar conta',
    action__signOut: 'Sair',
    action__signOutAll: 'Sair de todas as contas',
    action__addAccount: 'Adicionar conta',
  },
  organizationSwitcher: {
    personalWorkspace: 'Espaço pessoal',
    notSelected: 'Nenhuma organização selecionada',
    action__createOrganization: 'Criar organização',
    action__manageOrganization: 'Gerenciar Organização',
  },
  impersonationFab: {
    title: 'Entrou como {{identifier}}',
    action__signOut: 'Sair',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Membros',
      headerTitle__settings: 'Configurações',
      headerSubtitle__members: 'Veja e gerencie os membros da organização',
      headerSubtitle__settings: 'Gerencie as configurações da organização',
    },
    profilePage: {
      title: 'Perfil da organização',
      subtitle: 'Gerencie o perfil da organização',
      successMessage: 'A organização foi atualizada.',
      dangerSection: {
        title: 'Perigo',
        leaveOrganization: {
          title: 'Sair da organização',
          messageLine1:
            'Tem certeza de que deseja sair desta organização? Você perderá o acesso à ela e aos aplicativos dela.',
          messageLine2: 'Esta ação é permanente e não pode ser desfeita.',
          successMessage: 'Você saiu da organização.',
        },
      },
    },
    invitePage: {
      title: 'Convidar membros',
      subtitle: 'Convidar novos membros para esta organização',
      successMessage: 'Convites enviados com sucesso',
      detailsTitle__inviteFailed: 'Os convites não puderam ser enviados. Corrija o seguinte e tente novamente:',
      formButtonPrimary__continue: 'Enviar convites',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Nenhum membro para exibir',
      action__invite: 'Convidar',
      start: {
        headerTitle__active: 'Ativo',
        headerTitle__invited: 'Convidado',
      },
      activeMembersTab: {
        tableHeader__user: 'Usuário',
        tableHeader__joined: 'Entrou',
        tableHeader__role: 'Função',
        tableHeader__actions: '',
        menuAction__remove: 'Remover membro',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Convidado',
        menuAction__revoke: 'Cancelar convite',
      },
    },
  },
  createOrganization: {
    title: 'Criar organização',
    subtitle: 'Configure o perfil da organização',
    invitePage: {
      formButtonReset: 'Pular',
    },
  },
  unstable__errors: {
    form_identifier_not_found: 'Usuário não encontrado',
    form_password_pwned: 'Esta senha foi comprometida',
    form_username_invalid_length: 'O nome de usuário tem um tamanho inválido',
    form_param_format_invalid: 'Formato inválido',
    form_password_length_too_short: 'A senha é muito curta',
    form_param_nil: 'O campo é obrigatório',
    form_code_incorrect: 'Código incorreto',
    form_password_incorrect: 'Senha incorreta',
    not_allowed_access: 'Acesso não permitido',
  },
  dates: {
    previous6Days: "Último {{ date | weekday('pt-BR','long') }} às {{ date | timeString('pt-BR') }}",
    lastDay: "Ontem às {{ date | timeString('pt-BR') }}",
    sameDay: "Hoje às {{ date | timeString('pt-BR') }}",
    nextDay: "Amanhã às {{ date | timeString('pt-BR') }}",
    next6Days: "{{ date | weekday('pt-BR','long') }} às {{ date | timeString('pt-BR') }}",
    numeric: "{{ date | numeric('pt-BR') }}",
  },
} as const;
