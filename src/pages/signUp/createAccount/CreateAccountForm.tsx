import { IUserAccountData } from '@/utils/types';
import { Controller, useForm } from 'react-hook-form';
import styles from './createAccountForm.module.css';
import UploadImage from '@/components/uploadImage/UploadImage';
import Input from '@/components/input/Input';
import {
  emailPattern,
  whatsAppNumberPattern,
} from '@/utils/validationPatterns';
import Button from '@/components/button/Button';
import clsx from 'clsx';
import { routerConfig } from '@/routes/config';
import { Link, useNavigate } from 'react-router';
import { localStorageService } from '@/services/localStorageService';
import { LocalStorageKeys } from '@/utils/enums';
import { toast } from 'react-toastify';
import CustomToast from '@/components/customToast/CustomToast';
import { usersService } from '@/services/usersService';
import useUserDispatch from '@/redux/hooks/dispatchHooks/useUserDispatch';
import Loader from '@/components/loader/Loader';
import { useState } from 'react';

const CreateAccountForm: React.FC = () => {
  const navigate = useNavigate();

  const setUser = useUserDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<IUserAccountData>();

  const handleRegister = async (data: IUserAccountData) => {
    //TODO: Move it to the register function or create a custom hook
    const userPhone = localStorageService.get(LocalStorageKeys.SignUpNumber);

    const { phone, fullName, password, email, alternatePhone, photo } = data;

    if (userPhone !== phone) {
      toast.error(
        <CustomToast
          title='Registration Error'
          message={`Your contact phone doesn't match the phone entered on the previous step`}
          type={'error'}
        />
      );

      return;
    }

    try {
      setIsLoading(true);

      const userData = { phone, alternatePhone, email, fullName, photo };
      const registeredUser = await usersService.register(userData, password);

      localStorageService.save(LocalStorageKeys.UserId, registeredUser.id);

      setUser(registeredUser);

      toast.success(
        <CustomToast
          title='Account Created!'
          message='Your account has been successfully created.'
          type={'success'}
        />
      );

      navigate(routerConfig.home.path);
    } catch {
      toast.error(
        <CustomToast
          title='Registration Error'
          message={`Something went wrong`}
          type={'error'}
        />
      );
    } finally {
      setIsLoading(false);
    }
  };

  const avatarValue = watch('photo');

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleRegister)}>
      <div className={styles.itemExpanded}>
        <UploadImage
          control={control}
          inputName={'photo'}
          value={avatarValue}
        />
      </div>

      <Controller
        name='fullName'
        control={control}
        rules={{
          required: 'Full name is required',
        }}
        render={({ field }) => (
          <Input
            {...field}
            label='Full Name'
            placeholder='Full Name'
            error={errors?.fullName?.message}
            isRequiredIcon
            wrapperClassName={styles.item}
          />
        )}
      />

      <Controller
        name='email'
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: emailPattern,
            message: 'Please enter a valid email',
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            label='Email'
            placeholder='Email'
            error={errors?.email?.message}
            isRequiredIcon
            wrapperClassName={styles.item}
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
          <Input
            {...field}
            label='Password'
            placeholder='Password'
            error={errors?.password?.message}
            isRequiredIcon
            wrapperClassName={styles.item}
            type='password'
          />
        )}
      />

      <Controller
        name='repeatPassword'
        control={control}
        rules={{
          required: 'Password confirmation is required',
          validate: (value) =>
            value === watch('password') || 'Passwords do not match',
        }}
        render={({ field }) => (
          <Input
            {...field}
            label='Retype Password'
            placeholder='Retype Password'
            error={errors?.repeatPassword?.message}
            isRequiredIcon
            wrapperClassName={styles.item}
            type='password'
          />
        )}
      />

      <Controller
        name='phone'
        control={control}
        rules={{
          required: 'Phone number is required',
          pattern: {
            value: whatsAppNumberPattern,
            message: 'Number should contain min 7 and max 15 digits',
          },
        }}
        render={({ field }) => (
          <Input
            {...field}
            label='Contact Number'
            placeholder='Contact Number'
            error={errors?.phone?.message}
            isRequiredIcon
          />
        )}
      />

      <Controller
        name='alternatePhone'
        control={control}
        rules={{
          required: 'Phone number is required',
          pattern: {
            value: whatsAppNumberPattern,
            message: 'Number should contain min 7 and max 15 digits',
          },
        }}
        render={({ field }) => (
          <Input
            label={'Alternate Contact Number'}
            {...field}
            placeholder='Contact Number'
            error={errors?.alternatePhone?.message}
          />
        )}
      />

      <Button
        type='submit'
        addClasses={clsx(styles.itemExpanded, styles.button)}
      >
        Create Account
      </Button>

      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader variant='tiny' />

          <p className={styles.loaderText}>Creatin Account</p>
        </div>
      ) : (
        <p className={clsx(styles.itemExpanded, styles.signIn)}>
          <span>Already have an account?</span>&nbsp;
          <Link to={routerConfig.signIn.path} className={styles.link}>
            Sign In
          </Link>
        </p>
      )}
    </form>
  );
};

export default CreateAccountForm;
