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
  forgotPassword: {
    path: '/forgot-password',
    name: 'Forgot Password',
  },
  booking: {
    path: '/booking',
    name: 'Booking',
  },
  visaApplication: {
    path: '/visa-application',
    name: 'Visa Application',
  },
  whatsAppConcierge: {
    path: '/whatsapp-concierge',
    name: 'WhatsApp Concierge Services',
  },
};

export type RouterConfig = typeof routerConfig;
