import { hotelService } from '../services/hotelService.js';
import { Request, Response } from 'express';
import { IHotel } from '../utils/types.js';
import { ApiError } from '../exceptions/ApiError.js';

export const hotelController = {
  async getAll(_: Request, res: Response): Promise<void> {
    const hotels = await hotelService.getAll();

    res.send(hotels);
  },

  async getById(id: string): Promise<IHotel> {
    const hotel = await hotelService.getById(id);

    if (!hotel) {
      throw ApiError.NotFound();
    }

    return hotel;
  },
};
