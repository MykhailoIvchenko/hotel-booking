import mongoose, { Schema } from 'mongoose';
import { NotificationTypes } from '../utils/enums.js';
import { INotification } from '../utils/types.js';

const NotificationSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(NotificationTypes),
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

NotificationSchema.virtual('id').get(function (this: mongoose.Document) {
  return this._id.toString();
});

//Convert Date to timestamp to pass it to the frontend
NotificationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
    ret.createdAt = new Date(ret.createdAt).getTime();
  },
});

const NotificationModel = mongoose.model<INotification>(
  'Notification',
  NotificationSchema
);

export default NotificationModel;
