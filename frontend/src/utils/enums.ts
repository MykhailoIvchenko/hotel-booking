export enum SignUpSteps {
  Referral = 'referral',
  WhatsAppNumber = 'whatsAppNumber',
  OtpVerification = 'otpVerification',
  CreateAccount = 'createAccount',
}

export enum LocalStorageKeys {
  SignUpNumber = 'signUpNumber',
  UserId = 'userId',
  AccessToken = 'accessToken',
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

export enum Endpoints {
  Basic = '/',
  BookingsByHotel = '/hotel/',
  BookingsByUser = '/user/',
  CheckRecoverToken = '/checkRecoverToken',
  CheckReferral = '/check-referral',
  Login = '/login',
  Logout = '/logout',
  Me = '/me',
  Reauth = '/reauth',
  Recover = '/recover/:phone',
  Refresh = '/refresh',
  Registration = '/registration',
  Reset = '/reset',
  ResetAuth = '/resetAuth',
  SendCode = '/send-code',
  UpdateEmail = '/update-email',
  UpdateName = '/update-name',
  VerifyCode = '/verify-code',
}

export enum BasicEndpoints {
  Auth = '/auth',
  Bookings = '/bookings',
  Hotels = '/hotels',
  Notifications = '/notifications',
  Users = '/users',
}

export enum ApiMethods {
  GET = 'GET',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
}

export enum HotelFacilities {
  AirportShuttle = 'Airport Shuttle',
  FreeParking = 'Free Parking',
  FreeWiFi = 'Free Wifi',
  RoomService = 'Room Service',
  Meal = 'Meal',
}
