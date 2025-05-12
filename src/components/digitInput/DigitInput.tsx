import Input from '../input/Input';
import styles from './digitInput.module.css';

interface IDigitInputProps {
  index: number;
  value: string;
  isError?: boolean;
  externalHandler: (index: number, value: string) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
}

const DigitInput: React.FC<IDigitInputProps> = ({
  index,
  value,
  isError,
  externalHandler,
  inputRef,
}) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    const onlyDigits = value.replace(/\D/g, '');

    const oneDigit = onlyDigits.slice(0, 1);

    externalHandler(index, oneDigit);
  }

  return (
    <Input
      ref={inputRef}
      onChange={handleChange}
      value={value}
      caliber={'lg'}
      wrapperClassName={styles.container}
      className={styles.input}
      isSmallRadius
      placeholder='-'
      isErrorWithoutText={isError}
    />
  );
};

export default DigitInput;
