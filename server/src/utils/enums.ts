export enum Routes {
  Basic = '/',
  Booking = '/:id',
  BookingsByHotel = '/hotel/:hotelId',
  BookingsByUser = '/user/:userId',
  CheckRecoverToken = '/checkRecoverToken',
  CheckReferral = '/check-referral',
  Hotel = '/:id',
  Login = '/login',
  Logout = '/logout',
  Reauth = '/reauth',
  Recover = '/recover/:phone',
  Refresh = 'refresh',
  Registration = '/registration',
  Reset = '/reset',
  ResetAuth = '/resetAuth',
  SendCode = '/send-code',
  UpdateEmail = '/update-email',
  UpdateName = '/update-name',
  VerifyCode = '/verify-code',
}

export enum BaseRoutes {
  Auth = 'auth',
  Users = 'users',
  Hotels = 'hotels',
  Bookings = 'bookings',
}

export enum HotelFacilities {
  AirportShuttle = 'Airport Shuttle',
  FreeParking = 'Free Parking',
  FreeWiFi = 'Free Wifi',
  RoomService = 'Room Service',
}
