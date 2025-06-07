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
import { Link } from 'react-router';
import Loader from '@/components/loader/Loader';
import { useRegister } from '@/hooks/useRegister';

const CreateAccountForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<IUserAccountData>();

  const { isLoading, registerUser } = useRegister();

  const avatarValue = watch('photo');

  return (
    <form className={styles.container} onSubmit={handleSubmit(registerUser)}>
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
        disabled={isLoading}
      >
        Create Account
      </Button>

      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader variant='tiny' />

          <p className={styles.loaderText}>Creating Account</p>
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
