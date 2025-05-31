import { Types } from 'mongoose';
import { BookingModel } from '../models/Booking.js';
import { BookingCreateDto } from '../utils/types.js';

async function getAll() {
  return BookingModel.find()
    .sort({ from: -1 })
    .populate('userId')
    .populate('hotelId');
}

async function getById(id: string) {
  if (!Types.ObjectId.isValid(id)) return null;
  return BookingModel.findById(id).populate('userId').populate('hotelId');
}

async function getByUserId(userId: string) {
  if (!Types.ObjectId.isValid(userId)) return [];
  return BookingModel.find({ userId }).sort({ from: -1 }).populate('hotelId');
}

async function getByHotelId(hotelId: string) {
  if (!Types.ObjectId.isValid(hotelId)) return [];
  return BookingModel.find({ hotelId }).sort({ from: -1 }).populate('userId');
}

async function create(data: BookingCreateDto) {
  const booking = new BookingModel(data);
  return booking.save();
}

export const bookingService = {
  getAll,
  getById,
  getByUserId,
  getByHotelId,
  create,
};
