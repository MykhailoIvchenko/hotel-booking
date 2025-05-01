import clsx from 'clsx';
import { ReactNode, InputHTMLAttributes } from 'react';
import RequiredIcon from '@/assets/icons/star-required-icon.svg?react';
import styles from './input.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputIcon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isErrorWithoutText?: boolean;
  error?: string;
  wrapperClassName?: string;
  caliber?: 'sm' | 'md' | 'lg';
  ref?: React.Ref<HTMLInputElement>;
  isSmallRadius?: boolean;
  isRequiredIcon?: boolean;
}

const Input: React.FC<IInputProps> = ({
  label,
  error,
  isErrorWithoutText,
  wrapperClassName,
  inputIcon,
  iconPosition = 'left',
  className,
  caliber = 'md',
  ref,
  isSmallRadius = false,
  isRequiredIcon = false,
  ...props
}) => {
  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      {label && (
        <label className={styles.label}>
          {label}
          {isRequiredIcon && <RequiredIcon className={styles.requiredIcon} />}
        </label>
      )}

      <div
        className={clsx(
          styles.inputWrapper,
          isSmallRadius && styles.smallRadius,
          styles[`input--${caliber}`],
          (error || isErrorWithoutText) && styles.inputError,
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
