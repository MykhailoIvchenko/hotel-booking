import { IHotel } from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

const withHotelsBase = (endpoint: string) =>
  `${BasicEndpoints.Hotels}${endpoint}`;

export const hotelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHotels: builder.query<IHotel[], void>({
      query: () => ({
        url: withHotelsBase(Endpoints.Basic),
        method: ApiMethods.GET,
      }),
      providesTags: [BasicEndpoints.Hotels],
    }),
    getHotelById: builder.query<IHotel, string>({
      query: (id) => ({
        url: withHotelsBase(Endpoints.Basic),
        method: ApiMethods.GET,
        params: { id },
      }),
    }),
  }),
});

export const { useGetHotelsQuery, useGetHotelByIdQuery } = hotelsApi;
