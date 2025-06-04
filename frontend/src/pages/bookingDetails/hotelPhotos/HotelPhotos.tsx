import styles from './hotelPhotos.module.css';

interface IHotelPhotosProps {
  mainPhoto: string;
  photosThumbs: string[];
}

const HotelPhotos: React.FC<IHotelPhotosProps> = ({
  mainPhoto,
  photosThumbs,
}) => {
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
