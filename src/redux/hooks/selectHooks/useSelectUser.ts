import { selectUser } from '@/redux/slices/appSlice';
import { useAppSelector } from '@/redux/store';
import { IUser } from '@/utils/types';

type UseSelectUser = () => IUser | null;

export const useSelectUser: UseSelectUser = () => {
  const user = useAppSelector(selectUser);

  return user;
};
