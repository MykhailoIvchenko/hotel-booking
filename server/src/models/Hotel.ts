import mongoose, { Schema } from 'mongoose';
import { IHotel, ILocation } from '../utils/types.js';
import { HotelFacilities } from '../utils/enums.js';

const LocationSchema = new Schema<ILocation>({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  description: { type: String, required: true },
});

const HotelSchema = new Schema<IHotel>(
  {
    title: { type: String, required: true },
    location: { type: LocationSchema, required: true },
    pricePerPerson: { type: Number, required: true },
    posterUrl: { type: String, required: true },
    photosUrl: { type: [String], default: [] },
    facilities: {
      type: [String],
      enum: Object.values(HotelFacilities),
      default: [],
    },
    description: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
      },
    },
  }
);

export const Hotel = mongoose.model<IHotel>('Hotel', HotelSchema);
