import { bookingService } from '../services/bookingService.js';
import { Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';
import { notificationService } from '../services/notificationService.js';
import { NotificationTypes } from '../utils/enums.js';
import { IBooking } from '../utils/types.js';
import { hotelService } from '../services/hotelService.js';

export const bookingController = {
  async getAll(_: Request, res: Response): Promise<void> {
    const bookings = await bookingService.getAll();
    res.send(bookings);
  },

  async getById(req: Request, res: Response): Promise<void> {
    const bookingId = req.params.id;
    const booking = await bookingService.getById(bookingId);

    if (!booking) {
      throw ApiError.NotFound();
    }

    res.send(booking);
  },

  async getByUserId(req: Request, res: Response): Promise<void> {
    const userId = req.params.userId;
    const bookings = await bookingService.getByUserId(userId);

    res.send(bookings);
  },

  async getByHotelId(req: Request, res: Response): Promise<void> {
    const hotelId = req.params.hotelId;
    const bookings = await bookingService.getByHotelId(hotelId);

    res.send(bookings);
  },

  async create(req: Request, res: Response): Promise<void> {
    const userId = req.user?.id;
    const bookingData: IBooking = req.body;

    if (userId !== bookingData?.userId) {
      throw ApiError.BadRequest('User ids do not match');
    }

    if (new Date(bookingData.to) <= new Date(bookingData.from)) {
      throw ApiError.BadRequest('Date to should be after date from');
    }

    const newBooking = await bookingService.create(bookingData);

    const hotel = await hotelService.getById(bookingData.hotelId);
    const hotelTitle = hotel ? hotel.title : 'your hotel';

    await notificationService.create(
      userId,
      NotificationTypes.Success,
      'Booking Confirmed!',
      `Your booking at ${hotelTitle} is confirmed.`
    );

    res.status(201).send(newBooking);
  },
};
