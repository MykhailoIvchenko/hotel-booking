import { SignUpSteps } from '@/utils/enums';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { whatsAppNumberPattern } from '@/utils/validationPatterns';
import Loader from '@/components/loader/Loader';
import styles from './signUpForm.module.css';
import { useSendVerificationCode } from '@/hooks/useSendVerificationCode';

interface ISignInFormProps {
  setStep: React.Dispatch<React.SetStateAction<SignUpSteps>>;
}

interface ISignUpForm {
  whatsAppNumber: string;
}

const SignUpForm: React.FC<ISignInFormProps> = ({ setStep }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpForm>();

  const successHandler = () => {
    setStep(SignUpSteps.OtpVerification);
  };

  const { isLoading, sendCode } = useSendVerificationCode(successHandler);

  const checkNumber = async (data: ISignUpForm) => {
    const { whatsAppNumber } = data;

    await sendCode(whatsAppNumber);
  };

  return (
    <form onSubmit={handleSubmit(checkNumber)} className={styles.container}>
      <Controller
        name='whatsAppNumber'
        control={control}
        rules={{
          required: 'WhatsApp number is required',
          pattern: {
            value: whatsAppNumberPattern,
            message: 'Number should contain min 7 and max 15 digits',
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            placeholder='Whatsapp Number'
            error={errors?.whatsAppNumber?.message}
          />
        )}
      />

      {isLoading && (
        <div className={styles.loaderContainer}>
          <Loader variant='tiny' />

          <p className={styles.loaderText}>Code sending</p>
        </div>
      )}

      <Button type='submit' addClasses={styles.button}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
