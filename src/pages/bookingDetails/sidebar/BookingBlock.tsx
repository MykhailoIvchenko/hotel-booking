import Button from '@/components/button/Button';
import styles from './bookingBlock.module.css';
import { Link } from 'react-router';
import AdditionalServices from './AdditionalServices';
import GuestsCounter from './GuestsCounter';

const BookingBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h5 className={styles.title}>Booking</h5>
      </div>

      <GuestsCounter />

      <AdditionalServices />

      <div>
        <div className={styles.priceTitle}>subtotal</div>

        <p className={styles.price}>$148.25</p>
      </div>

      <Button type={'button'} variant={'primary'}>
        Confirm Booking
      </Button>

      <Link to={'#'} className={styles.policyLink}>
        Cancellation Policy
      </Link>
    </div>
  );
};

export default BookingBlock;
