import CustomToast from '@/components/customToast/CustomToast';
import { useSelectUser } from '@/redux/hooks/selectHooks/useSelectUser';
import { routerConfig } from '@/routes/config';
import { useAddBookingMutation } from '@/rtkQApi/bookings';
import { helperService } from '@/services/helperService';
import { DateValue, IBooking } from '@/utils/types';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const useBooking = (hotelId: string, pricePerPerson: number) => {
  const navigate = useNavigate();

  const user = useSelectUser();

  const [createBooking, { isLoading }] = useAddBookingMutation();

  const [dateFrom, setDateFrom] = useState<DateValue>(new Date());
  const [dateTo, setDateTo] = useState<DateValue>(new Date());
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleConfirmBooking = async () => {
    if (!user) {
      toast.error(
        <CustomToast
          title='Error'
          message='Only authorized users can book the hotel'
          type={'error'}
        />
      );

      return;
    }

    if (!dateFrom || !(dateFrom instanceof Date)) {
      toast.error(
        <CustomToast
          title='Error'
          message='Please select the start date'
          type={'error'}
        />
      );

      return;
    }

    if (!dateTo || !(dateTo instanceof Date)) {
      toast.error(
        <CustomToast
          title='Error'
          message='Please select the end date'
          type={'error'}
        />
      );

      return;
    }

    if (adultsCount < 1) {
      toast.error(
        <CustomToast
          title='Error'
          message='At least one adult person should be among guests'
          type={'error'}
        />
      );

      return;
    }

    if (childrenCount < 0) {
      toast.error(
        <CustomToast
          title='Error'
          message="Guests amount can't be less than zero"
          type={'error'}
        />
      );

      return;
    }

    const nights = helperService.getNumberOfNights(dateFrom, dateTo);

    if (nights < 1) {
      toast.error(
        <CustomToast
          title='Error'
          message='The end date should be after the start date'
          type={'error'}
        />
      );

      return;
    }

    const guestsCount = adultsCount + childrenCount;

    const totalPrice = nights * pricePerPerson * guestsCount;

    try {
      const bookingData: Omit<IBooking, 'id'> = {
        userId: user.id,
        hotelId,
        from: dateFrom.toISOString(),
        to: dateTo.toISOString(),
        adults: adultsCount,
        children: childrenCount,
        additionalServices: selectedServices,
        totalPrice,
      };

      await createBooking(bookingData).unwrap();

      toast.success(
        <CustomToast
          title='Congratulations'
          message="You've booked the hotel"
          type={'success'}
        />
      );

      setTimeout(() => {
        navigate(routerConfig.home.path);
      }, 1000);
    } catch {
      toast.error(
        <CustomToast
          title='Error'
          message='Something went wrong'
          type={'error'}
        />
      );
    }
  };

  return {
    adultsCount,
    childrenCount,
    dateTo,
    dateFrom,
    setDateFrom,
    setDateTo,
    setAdultsCount,
    setChildrenCount,
    selectedServices,
    setSelectedServices,
    isLoading,
    handleConfirmBooking,
  };
};
