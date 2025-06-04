import { Hotel } from '../models/Hotel.js';

async function getAll() {
  const hotels = await Hotel.find().sort({ title: 1 });

  return hotels;
}

async function getById(id: string) {
  return Hotel.findById(id);
}

export const hotelService = {
  getAll,
  getById,
};
