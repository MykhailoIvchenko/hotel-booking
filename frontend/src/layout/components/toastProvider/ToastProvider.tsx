import { ToastContainer, CloseButtonProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CrossIcon from '@/assets/icons/close.svg?react';
import styles from './toastProvider.module.css';

const CustomCloseButton = ({ closeToast }: CloseButtonProps) => (
  <button onClick={closeToast} className={styles.closeButton}>
    <CrossIcon className={styles.icon} />
  </button>
);

const ToastProvider = () => {
  return (
    <ToastContainer
      hideProgressBar={true}
      theme='light'
      icon={false}
      closeButton={CustomCloseButton}
      toastClassName={(context) => {
        let borderClass = styles.defaultBorder;

        if (context?.type === 'success') {
          borderClass = styles.successBorder;
        } else if (context?.type === 'error') {
          borderClass = styles.errorBorder;
        }

        return `${styles.toastReset} ${borderClass}`;
      }}
    />
  );
};

export default ToastProvider;
