import OkIcon from '@/assets/icons/ok-icon.svg?react';
import styles from './benefitItem.module.css';

interface IBenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<IBenefitItemProps> = ({ text }) => {
  return (
    <li className={styles.container}>
      <span className={styles.iconContainer}>
        <OkIcon />
      </span>
      <span>{text}</span>
    </li>
  );
};

export default BenefitItem;
