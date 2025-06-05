import { HotelFacilities } from '@/utils/enums';
import styles from './hotelInfo.module.css';
import HotelFacilitiesList from './HotelFacilitiesList';

interface IHotelInfoProps {
  title: string;
  description: string[];
  facilities: HotelFacilities[];
}

const HotelInfo: React.FC<IHotelInfoProps> = ({
  title,
  description,
  facilities,
}) => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      {description.map((paragraph, i) => (
        <p key={i} className={styles.description}>
          {paragraph}
        </p>
      ))}

      <HotelFacilitiesList facilities={facilities} />
    </article>
  );
};

export default HotelInfo;
