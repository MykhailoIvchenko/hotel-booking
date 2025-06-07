import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { authRouter } from './routes/authRouter.js';
import { BaseRoutes } from './utils/enums.js';
import { userRouter } from './routes/userRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { hotelRouter } from './routes/hotelRouter.js';
import { bookingRouter } from './routes/bookingRouter.js';
import { notificationRouter } from './routes/notificationRouter.js';

dotenv.config();

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    exposedHeaders: ['Authorization'],
  })
);

app.use(express.json());

app.use(BaseRoutes.Auth, authRouter);
app.use(BaseRoutes.Users, userRouter);
app.use(BaseRoutes.Hotels, hotelRouter);
app.use(BaseRoutes.Bookings, bookingRouter);
app.use(BaseRoutes.Notifications, notificationRouter);
app.use(errorMiddleware);

app.listen(PORT);
