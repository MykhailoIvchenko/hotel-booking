import Dropdown from '../dropdown/Dropdown';
import clsx from 'clsx';
import CalendarIcon from '@/assets/icons/calendar-icon.svg?react';
import ArrowDownIcon from '@/assets/icons/arrow.svg?react';
import DatePicker from '../datePicker/DatePicker';
import { DateValue } from '@/utils/types';
import { helperService } from '@/services/helperService';
import styles from './dateDropdown.module.css';

interface IDateDropdownProps {
  dateValue: DateValue;
  setDate: React.Dispatch<React.SetStateAction<DateValue>>;
}

const DateDropdown: React.FC<IDateDropdownProps> = ({ dateValue, setDate }) => {
  return (
    <Dropdown
      options={{ position: 'top-start', autoPositions: false }}
      closeSelf={false}
      buttonClassName={styles.button}
      bodyClassName={styles.menuContainer}
      button={() => (
        <>
          <div className={styles.main}>
            <CalendarIcon className={clsx(styles.icon, styles.pale)} />

            <p className={styles.info}>
              {helperService.getFormattedDate(dateValue)}
            </p>
          </div>

          <ArrowDownIcon className={clsx(styles.icon, styles.dark)} />
        </>
      )}
    >
      <DatePicker value={dateValue} onChange={setDate} />
    </Dropdown>
  );
};

export default DateDropdown;
