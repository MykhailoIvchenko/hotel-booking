import { hotelService } from '../services/hotelService.js';
import { Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';

export const hotelController = {
  async getAll(_: Request, res: Response): Promise<void> {
    const hotels = await hotelService.getAll();

    res.send(hotels);
  },

  async getById(req: Request, res: Response): Promise<void> {
    const hotelId = req.params.id;

    const hotel = await hotelService.getById(hotelId);

    if (!hotel) {
      throw ApiError.NotFound();
    }

    res.send(hotel);
  },
};
