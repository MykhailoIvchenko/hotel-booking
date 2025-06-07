import Button from '@/components/button/Button';
import { Link } from 'react-router';
import AdditionalServices from './AdditionalServices';
import GuestsCounter from './GuestsCounter';
import SelectionItem from './SelectionItem';
import DateDropdown from '@/components/dateDropdown/DateDropdown';
import { helperService } from '@/services/helperService';
import { useBooking } from '@/hooks/useBooking';
import Loader from '@/components/loader/Loader';
import styles from './bookingBlock.module.css';

interface IBookingBlockProps {
  pricePerPerson: number;
  hotelId: string;
}

const BookingBlock: React.FC<IBookingBlockProps> = ({
  pricePerPerson,
  hotelId,
}) => {
  const {
    adultsCount,
    childrenCount,
    dateTo,
    dateFrom,
    setDateFrom,
    setDateTo,
    setAdultsCount,
    setChildrenCount,
    selectedServices,
    setSelectedServices,
    isLoading,
    handleConfirmBooking,
  } = useBooking(hotelId, pricePerPerson);

  const recalculateTotalCost = () => {
    if (dateFrom instanceof Date && dateTo instanceof Date && adultsCount) {
      const nights = helperService.getNumberOfNights(dateFrom, dateTo);

      const guestsCount = adultsCount + childrenCount;

      return nights * pricePerPerson * guestsCount;
    }

    return 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h5 className={styles.title}>Booking</h5>
      </div>

      <SelectionItem title='From'>
        <DateDropdown dateValue={dateFrom} setDate={setDateFrom} />
      </SelectionItem>

      <SelectionItem title='To'>
        <DateDropdown dateValue={dateTo} setDate={setDateTo} />
      </SelectionItem>

      <GuestsCounter
        adultsCount={adultsCount}
        setAdultsCount={setAdultsCount}
        childrenCount={childrenCount}
        setChildrenCount={setChildrenCount}
      />

      <AdditionalServices
        selectedServices={selectedServices}
        setSelectedServices={setSelectedServices}
      />

      <div>
        <div className={styles.priceTitle}>subtotal</div>

        <p className={styles.price}>{recalculateTotalCost()}</p>
      </div>

      <Button
        type={'button'}
        variant={'primary'}
        disabled={!dateFrom || !dateTo || !adultsCount || isLoading}
        onClick={handleConfirmBooking}
      >
        {isLoading ? <Loader variant='tiny' /> : 'Confirm Booking'}
      </Button>

      <Link to={'#'} className={styles.policyLink}>
        Cancellation Policy
      </Link>
    </div>
  );
};

export default BookingBlock;
