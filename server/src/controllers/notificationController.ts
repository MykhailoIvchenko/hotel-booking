import { notificationService } from '../services/notificationService.js';
import { Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';

export const notificationController = {
  async getAllForUser(req: Request, res: Response): Promise<void> {
    const userId = req.user?.id;

    if (!userId) {
      throw ApiError.Unauthorized();
    }
    const notifications = await notificationService.getAllForUser(userId);
    res.send(notifications);
  },

  async makeReadOne(req: Request, res: Response): Promise<void> {
    const userId = req.user?.id;
    const notificationId = req.params.id;

    if (!userId || !notificationId) {
      throw ApiError.BadRequest('Notification id is required');
    }

    const updatedNotification = await notificationService.makeReadOne(
      notificationId,
      userId
    );

    if (!updatedNotification) {
      throw ApiError.NotFound();
    }

    res.send(updatedNotification);
  },

  async makeReadAll(req: Request, res: Response): Promise<void> {
    const userId = req.user?.id;

    if (!userId) {
      throw ApiError.Unauthorized();
    }

    const updatedCount = await notificationService.makeReadAll(userId);
    res.send({ updatedCount });
  },
};
