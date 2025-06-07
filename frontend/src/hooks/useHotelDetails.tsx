import { routerConfig } from '@/routes/config';
import { useGetHotelByIdQuery } from '@/rtkQApi/hotels';
import { IHotel } from '@/utils/types';
import { useNavigate, useParams } from 'react-router';

export const useHotelDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetHotelByIdQuery(id || '');

  if (isError) {
    navigate(routerConfig.home.path);
  }

  return { isLoading, hotel: data as IHotel };
};
