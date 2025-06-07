import mapImg from '@/assets/img/map.webp';
import styles from './locationBlock.module.css';

interface ILocationBlockProps {
  description: string;
}

const LocationBlock: React.FC<ILocationBlockProps> = ({ description }) => {
  return (
    <div className={styles.container}>
      <img src={mapImg} className={styles.poster} alt='Map with location' />

      <h6 className={styles.title}>Location</h6>

      <div className={styles.divider}></div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LocationBlock;
