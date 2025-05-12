import clsx from 'clsx';
import styles from './benefitsList.module.css';
import BenefitItem from '@/components/benefitItem/BenefitItem';

interface IBenefitsListProps {
  addClasses?: string;
}

const items = [
  { id: 1, text: 'Security Assurance' },
  { id: 2, text: 'Customer Support' },
  { id: 3, text: 'Transparent Policies' },
  { id: 4, text: 'Reputable Affiliations' },
];

const BenefitsList: React.FC<IBenefitsListProps> = ({ addClasses }) => {
  return (
    <ul className={clsx(styles.container, addClasses)}>
      {items.map((item) => (
        <BenefitItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default BenefitsList;
