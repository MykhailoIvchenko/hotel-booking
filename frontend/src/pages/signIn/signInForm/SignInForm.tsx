import Input from '@/components/input/Input';
import { Controller, useForm } from 'react-hook-form';
import styles from './signInForm.module.css';
import PasswordInput from '@/components/passwordInput/PasswordInput';
import Button from '@/components/button/Button';
import { Link } from 'react-router';
import { routerConfig } from '@/routes/config';
import { whatsAppNumberPattern } from '@/utils/validationPatterns';
import Loader from '@/components/loader/Loader';
import { ISignInForm } from '@/utils/types';
import { useSignIn } from '@/hooks/useSignIn';

const SignInForm: React.FC = () => {
  const { loginUser, isLoading } = useSignIn();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignInForm>();

  return (
    <form onSubmit={handleSubmit(loginUser)} className={styles.container}>
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
        <Link
          // to={routerConfig.forgotPassword.path}
          to={'#'}
          className={styles.link}
        >
          Forgot Password?
        </Link>
      </div>

      <Button type='submit' addClasses={styles.button} disabled={isLoading}>
        Sign In
      </Button>

      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader variant='tiny' />

          <p className={styles.loaderText}>Sign in processing</p>
        </div>
      ) : (
        <p className={styles.signUp}>
          <span>Don't have an account?</span>&nbsp;
          <Link to={routerConfig.signUp.path} className={styles.link}>
            Sign Up
          </Link>
        </p>
      )}
    </form>
  );
};

export default SignInForm;
