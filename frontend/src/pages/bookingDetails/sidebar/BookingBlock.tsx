import Button from '@/components/button/Button';
import { Link } from 'react-router';
import AdditionalServices from './AdditionalServices';
import GuestsCounter from './GuestsCounter';
import styles from './bookingBlock.module.css';
import { useState } from 'react';
import SelectionItem from './SelectionItem';
import DateDropdown from '@/components/dateDropdown/DateDropdown';
import { DateValue } from '@/utils/types';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';

interface IBookingBlockProps {
  pricePerPerson: number;
  hotelId: string;
}

const BookingBlock: React.FC<IBookingBlockProps> = ({
  pricePerPerson,
  hotelId,
}) => {
  const [dateFrom, setDateFrom] = useState<DateValue>(new Date());
  const [dateTo, setDateTo] = useState<DateValue>(new Date());
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const { id } = useSelectUser();

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

        <p className={styles.price}>{pricePerPerson}</p>
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
