import { Link } from 'react-router';
import styles from './settlementCard.module.css';
import ArrowIcon from '@/assets/icons/arrow.svg?react';

interface ISettlementCardProps {
  image: string;
  title: string;
  price: number;
}

const SettlementCard: React.FC<ISettlementCardProps> = ({
  image,
  title,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={'Card poster'} className={styles.image} />
      </div>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descriptionContainer}>
        <span className={styles.price}>Average price ${price}</span>

        <Link to={'#'}>
          <ArrowIcon className={styles.linkIcon} />
        </Link>
      </p>
    </div>
  );
};

export default SettlementCard;
