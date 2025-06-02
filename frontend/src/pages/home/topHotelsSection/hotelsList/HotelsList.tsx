import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error Css
import 'swiper/css';
import HotelCard from './HotelCard';
import styles from './hotelsList.module.css';
import { useGetHotelsQuery } from '@/rtkQApi/hotels';
import Splash from '@/pages/splash/Splash';

const HotelsList: React.FC = () => {
  const { data, isLoading } = useGetHotelsQuery();

  const hotels = data || [];

  if (isLoading) {
    return <Splash />;
  }

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.8,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3.5,
          },
          1600: {
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 4.5,
          },
        }}
        // slidesOffsetBefore={200}
        slidesOffsetAfter={130}
        watchOverflow={true}
        centerInsufficientSlides={true}
      >
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <HotelCard
              id={hotel.id}
              thumbUrl={hotel.posterUrl}
              title={hotel.title}
              location={hotel.location?.name || ''}
              price={hotel.pricePerPerson}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelsList;
