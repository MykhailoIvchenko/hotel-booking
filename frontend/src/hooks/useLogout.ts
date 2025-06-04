import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import { routerConfig } from '@/routes/config';
import { useLazyLogoutQuery } from '@/rtkQApi/auth';
import { accessTokenService } from '@/services/accessTokenService';
import { useNavigate } from 'react-router';

export const useLogout = () => {
  const navigate = useNavigate();

  const setUser = useUserDispatch();

  const [logout] = useLazyLogoutQuery();

  const logoutUser = async () => {
    try {
      await logout();

      accessTokenService.remove();
      setUser(null);

      navigate(routerConfig.signIn.path);
    } catch (error) {
      console.log(error);
    }
  };

  return { logoutUser };
};
