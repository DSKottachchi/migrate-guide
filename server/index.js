import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import connectDb from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 9090;

connectDb()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}));

// TODO: DECODE JWT TOKEN

app.use('/api/users', userRoutes);

// Add middleware
app.use('/api/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
