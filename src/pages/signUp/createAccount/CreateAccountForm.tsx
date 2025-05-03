import { IUserAccountData } from '@/utils/types';
import { Controller, useForm } from 'react-hook-form';
import styles from './createAccountForm.module.css';
import UploadImage from '@/components/uploadImage/UploadImage';

const CreateAccountForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserAccountData>();

  const handleRegister = (data: IUserAccountData) => {};

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleRegister)}>
      <UploadImage control={control} inputName={'photo'} />
    </form>
  );
};

export default CreateAccountForm;
