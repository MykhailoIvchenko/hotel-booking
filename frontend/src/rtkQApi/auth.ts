import {
  IAuthResponse,
  ILoginRequest,
  IResgistrationData,
  IResponseType,
  IUser,
} from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

const withAuthBase = (endpoint: string) => `${BasicEndpoints.Auth}${endpoint}`;

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginViaEmail: builder.query<IResponseType<IAuthResponse>, ILoginRequest>({
      query: (body) => ({
        url: withAuthBase(Endpoints.Login),
        method: ApiMethods.POST,
        body,
      }),
    }),
    register: builder.mutation<IResponseType<IUser>, IResgistrationData>({
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
    getMe: builder.query<IResponseType<IUser>, void>({
      query: () => withAuthBase(Endpoints.Me),
      providesTags: ['me'],
    }),
  }),
});

export const {
  useLazyLoginViaEmailQuery,
  useLazyLogoutQuery,
  useGetMeQuery,
  useLazyGetMeQuery,
  useRegisterMutation,
} = authApi;
