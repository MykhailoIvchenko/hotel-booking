import HotelFacilities from './HotelFacilities';
import styles from './hotelInfo.module.css';

const HotelInfo: React.FC = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>Rixos Premium Dubai JBR</h2>
      <p className={styles.description}>
        A stylish urban hotspot located in the heart of Dubai’s Jumeirah Beach
        Residence. Experience trendy living where iconic design meets
        contemporary luxury, setting up the stage for exclusive and glamorous
        lifestyle experiences. With panoramic room views overlooking the beach
        and the world’s largest Ferris Wheel, Ain Dubai, the 35 – storey urban
        lifestyle hotel welcomes its guests from all around the world to stay at
        this exotic heaven where the pulse of the city can be best felt. The
        hotel is within close proximity to popular shopping destinations such as
        The Walk, Dubai Marina Mall, Mall of the Emirates and the city’s buzzing
        highway, Sheikh Zayed Road. Rixos Premium Dubai hotel offers 414 stylish
        rooms and suites with direct access to the beach.A stylish urban hotspot
        located in the heart of Dubai’s Jumeirah Beach Residence.
      </p>

      <p className={styles.description}>
        Ain Dubai, the 35 – storey urban lifestyle hotel welcomes its guests
        from all around the world to stay at this exotic heaven where the pulse
        of the city can be best felt. The hotel is within close proximity to
        popular shopping destinations such as The Walk, Dubai Marina Mall, Mall
        of the Emirates and the city’s buzzing highway, Sheikh Zayed Road. Rixos
        Premium Dubai hotel offers 414 stylish rooms and suites with direct
        access to the beach.
      </p>

      <HotelFacilities />
    </article>
  );
};

export default HotelInfo;
