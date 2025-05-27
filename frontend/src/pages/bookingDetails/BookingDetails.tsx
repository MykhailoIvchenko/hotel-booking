import PageWrapper from '@/components/pageWrapper/PageWrapper';
import HeroSectionBookingDetails from './heroSectionBookingDetails/HeroSectionBookingDetails';
import Breadcrumbs from '@/components/breadCrumbs/BreadCrumbs';
import { routerConfig } from '@/routes/config';
import ContentSection from './contentSection/ContentSection';
import HotelPhotos from './hotelPhotos/HotelPhotos';
import Sidebar from './sidebar/Sidebar';
import HotelInfo from './hotelInfo/HotelInfo';

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
  return (
    <>
      <HeroSectionBookingDetails title={'Rixos Premium Dubai JBR'} />

      <PageWrapper>
        <Breadcrumbs crumbs={crumbs} current='Rixos Premium Dubai JBR' />

        <ContentSection>
          <div>
            <HotelPhotos />

            <HotelInfo />
          </div>

          <Sidebar />
        </ContentSection>
      </PageWrapper>
    </>
  );
};

export default BookingDetails;
