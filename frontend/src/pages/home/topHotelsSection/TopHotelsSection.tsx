import PageSectionStandard from '@/components/pageSectionStandard/PageSectionStandard';
import HotelsList from './hotelsList/HotelsList';

const TopHotelsSection: React.FC = () => {
  return (
    <PageSectionStandard
      title='Top Rated Hotels'
      description='Quality as judged by customers. Book at the ideal price!'
    >
      <HotelsList />  
    </PageSectionStandard>
  );
};

export default TopHotelsSection;
