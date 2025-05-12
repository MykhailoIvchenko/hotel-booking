import CustomToast from '@/components/customToast/CustomToast';
import { useState } from 'react';
import { toast } from 'react-toastify';

/*TODO: Change it to use and API call*/

const otpCode = '1234';

export const useOtpVerification = (successHandler: VoidFunction) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleCheckCode = (digits: string[]) => {
    const code = digits.reduce((accum, current) => accum + current, '');

    setIsLoading(true);

    setTimeout(() => {
      if (code === otpCode) {
        successHandler();
      } else {
        toast.error(
          <CustomToast
            title='Invalid verification code.'
            message='Please try again.'
            type={'error'}
          />
        );
        setIsError(true);
      }

      setIsLoading(false);
    }, 1500);
  };

  return {
    isLoading,
    isError,
    handleCheckCode,
  };
};
