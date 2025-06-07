import { INotification } from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

const withNotificationsBase = (endpoint: string) =>
  `${BasicEndpoints.Notifications}${endpoint}`;

export const hotelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<INotification[], void>({
      query: () => ({
        url: withNotificationsBase(Endpoints.Basic),
        method: ApiMethods.GET,
      }),
      providesTags: [BasicEndpoints.Notifications],
    }),
    makeRead: builder.mutation<void, string>({
      query: (id) => ({
        url: withNotificationsBase(`${Endpoints.Basic}${id}`),
        method: ApiMethods.PATCH,
      }),
      invalidatesTags: [BasicEndpoints.Notifications],
    }),
    makeReadAll: builder.mutation<void, void>({
      query: () => ({
        url: withNotificationsBase(`${Endpoints.NotificationsMarkAllRead}`),
        method: ApiMethods.PATCH,
      }),
      invalidatesTags: [BasicEndpoints.Notifications],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useMakeReadMutation,
  useMakeReadAllMutation,
} = hotelsApi;
