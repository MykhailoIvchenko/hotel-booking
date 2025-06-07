import { Types } from 'mongoose';
import NotificationModel from '../models/Notification.js';
import { NotificationTypes } from '../utils/enums.js';

async function getAllForUser(userId: string) {
  if (!Types.ObjectId.isValid(userId)) return [];
  return NotificationModel.find({ userId }).sort({ createdAt: -1 });
}

async function create(
  userId: string,
  type: NotificationTypes,
  title: string,
  message: string
) {
  if (!Types.ObjectId.isValid(userId)) return null;

  const notification = new NotificationModel({
    userId,
    title,
    type,
    message,
  });

  return notification.save();
}

async function makeReadOne(notificationId: string, userId: string) {
  if (!Types.ObjectId.isValid(notificationId)) {
    return null;
  }

  const notification = await NotificationModel.findById(notificationId);

  if (!notification || notification.userId.toString() !== userId) return null;

  if (!notification.isRead) {
    notification.isRead = true;
    await notification.save();
  }

  return notification;
}

async function makeReadAll(userId: string) {
  if (!Types.ObjectId.isValid(userId)) return { modifiedCount: 0 };

  const result = await NotificationModel.updateMany(
    { userId, isRead: false },
    { $set: { isRead: true } }
  );

  return result;
}

export const notificationService = {
  getAllForUser,
  create,
  makeReadOne,
  makeReadAll,
};
