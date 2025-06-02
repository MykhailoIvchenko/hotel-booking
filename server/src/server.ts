import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { authRouter } from './routes/authRoute.js';
import { BaseRoutes } from './utils/enums.js';
import { userRouter } from './routes/userRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { hotelRouter } from './routes/hotelRoute.js';

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use(BaseRoutes.Auth, authRouter);
app.use(BaseRoutes.Users, userRouter);
app.use(BaseRoutes.Hotels, hotelRouter);
app.use(errorMiddleware);

app.listen(PORT);
