import { useLazySendVerificationCodeQuery } from '@/rtkQApi/auth';
import { localStorageService } from '@/services/localStorageService';
import { LocalStorageKeys } from '@/utils/enums';
import { toast } from 'react-toastify';
import CustomToast from '@/components/customToast/CustomToast';

export const useSendVerificationCode = (successHandler: VoidFunction) => {
  const [send, { isLoading }] = useLazySendVerificationCodeQuery();

  const sendCode = async (phone: string) => {
    try {
      const result = await send({ phone });

      if (result.isSuccess) {
        localStorageService.save(LocalStorageKeys.SignUpNumber, phone);

        successHandler();
      } else {
        toast.error(
          <CustomToast
            title='Error'
            message='Something went wrong'
            type='error'
          />
        );
      }
    } catch {
      toast.error(
        <CustomToast
          title='Error'
          message='Something went wrong'
          type='error'
        />
      );
    }
  };

  return { isLoading, sendCode };
};
