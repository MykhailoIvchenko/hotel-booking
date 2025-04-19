export const routerConfig = {
  home: {
    path: '/',
    name: 'Home',
  },
  signIn: {
    path: '/sign-in',
    name: 'Sign In',
  },
  signUp: {
    path: '/sign-up',
    name: 'Sign Up',
  },
  referralSignUp: {
    path: '/referral-sign-up',
    name: 'Referral Sign Up',
  },
};

export type RouterConfig = typeof routerConfig;
