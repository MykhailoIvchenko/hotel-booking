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
          'Referral code applied successfully!' +
            'Enjoy your exclusive benefits.'
        );

        //TODO: Add some query param or value to the state
        navigate(routerConfig.signUp.path);
      } else {
        toast.error('Invalid referral code.' + 'Please try again.');
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
