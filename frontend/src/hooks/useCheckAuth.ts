import { useLazyGetMeQuery } from '@/rtkQApi/auth';
import { localStorageService } from '@/services/localStorageService';
import { LocalStorageKeys } from '@/utils/enums';
import { useEffect } from 'react';

export const useCheckAuth = () => {
  const [getUser] = useLazyGetMeQuery();

  const checkAuthAndGetUser = async () => {
    const token = localStorageService.get(LocalStorageKeys.AccessToken);

    if (token) {
      await getUser();
    }
  };

  useEffect(() => {
    checkAuthAndGetUser();
  }, []);
};
