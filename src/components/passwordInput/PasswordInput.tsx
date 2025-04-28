import { InputHTMLAttributes, useCallback, useState } from 'react';
import EyeIcon from '@/assets/icons/eye-true.svg?react';
import CrossedEyeIcon from '@/assets/icons/eye-false.svg?react';
import Input from '@/components/input/Input';
import styles from './passwordInput.module.css';

interface IPasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  label,
  error,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = useCallback(
    (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      event.stopPropagation();

      setIsVisible((prev) => !prev);
    },
    []
  );

  return (
    <Input
      iconPosition='right'
      inputIcon={
        isVisible ? (
          <CrossedEyeIcon
            onClick={handleVisibilityChange}
            className={styles.icon}
          />
        ) : (
          <EyeIcon onClick={handleVisibilityChange} className={styles.icon} />
        )
      }
      placeholder='Password'
      type={isVisible ? 'text' : 'password'}
      label={label}
      error={error}
      className={styles.input}
      {...props}
    />
  );
};

export default PasswordInput;
