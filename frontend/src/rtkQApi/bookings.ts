import { IBooking, IResponseType } from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

const withBookingsBase = (endpoint: string) =>
  `${BasicEndpoints.Bookings}${endpoint}`;

export const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation<IResponseType<void>, Omit<IBooking, 'id'>>({
      query: (body) => ({
        url: withBookingsBase(Endpoints.Basic),
        method: ApiMethods.POST,
        body,
      }),
    }),
  }),
});

export const { useAddBookingMutation } = bookingsApi;
