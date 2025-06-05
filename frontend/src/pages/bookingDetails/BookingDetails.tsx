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

  if (isLoading) {
    return <Splash />;
  }

  const {
    id,
    title,
    posterUrl,
    photosUrl,
    description,
    facilities,
    location,
    pricePerPerson,
  } = hotel;

  return (
    <>
      <HeroSectionBookingDetails title={title} />

      <PageWrapper>
        <Breadcrumbs crumbs={crumbs} current={title} />

        <ContentSection>
          <div>
            <HotelPhotos mainPhoto={posterUrl} photosThumbs={photosUrl} />

            <HotelInfo
              title={title}
              description={description}
              facilities={facilities}
            />
          </div>

          <Sidebar
            hotelId={id}
            locationDescription={location.description}
            pricePerPerson={pricePerPerson}
          />
        </ContentSection>
      </PageWrapper>
    </>
  );
};

export default BookingDetails;
