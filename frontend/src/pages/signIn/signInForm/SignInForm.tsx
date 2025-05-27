import Input from '@/components/input/Input';
import { Controller, useForm } from 'react-hook-form';
import styles from './signInForm.module.css';
import PasswordInput from '@/components/passwordInput/PasswordInput';
import Button from '@/components/button/Button';
import { Link, useNavigate } from 'react-router';
import { routerConfig } from '@/routes/config';
import { whatsAppNumberPattern } from '@/utils/validationPatterns';
import CustomToast from '@/components/customToast/CustomToast';
import { toast } from 'react-toastify';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import { useState } from 'react';
import Loader from '@/components/loader/Loader';
import { usersService } from '@/services/usersService';
import { localStorageService } from '@/services/localStorageService';
import { LocalStorageKeys } from '@/utils/enums';

interface ISignInForm {
  whatsAppNumber: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const navigate = useNavigate();

  const setUser = useUserDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignInForm>();

  const loginUser = async (data: ISignInForm) => {
    const { whatsAppNumber, password } = data;

    try {
      setIsLoading(true);

      const userData = await usersService.login(whatsAppNumber, password);

      localStorageService.save(LocalStorageKeys.UserId, userData.id);

      setUser(userData);

      navigate(routerConfig.home.path);
    } catch (error) {
      console.log(error);
      toast.error(
        <CustomToast
          title='Sign In Error'
          message='Invalid credentials'
          type='error'
        />
      );
    } finally {
      setIsLoading(false);
    }
  };

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
