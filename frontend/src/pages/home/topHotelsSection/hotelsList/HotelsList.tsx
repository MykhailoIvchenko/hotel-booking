import hotelImg1 from '@/assets/img/hotels/hotel1.webp';
import hotelImg2 from '@/assets/img/hotels/hotel2.webp';
import hotelImg3 from '@/assets/img/hotels/hotel3.webp';
import hotelImg4 from '@/assets/img/hotels/hotel4.webp';
import hotelImg5 from '@/assets/img/hotels/hotel5.webp';
import hotelImg6 from '@/assets/img/hotels/hotel6.webp';
import hotelImg7 from '@/assets/img/hotels/hotel7.webp';
import hotelImg8 from '@/assets/img/hotels/hotel8.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error Css
import 'swiper/css';
import HotelCard from './HotelCard';
import { IHotel } from '@/utils/types';
import styles from './hotelsList.module.css';
import { useGetHotelsQuery } from '@/rtkQApi/hotels';
import Splash from '@/pages/splash/Splash';

// const hotels: IHotel[] = [
//   {
//     id: 1,
//     thumbUrl: hotelImg1,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 2,
//     thumbUrl: hotelImg2,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 3,
//     thumbUrl: hotelImg3,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 4,
//     thumbUrl: hotelImg4,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 5,
//     thumbUrl: hotelImg5,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 6,
//     thumbUrl: hotelImg6,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 7,
//     thumbUrl: hotelImg7,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
//   {
//     id: 8,
//     thumbUrl: hotelImg8,
//     title: 'California Sunset/Twilight Boat Cruise',
//     location: 'Manchester',
//     price: 48.25,
//   },
// ];

const HotelsList: React.FC = () => {
  const { data, isLoading } = useGetHotelsQuery();

  const hotels = data?.data || [];

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
              thumbUrl={hotel.thumbUrl}
              title={hotel.title}
              location={hotel.location}
              price={hotel.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotelsList;
