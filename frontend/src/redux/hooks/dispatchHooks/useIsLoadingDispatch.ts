import { setLoading } from '@/redux/slices/appSlice';
import { useAppDispatch } from '@/redux/store';

function useIsLoadingDispatch() {
  const dispatch = useAppDispatch();

  const setIsLoading = (isLoading: boolean) => dispatch(setLoading(isLoading));

  return setIsLoading;
}

export default useIsLoadingDispatch;
