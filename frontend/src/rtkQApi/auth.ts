import {
  IAuthResponse,
  ILoginRequest,
  IRegisterResponse,
  IResgistrationData,
  // IResponseType,
  IUser,
} from '@/utils/types';
import { baseApi } from './baseApi';
import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

const withAuthBase = (endpoint: string) => `${BasicEndpoints.Auth}${endpoint}`;

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendVerificationCode: builder.query<void, { phone: string }>({
      query: (body) => ({
        url: withAuthBase(Endpoints.SendCode),
        method: ApiMethods.POST,
        body,
      }),
    }),
    verifyCode: builder.query<
      { verified: boolean },
      { phone: string; code: string }
    >({
      query: (body) => ({
        url: withAuthBase(Endpoints.VerifyCode),
        method: ApiMethods.POST,
        body,
      }),
    }),
    checkReferralCode: builder.query<{ valid: boolean }, { code: string }>({
      query: (body) => ({
        url: withAuthBase(Endpoints.CheckReferral),
        method: ApiMethods.POST,
        body,
      }),
    }),
    loginViaPhone: builder.query<IAuthResponse, ILoginRequest>({
      query: (body) => ({
        url: withAuthBase(Endpoints.Login),
        method: ApiMethods.POST,
        body,
      }),
    }),
    register: builder.mutation<IRegisterResponse, IResgistrationData>({
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
    getMe: builder.query<{ user: IUser }, void>({
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
  useLazySendVerificationCodeQuery,
  useLazyVerifyCodeQuery,
  useLazyCheckReferralCodeQuery,
} = authApi;
