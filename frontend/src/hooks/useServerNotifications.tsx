import CustomToast from '@/components/customToast/CustomToast';
import {
  useGetNotificationsQuery,
  useMakeReadAllMutation,
  useMakeReadMutation,
} from '@/rtkQApi/notifications';
import { toast } from 'react-toastify';

export const useServerNotification = () => {
  const { data, isLoading } = useGetNotificationsQuery();

  const [readOne] = useMakeReadMutation();

  const [readAll] = useMakeReadAllMutation();

  const makeReadOne = async (id: string) => {
    try {
      await readOne(id).unwrap();
    } catch {
      toast.error(
        <CustomToast
          title='Server error'
          message='Something went wrong'
          type={'error'}
        />
      );
    }
  };

  const makeReadAll = async () => {
    try {
      await readAll().unwrap();
    } catch {
      toast.error(
        <CustomToast
          title='Server error'
          message='Something went wrong'
          type={'error'}
        />
      );
    }
  };

  return { notifications: data, isLoading, makeReadOne, makeReadAll };
};
