import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { authRouter } from './routes/authRoute.js';
import { BaseRoutes } from './utils/enums.js';
import { userRouter } from './routes/userRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { hotelRouter } from './routes/hotelRoute.js';
import verificationRouter from './routes/verificationRoute.js';
import referralRouter from './routes/referralRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

//TODO: Add more strict cors for prod
app.use(cors());
app.use(express.json());

app.use(verificationRouter);
app.use(referralRouter);
app.use(BaseRoutes.Auth, authRouter);
app.use(BaseRoutes.Users, userRouter);
app.use(BaseRoutes.Hotels, hotelRouter);
app.use(errorMiddleware);

app.listen(PORT);
