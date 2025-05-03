import { LocalStorageKeys, SignUpSteps } from '@/utils/enums';
import { Controller, useForm } from 'react-hook-form';
import styles from './signUpForm.module.css';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { toast } from 'react-toastify';
import { localStorageService } from '@/services/localStorageService';
import { whatsAppNumberPattern } from '@/utils/validationPatterns';

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

  const checkNumber = async (data: ISignUpForm) => {
    try {
      const { whatsAppNumber } = data;

      localStorageService.save(LocalStorageKeys.SignUpNumber, whatsAppNumber);

      setStep(SignUpSteps.OtpVerification);
    } catch {
      toast.error('Something went wrong');
    }
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

      <Button type='submit' addClasses={styles.button}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
