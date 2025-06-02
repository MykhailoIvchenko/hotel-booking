import {
  IAuthResponse,
  ILoginRequest,
  IResgistrationData,
  // IResponseType,
  IUser,
} from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

const withAuthBase = (endpoint: string) => `${BasicEndpoints.Auth}${endpoint}`;

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginViaPhone: builder.query<IAuthResponse, ILoginRequest>({
      query: (body) => ({
        url: withAuthBase(Endpoints.Login),
        method: ApiMethods.POST,
        body,
      }),
    }),
    register: builder.mutation<IUser, IResgistrationData>({
      query: (body) => ({
        url: withAuthBase(Endpoints.Registration),
        method: ApiMethods.POST,
        body,
      }),
    }),
    logout: builder.query<void, void>({
      query: () => ({
        url: withAuthBase(Endpoints.Logout),
        method: ApiMethods.POST,
      }),
    }),
    getMe: builder.query<IUser, void>({
      query: () => withAuthBase(Endpoints.Me),
      providesTags: ['me'],
    }),
  }),
});

export const {
  useLazyLoginViaPhoneQuery,
  useLazyLogoutQuery,
  useGetMeQuery,
  useLazyGetMeQuery,
  useRegisterMutation,
} = authApi;
