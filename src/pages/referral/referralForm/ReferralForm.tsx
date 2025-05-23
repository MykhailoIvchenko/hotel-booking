import React, { FormEvent, useRef, useState } from 'react';
import DigitInput from '@/components/digitInput/DigitInput';
import styles from './referralForm.module.css';
import { useCheckRefferalCode } from '@/hooks/useCheckReferralCode';
import Button from '@/components/button/Button';
import Loader from '@/components/loader/Loader';

const initialDigits = ['', '', '', '', '', ''];

const ReferralForm: React.FC = () => {
  const [digits, setDigits] = useState<string[]>(initialDigits);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const updatedDigits = digits.map((digit, i) =>
      i === index ? value : digit
    );

    setDigits(updatedDigits);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const { isError, isLoading, handleCheckCode } = useCheckRefferalCode();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleCheckCode(digits);
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
