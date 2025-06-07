import MapPinIcon from '@/assets/icons/map-pin.svg?react';
import styles from './hotelCard.module.css';
import { routerConfig } from '@/routes/config';
import { Link } from 'react-router';

interface IHotelCardProps {
  id: string;
  thumbUrl: string;
  title: string;
  location: string;
  price: number;
}

const HotelCard: React.FC<IHotelCardProps> = ({
  id,
  thumbUrl,
  title,
  location,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbContainer}>
        <img src={thumbUrl} alt={'Card thumb'} className={styles.thumb} />
      </div>

      <div className={styles.content}>
        <h6 className={styles.title}>{title}</h6>

        <p className={styles.locationData}>
          <MapPinIcon className={styles.locationIcon} />

          <span className={styles.locationText}>{location}</span>
        </p>

        <p className={styles.footer}>
          <span>
            <strong className={styles.price}>${price}</strong>
            &nbsp;
            <span className={styles.priceUnit}>/&nbsp;person</span>
          </span>

          <Link
            to={`${routerConfig.booking.path}/${id}`}
            className={styles.link}
          >
            Book Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
