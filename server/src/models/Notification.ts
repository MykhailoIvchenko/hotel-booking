import mongoose, { Schema, Types } from 'mongoose';
import { NotificationTypes } from '../utils/enums.js';
import { INotificationBasic } from '../utils/types.js';

export interface INotificationDoc extends INotificationBasic {
  userId: Types.ObjectId | string;
  createdAt: Date;
}

const NotificationSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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

// Convert Date to timestamp and exclude userId from frontend response
NotificationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
    delete ret.userId;
    ret.createdAt = new Date(ret.createdAt).getTime();
  },
});

const NotificationModel = mongoose.model<INotificationDoc>(
  'Notification',
  NotificationSchema
);

export default NotificationModel;
