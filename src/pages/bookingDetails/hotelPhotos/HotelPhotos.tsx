import mainPhoto from '@/assets/img/details/large.webp';
import thumb1 from '@/assets/img/details/small1.webp';
import thumb2 from '@/assets/img/details/small2.webp';
import thumb3 from '@/assets/img/details/small3.webp';
import thumb4 from '@/assets/img/details/small4.webp';
import styles from './hotelPhotos.module.css';

const photosThumbs = [thumb1, thumb2, thumb3, thumb4];

const HotelPhotos: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src={mainPhoto}
        alt='Hotel main photo'
        className={styles.mainPhoto}
      />

      {/*TODO: Create a separate component for this element*/}
      <ul className={styles.photosList}>
        {photosThumbs.map((thumb, i) => (
          <li key={i}>
            <img
              src={thumb}
              alt={'Hotel photo thumb'}
              className={styles.photosThumb}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelPhotos;
