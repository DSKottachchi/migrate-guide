import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import Post from './models/post.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5000',
}));

const uri = "";

app.use('api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async(req, res) => {
  try {
    const post = await Post.find({});

    res.status(200).json(post);
  } catch (error) {
    console.log("Error connecting")
  }
});

app.post("/posts", async (req, res) => {
  console.log(req.body)
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    console.log("Error POSTING")
  }
});


mongoose.connect(uri).then(() => {
  console.log("Connected to database!");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
