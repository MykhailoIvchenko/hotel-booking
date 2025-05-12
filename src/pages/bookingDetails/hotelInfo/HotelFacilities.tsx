import WifiIcon from '@/assets/icons/wifi.svg?react';
import AiIcon from '@/assets/icons/ai-stars.svg?react';
import MealIcon from '@/assets/icons/milk.svg?react';
import ParkingIcon from '@/assets/icons/car.svg?react';
import ShuttleIcon from '@/assets/icons/airplane.svg?react';
import FacilityItem from './FacilityItem';
import styles from './hotelFacilities.module.css';

const facilities = [
  {
    name: 'Free Wifi',
    icon: WifiIcon,
  },
  {
    name: 'Room Service',
    icon: AiIcon,
  },
  {
    name: 'Meal',
    icon: MealIcon,
  },
  {
    name: 'Free Parking',
    icon: ParkingIcon,
  },
  {
    name: 'Airport Shuttle',
    icon: ShuttleIcon,
  },
];

const HotelFacilities: React.FC = () => {
  return (
    <div>
      <h5 className={styles.title}>Facilities</h5>

      {/*TODO: Implement a separate component for this*/}
      <ul className={styles.facilitiesList}>
        {facilities.map((facility, i) => (
          <FacilityItem key={i} name={facility.name} icon={facility.icon} />
        ))}
      </ul>
    </div>
  );
};

export default HotelFacilities;
