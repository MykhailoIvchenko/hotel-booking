import BenefitItem from '../../../../components/benefitItem/BenefitItem';
import styles from './benefits.module.css';

const items = [
  { id: 1, text: 'Intuitive User Interface' },
  { id: 2, text: 'Transparent Booking Process' },
  { id: 3, text: 'Exceptional Customer Support' },
];

const Benefits: React.FC = () => {
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <BenefitItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Benefits;
