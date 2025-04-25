import clsx from 'clsx';
import { ReactNode, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputIcon?: ReactNode;
  iconPosition?: 'left' | 'right';
  error?: string;
  wrapperClassName?: string;
  caliber?: 'xs' | 'md' | 'lg';
  ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<IInputProps> = ({
  label,
  error,
  wrapperClassName,
  inputIcon,
  iconPosition = 'left',
  className,
  caliber = 'md',
  ref,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        wrapperClassName,
        error && styles.inputError
      )}
    >
      {label && <label className={styles.label}>{label}</label>}

      <div
        className={clsx(
          styles.inputWrapper,
          styles[`input--${caliber}`],
          iconPosition &&
            iconPosition === 'right' &&
            styles['inputWrapper--reversed']
        )}
      >
        {inputIcon}

        <input ref={ref} className={clsx(styles.input, className)} {...props} />
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
