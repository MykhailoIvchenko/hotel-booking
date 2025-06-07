import { userService } from '../services/userService.js';
import { Request, Response } from 'express';

export const userController = {
  async getAll(_: Request, res: Response): Promise<void> {
    const users = await userService.getAll();

    res.send(users.map(userService.normalize));
  },

  async updateName(req: Request, res: Response) {
    try {
      const { phone, fullName } = req.body;

      await userService.updateName(phone, fullName);

      res.status(200).send({ message: 'OK' });
    } catch (error) {
      res.status(500).send({ message: 'FAILED' });
    }
  },

  async updateEmail(req: Request, res: Response) {
    try {
      const { oldEmail, newEmail } = req.body;

      const updatedUser = await userService.updateEmail(oldEmail, newEmail);

      if (updatedUser) {
        res.status(200).send({
          user: updatedUser,
          message: 'OK',
        });
      } else {
        res.status(404).send({ message: 'FAILED' });
      }
    } catch (error) {
      res.status(500).send({ message: 'FAILED' });
    }
  },
};
