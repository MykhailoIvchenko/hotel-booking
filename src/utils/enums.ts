export enum SignUpSteps {
  WhatsAppNumber = 'whatsAppNumber',
  OtpVerification = 'otpVerification',
  CreateAccount = 'createAccount',
}

export enum LocalStorageKeys {
  SignUpNumber = 'signUpNumber',
  UserId = 'userId',
}

export enum NotificationTabs {
  All = 'all',
  Unread = 'unread',
  Read = 'read',
}

export enum NotificationTypes {
  Profile = 'profile',
  Success = 'success',
  Schedule = 'schedule',
  Pending = 'pending',
  Reject = 'reject',
}

export enum DbTables {
  Users = 'users',
}
