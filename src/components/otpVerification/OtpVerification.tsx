import { LocalStorageKeys, SignUpSteps } from '@/utils/enums';
import ArrowIcon from '@/assets/icons/arrow.svg?react';
import styles from './otpVerification.module.css';
import { localStorageService } from '@/services/localStorageService';
import OtpVerificationForm from './otpVerificationForm/OtpVerificationForm';

interface IOtpVerificationProps {
  setStep: React.Dispatch<React.SetStateAction<SignUpSteps>>;
}

const OtpVerification: React.FC<IOtpVerificationProps> = ({ setStep }) => {
  const whatsAppNumber = localStorageService.get(LocalStorageKeys.SignUpNumber);

  const handleGoBack = () => {
    setStep(SignUpSteps.WhatsAppNumber);
  };

  return (
    <section className={styles.container}>
      <div>
        <div className={styles.buttonWithTitle}>
          <ArrowIcon className={styles.backIcon} onClick={handleGoBack} />

          <h2 className={styles.title}>OTP Verification</h2>
        </div>

        <p className={styles.description}>
          Please enter the OTP you received to
        </p>

        <p className={styles.phoneNumber}>{whatsAppNumber}</p>
      </div>

      <OtpVerificationForm setStep={setStep} />
    </section>
  );
};

export default OtpVerification;
