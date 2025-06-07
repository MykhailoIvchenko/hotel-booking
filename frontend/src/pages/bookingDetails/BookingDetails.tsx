import PageWrapper from '@/components/pageWrapper/PageWrapper';
import HeroSectionBookingDetails from './heroSectionBookingDetails/HeroSectionBookingDetails';
import Breadcrumbs from '@/components/breadCrumbs/BreadCrumbs';
import { routerConfig } from '@/routes/config';
import ContentSection from './contentSection/ContentSection';
import HotelPhotos from './hotelPhotos/HotelPhotos';
import Sidebar from './sidebar/Sidebar';
import HotelInfo from './hotelInfo/HotelInfo';
import { useHotelDetails } from '@/hooks/useHotelDetails';
import Splash from '../splash/Splash';

const crumbs = [
  {
    name: 'Home',
    to: routerConfig.home.path,
  },
  {
    name: 'Search Results',
    to: routerConfig.searchResults.path,
  },
];

const BookingDetails: React.FC = () => {
  const { isLoading, hotel } = useHotelDetails();

  if (isLoading || !hotel) {
    return <Splash />;
  }

  return (
    <>
      <HeroSectionBookingDetails title={hotel?.title} />

      <PageWrapper>
        <Breadcrumbs crumbs={crumbs} current={hotel?.title} />

        <ContentSection>
          <div>
            <HotelPhotos
              mainPhoto={hotel?.posterUrl}
              photosThumbs={hotel?.photosUrl}
            />

            <HotelInfo
              title={hotel?.title}
              description={hotel?.description}
              facilities={hotel?.facilities}
            />
          </div>

          <Sidebar
            hotelId={hotel?.id}
            locationDescription={hotel?.location?.description}
            pricePerPerson={hotel?.pricePerPerson}
          />
        </ContentSection>
      </PageWrapper>
    </>
  );
};

export default BookingDetails;
