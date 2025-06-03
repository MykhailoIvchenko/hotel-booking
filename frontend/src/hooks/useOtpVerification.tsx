import CustomToast from '@/components/customToast/CustomToast';
import { useLazyVerifyCodeQuery } from '@/rtkQApi/auth';
import { localStorageService } from '@/services/localStorageService';
import { LocalStorageKeys } from '@/utils/enums';
import { toast } from 'react-toastify';

export const useOtpVerification = (successHandler: VoidFunction) => {
  const [verifyCode, { isLoading, isError }] = useLazyVerifyCodeQuery();

  const handleCheckCode = async (digits: string[]) => {
    const code = digits.join('');

    const phone = localStorageService.get(LocalStorageKeys.SignUpNumber);

    try {
      if (phone) {
        const checkResult = await verifyCode({
          phone,
          code,
        }).unwrap();

        if (checkResult.verified) {
          successHandler();
        } else {
          toast.error(
            <CustomToast
              title='Invalid verification code.'
              message='Please try again.'
              type={'error'}
            />
          );
        }
      } else {
        toast.error(
          <CustomToast
            title='Phone was not found'
            message='Please try again.'
            type={'error'}
          />
        );
      }
    } catch {
      toast.error(
        <CustomToast
          title='Error'
          message='Something went wrong'
          type={'error'}
        />
      );
    }
  };

  return {
    isLoading,
    isError,
    handleCheckCode,
  };
};
