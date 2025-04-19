import { selectIsLoading } from '@/redux/slices/appSlice';
import { useAppSelector } from '@/redux/store';

type UseSelectIsLoading = () => boolean;

export const useSelectIsLoading: UseSelectIsLoading = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return isLoading;
};
