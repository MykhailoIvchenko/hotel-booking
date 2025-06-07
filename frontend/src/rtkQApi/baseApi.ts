import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authService } from '../services/authService';
import { accessTokenService } from '../services/accessTokenService';
import { BasicEndpoints } from '@/utils/enums';

const publicEndpoints = [BasicEndpoints.Hotels] as string[];

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { endpoint }) => {
    if (publicEndpoints.includes(endpoint)) {
      return headers;
    }

    const token = accessTokenService.get();

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    try {
      const { accessToken } = await authService.refresh();
      accessTokenService.save(accessToken);

      result = await baseQuery(args, api, extraOptions);
    } catch (err) {
      console.log(err);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: [
    'me',
    BasicEndpoints.Users,
    BasicEndpoints.Hotels,
    BasicEndpoints.Bookings,
    BasicEndpoints.Notifications,
  ],
});
