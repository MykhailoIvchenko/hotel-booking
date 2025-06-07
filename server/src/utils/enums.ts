export enum Routes {
  Basic = '/',
  ItemById = '/:id',
  BookingsByHotel = '/hotel/:hotelId',
  BookingsByUser = '/user/:userId',
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
  NotificationsMarkAllRead = '/read-all',
}

export enum BaseRoutes {
  Auth = '/auth',
  Users = '/users',
  Hotels = '/hotels',
  Bookings = '/bookings',
  Notifications = '/notifications',
}

export enum HotelFacilities {
  AirportShuttle = 'Airport Shuttle',
  FreeParking = 'Free Parking',
  FreeWiFi = 'Free Wifi',
  RoomService = 'Room Service',
  Meal = 'Meal',
}

export enum NotificationTypes {
  Profile = 'profile',
  Success = 'success',
  Schedule = 'schedule',
  Pending = 'pending',
  Reject = 'reject',
}
