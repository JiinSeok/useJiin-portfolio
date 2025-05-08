export const ROUTER = {
  Home: {
    path: '/', // 페이지 라우트
    getName: (customName?: string) => customName || 'Home', // 가변 페이지 이름 (실제 사용 시 전달한 값 우선)
  },
  SignIn: {
    path: '/sign-in',
    getName: (customName?: string) => customName || 'Sign In',
  },
  // @TODO SignUp
  // @TODO SignOut
  SuspendedAccount: {
    path: '/_suspended-account',
    getName: (customName?: string) => customName || 'Suspended Account',
  },
  Me: {
    path: '/me',
    getName: (customName?: string) => customName || 'My Page',
  },
  AIAgent: {
    path: '/ai-agent',
    getName: (customName?: string) => customName || 'AI Agent',
  },
  AppManagement: {
    path: '/app-management',
    getName: (customName?: string) => customName || 'App Management',
  },
  AccountManagement: {
    path: '/account-management',
    getName: (customName?: string) => customName || 'Account Management',
  },
  AdminAppManagement: {
    path: '/_admin/dashboard/app-management',
    getName: (customName?: string) => customName || 'Admin App Management',
  },
} as const
