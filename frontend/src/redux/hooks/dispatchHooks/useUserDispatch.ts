import { setUser } from '@/redux/slices/appSlice';
import { useAppDispatch } from '@/redux/store';
import { IUser } from '@/utils/types';

function useUserDispatch() {
  const dispatch = useAppDispatch();

  const setUserData = (user: IUser | null) => dispatch(setUser(user));

  return setUserData;
}

export default useUserDispatch;
