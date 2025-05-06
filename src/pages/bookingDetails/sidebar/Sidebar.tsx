import BookingBlock from './BookingBlock';
import LocationBlock from './LocationBlock';
import styles from './sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.container}>
      <BookingBlock />

      <LocationBlock />
    </aside>
  );
};

export default Sidebar;
