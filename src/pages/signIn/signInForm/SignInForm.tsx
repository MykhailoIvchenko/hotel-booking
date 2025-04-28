import Input from '@/components/input/Input';
import { Controller, useForm } from 'react-hook-form';
import styles from './signInForm.module.css';
import PasswordInput from '@/components/passwordInput/PasswordInput';
import Button from '@/components/button/Button';
import { Link } from 'react-router';
import { routerConfig } from '@/routes/config';

interface ISignInForm {
  whatsAppNumber: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignInForm>();

  const loginUser = async (data: ISignInForm) => {};

  return (
    <form onSubmit={handleSubmit(loginUser)} className={styles.container}>
      <Controller
        name='whatsAppNumber'
        control={control}
        rules={{
          required: 'WhatsApp number is required',
          pattern: {
            value: /^\+\d{7,15}$/,
            message: 'Only alphanumeric characters are allowed',
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

      <Controller
        name='password'
        control={control}
        rules={{
          required: 'Password is required',
        }}
        render={({ field }) => (
          <PasswordInput {...field} error={errors?.password?.message} />
        )}
      />

      <div>
        <Link to={routerConfig.forgotPassword.path} className={styles.link}>
          Forgot Password?
        </Link>
      </div>

      <Button type='submit' addClasses={styles.button}>
        Sign In
      </Button>

      <p className={styles.signUp}>
        <span>Don't have an account?</span>&nbsp;
        <Link to={routerConfig.signUp.path} className={styles.link}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
