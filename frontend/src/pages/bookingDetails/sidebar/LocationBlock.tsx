import mapImg from '@/assets/img/map.webp';
import styles from './locationBlock.module.css';

const LocationBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={mapImg} className={styles.poster} alt='Map with location' />

      <h6 className={styles.title}>Location</h6>

      <div className={styles.divider}></div>

      <p className={styles.description}>
        Al Mamsha Street The Walk Jbr Jumeirah Beach Resid, Dubai 643660 United
        Arab Emirates
      </p>
    </div>
  );
};

export default LocationBlock;
