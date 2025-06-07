import CustomToast from '@/components/customToast/CustomToast';
import { routerConfig } from '@/routes/config';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

/*TODO: Change it to use and API call*/

const refCode = '123456';

export const useCheckRefferalCode = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCheckCode = (digits: string[]) => {
    const code = digits.reduce((accum, current) => accum + current, '');

    setIsLoading(true);

    setTimeout(() => {
      if (code === refCode) {
        toast.success(
          <CustomToast
            title='Referral code applied successfully!'
            message='Enjoy your exclusive benefits.'
            type={'success'}
          />
        );

        //TODO: Add some query param or value to the state
        navigate(routerConfig.signUp.path);
      } else {
        toast.error(
          <CustomToast
            title='Invalid referral code.'
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
