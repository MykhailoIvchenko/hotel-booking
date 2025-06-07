import InfoBlock from './InfoBlock';
import PostersBlock from './PostersBlock';
import styles from './promoSection.module.css';

const PromoSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <PostersBlock />

        <InfoBlock />
      </div>
    </section>
  );
};

export default PromoSection;
