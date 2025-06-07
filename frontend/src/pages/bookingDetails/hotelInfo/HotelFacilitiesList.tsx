import WifiIcon from '@/assets/icons/wifi.svg?react';
import AiIcon from '@/assets/icons/ai-stars.svg?react';
import MealIcon from '@/assets/icons/milk.svg?react';
import ParkingIcon from '@/assets/icons/car.svg?react';
import ShuttleIcon from '@/assets/icons/airplane.svg?react';
import FacilityItem from './FacilityItem';
import { HotelFacilities } from '@/utils/enums';
import styles from './hotelFacilities.module.css';

interface IHotelFacilitiesListProps {
  facilities: HotelFacilities[];
}

const mapFacilityIcon = {
  [HotelFacilities.AirportShuttle]: ShuttleIcon,
  [HotelFacilities.FreeParking]: ParkingIcon,
  [HotelFacilities.FreeWiFi]: WifiIcon,
  [HotelFacilities.Meal]: MealIcon,
  [HotelFacilities.RoomService]: AiIcon,
};

const HotelFacilitiesList: React.FC<IHotelFacilitiesListProps> = ({
  facilities,
}) => {
  return (
    <div>
      <h5 className={styles.title}>Facilities</h5>

      {/*TODO: Implement a separate component for this*/}
      <ul className={styles.facilitiesList}>
        {facilities.map((facility, i) => (
          <FacilityItem
            key={i}
            name={facility}
            icon={mapFacilityIcon[facility]}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotelFacilitiesList;
