import OkIcon from '@/assets/icons/ok-icon.svg?react';
import styles from './checkbox.module.css';

interface ICheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ({ checked, onChange, id }) => {
  const checkboxId = id || 'custom-checkbox';

  return (
    <label htmlFor={checkboxId} className={styles.wrapper}>
      <input
        id={checkboxId}
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.input}
      />
      <span className={`${styles.checkbox} ${checked ? styles.checked : ''}`}>
        {checked && <OkIcon className={styles.icon} />}
      </span>
    </label>
  );
};

export default CheckBox;
