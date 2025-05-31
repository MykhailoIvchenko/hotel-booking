import { bookingService } from '../services/bookingService.js';
import { Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';

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
    const bookingData = req.body;

    if (new Date(bookingData.to) <= new Date(bookingData.from)) {
      throw ApiError.BadRequest('Date to should be after date from');
    }

    const newBooking = await bookingService.create(bookingData);
    res.status(201).send(newBooking);
  },
};
