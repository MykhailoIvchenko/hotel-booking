import { IAuthResponse, ILoginRequest, IResgistrationData, IResponseType, IUser } from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, Endpoints } from '@/utils/enums';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginViaEmail: builder.query<IResponseType<IAuthResponse>, ILoginRequest>({
      query: (body) => ({
        url: Endpoints.Login,
        method: ApiMethods.POST,
        body,
      }),
    }),
    register: builder.mutation<IResponseType<IUser>, IResgistrationData>({
      query: (body) => ({
        url: Endpoints.Registration,
        method: ApiMethods.POST,
        body,
      }),
    }),
    logout: builder.query<void, void>({
      query: () => ({
        url: Endpoints.Logout,
        method: ApiMethods.POST,
      }),
    }),
    getMe: builder.query<IResponseType<IUser>, void>({
      query: () => Endpoints.Me,
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
