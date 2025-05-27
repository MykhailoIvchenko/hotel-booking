import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import { localStorageService } from '@/services/localStorageService';
import { usersService } from '@/services/usersService';
import { LocalStorageKeys } from '@/utils/enums';
import { useEffect } from 'react';

export const useCheckAuth = () => {
  const setUser = useUserDispatch();

  const checkAuthAndGetUser = async () => {
    const userId = localStorageService.get(LocalStorageKeys.UserId);

    if (userId) {
      try {
        const userFromDb = await usersService.getUserById(userId);

        setUser(userFromDb);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    checkAuthAndGetUser();
  }, []);
};
