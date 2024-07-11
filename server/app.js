import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDb from './config/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDb()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5000',
}));

app.use('api/users', userRoutes);
app.use('api/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
