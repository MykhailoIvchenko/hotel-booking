import React, { FormEvent, useRef, useState } from 'react';
import DigitInput from '@/components/digitInput/DigitInput';
import styles from './referralForm.module.css';
import Button from '@/components/button/Button';
import Loader from '@/components/loader/Loader';
import { SignUpSteps } from '@/utils/enums';
import { useLazyCheckReferralCodeQuery } from '@/rtkQApi/auth';
import { toast } from 'react-toastify';
import CustomToast from '@/components/customToast/CustomToast';

const initialDigits = ['', '', '', '', '', ''];

interface IReferralFormProps {
  setStep: React.Dispatch<React.SetStateAction<SignUpSteps>>;
}

const ReferralForm: React.FC<IReferralFormProps> = ({ setStep }) => {
  const [digits, setDigits] = useState<string[]>(initialDigits);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [handleCheckCode, { isLoading, isError }] =
    useLazyCheckReferralCodeQuery();

  const handleInputChange = (index: number, value: string) => {
    const updatedDigits = digits.map((digit, i) =>
      i === index ? value : digit
    );

    setDigits(updatedDigits);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await handleCheckCode({ code: digits.join('') }).unwrap();

      if (result.valid) {
        toast.success(
          <CustomToast
            title='Referral code applied successfully!'
            message='Enjoy your exclusive benefits.'
            type={'success'}
          />
        );

        setStep(SignUpSteps.WhatsAppNumber);
      } else {
        toast.error(
          <CustomToast
            title='Invalid referral code.'
            message='Please try again.'
            type={'error'}
          />
        );
      }
    } catch {
      toast.error(
        <CustomToast
          title='Error'
          message='Something went wrong during the code verification'
          type='error'
        />
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <ul className={styles.digitsList}>
        {digits.map((digit, index) => (
          <li key={index}>
            <DigitInput
              index={index}
              value={digit}
              externalHandler={handleInputChange}
              isError={isError}
              inputRef={(el: HTMLInputElement | null) =>
                (inputRefs.current[index] = el)
              }
            />
          </li>
        ))}
      </ul>

      {isLoading && (
        <div className={styles.loaderContainer}>
          <Loader variant='tiny' />

          <p className={styles.loaderText}>Verifying Code</p>
        </div>
      )}

      <Button
        type='submit'
        disabled={isLoading || digits.some((digit) => !digit)}
      >
        Submit
      </Button>
    </form>
  );
};

export default ReferralForm;
