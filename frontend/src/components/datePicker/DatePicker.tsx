import { DateValue } from '@/utils/types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './datePicker.module.css';

interface IDatePickerProps {
  value: DateValue;
  onChange: React.Dispatch<React.SetStateAction<DateValue>>;
}

const DatePicker: React.FC<IDatePickerProps> = ({ value, onChange }) => {
  //TODO: Use tileClassName, tileContent, tileDisabled properties instead of redefining existing styles
  return (
    <Calendar
      onChange={onChange}
      value={value}
      locale='en-US'
      prev2Label={null}
      next2Label={null}
      minDate={new Date()}
      className={styles.container}
    />
  );
};

export default DatePicker;
