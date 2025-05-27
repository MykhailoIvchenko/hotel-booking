import Button from '@/components/button/Button';
import styles from './infoBlock.module.css';
import BenefitsList from './BenefitsList';

const InfoBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button
        type='button'
        variant={'secondary'}
        size='sm'
        addClasses={styles.button}
      >
        Easy payment
      </Button>

      <h2 className={styles.title}>We offer tours in a range of locations</h2>

      <p className={styles.description}>
        Choose one style or create a package, fill your passports with
        adventures together.
      </p>

      <BenefitsList addClasses={styles.benefits} />
    </div>
  );
};

export default InfoBlock;
