import DigitInput from '@/components/digitInput/DigitInput';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { SignUpSteps } from '@/utils/enums';
import Loader from '@/components/loader/Loader';
import Button from '@/components/button/Button';
import styles from './otpVerificationForm.module.css';
import { useOtpVerification } from '@/hooks/useOtpVerification';

const initialDigits = ['', '', '', ''];

interface IOtpVerificationFormProps {
  setStep: React.Dispatch<React.SetStateAction<SignUpSteps>>;
}

const OtpVerificationForm: React.FC<IOtpVerificationFormProps> = ({
  setStep,
}) => {
  const [digits, setDigits] = useState<string[]>(initialDigits);
  const [resendCount, setResendCount] = useState<number>(30);
  const [canBeSent, setCanBeSent] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  //TODO: Create a custom hook for digits inputs set hanling to avoid code duplication
  const handleInputChange = (index: number, value: string) => {
    const updatedDigits = digits.map((digit, i) =>
      i === index ? value : digit
    );

    setDigits(updatedDigits);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const successHandler = () => {
    setStep(SignUpSteps.CreateAccount);
  };

  const { isError, isLoading, handleCheckCode } =
    useOtpVerification(successHandler);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await handleCheckCode(digits);
  };

  //TODO: Implement the resend logic on backend
  useEffect(() => {
    const interval = setInterval(() => {
      setResendCount((prev) => {
        if (prev <= 1) {
          setCanBeSent(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [canBeSent]);

  const handleResendClick = async () => {
    setResendCount(30);
    setCanBeSent(false);
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
        addClasses={styles.submitButton}
      >
        Verify
      </Button>

      {resendCount > 0 && (
        <p className={styles.resendInfo}>
          <span>Resend the code</span>
          <span className={styles.count}>0:{resendCount}</span>
        </p>
      )}

      {resendCount === 0 && (
        <p className={styles.resendAction}>
          Didn’t Get Code?
          <button
            type='button'
            onClick={handleResendClick}
            className={styles.resendButton}
          >
            Resend
          </button>
        </p>
      )}
    </form>
  );
};

export default OtpVerificationForm;
