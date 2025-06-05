import BookingBlock from './BookingBlock';
import LocationBlock from './LocationBlock';
import styles from './sidebar.module.css';

interface ISidebarProps {
  hotelId: string;
  locationDescription: string;
  pricePerPerson: number;
}

const Sidebar: React.FC<ISidebarProps> = ({
  hotelId,
  locationDescription,
  pricePerPerson,
}) => {
  return (
    <aside className={styles.container}>
      <BookingBlock hotelId={hotelId} pricePerPerson={pricePerPerson} />

      <LocationBlock description={locationDescription} />
    </aside>
  );
};

export default Sidebar;
