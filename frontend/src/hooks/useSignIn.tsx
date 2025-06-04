import CustomToast from '@/components/customToast/CustomToast';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import { routerConfig } from '@/routes/config';
import { useLazyLoginViaPhoneQuery } from '@/rtkQApi/auth';
import { accessTokenService } from '@/services/accessTokenService';
import { ISignInForm } from '@/utils/types';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const useSignIn = () => {
  const navigate = useNavigate();

  const setUser = useUserDispatch();

  const [login, { isLoading }] = useLazyLoginViaPhoneQuery();

  const loginUser = async (data: ISignInForm) => {
    const { whatsAppNumber, password } = data;

    try {
      const { user, accessToken } = await login({
        phone: whatsAppNumber,
        password,
      }).unwrap();

      accessTokenService.save(accessToken);

      setUser(user);

      navigate(routerConfig.home.path);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        <CustomToast
          title='Sign In Error'
          message={error?.message}
          type='error'
        />
      );
    }
  };

  return { loginUser, isLoading };
};
