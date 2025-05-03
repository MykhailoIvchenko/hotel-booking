import 'react-toastify/dist/ReactToastify.css';
import styles from './customToast.module.css';
import CrossIcon from '@/assets/icons/close.svg?react';
import OkIcon from '@/assets/icons/ok-icon.svg?react';
import clsx from 'clsx';

interface CustomToastProps {
  type: 'success' | 'error';
  title: string;
  message: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ type, title, message }) => {
  return (
    <div className={styles.toastContainer}>
      <div
        className={clsx(
          styles.iconContainer,
          type === 'success' && styles.success,
          type === 'error' && styles.error
        )}
      >
        {type === 'success' ? (
          <OkIcon className={styles.icon} />
        ) : (
          <CrossIcon className={styles.icon} />
        )}
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.message}>{message}</div>
      </div>
    </div>
  );
};

export default CustomToast;
