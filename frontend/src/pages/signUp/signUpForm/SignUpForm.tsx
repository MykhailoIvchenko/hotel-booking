import { LocalStorageKeys, SignUpSteps } from '@/utils/enums';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { toast } from 'react-toastify';
import { localStorageService } from '@/services/localStorageService';
import { whatsAppNumberPattern } from '@/utils/validationPatterns';
import CustomToast from '@/components/customToast/CustomToast';
import { useLazySendVerificationCodeQuery } from '@/rtkQApi/auth';
import Loader from '@/components/loader/Loader';
import styles from './signUpForm.module.css';

interface ISignInFormProps {
  setStep: React.Dispatch<React.SetStateAction<SignUpSteps>>;
}

interface ISignUpForm {
  whatsAppNumber: string;
}

const SignUpForm: React.FC<ISignInFormProps> = ({ setStep }) => {
  const [sendCode, { isLoading }] = useLazySendVerificationCodeQuery();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpForm>();

  const checkNumber = async (data: ISignUpForm) => {
    try {
      const { whatsAppNumber } = data;

      const result = await sendCode({ phone: whatsAppNumber });

      if (result.isSuccess) {
        localStorageService.save(LocalStorageKeys.SignUpNumber, whatsAppNumber);

        setStep(SignUpSteps.OtpVerification);
      } else {
        toast.error(
          <CustomToast
            title='Error'
            message='Something went wrong'
            type='error'
          />
        );
      }
    } catch {
      toast.error(
        <CustomToast
          title='Error'
          message='Something went wrong'
          type='error'
        />
      );
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
