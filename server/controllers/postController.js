import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import dotenv from 'dotenv';
import Post from "../models/post.js";

dotenv.config();

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = "us-east-1";
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

// const s3 = new S3Client({
//   credentials: {
//     accessKeyId: accessKey,
//     secretAccessKey: secretAccessKey
//   },
//   region: bucketRegion
// });

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

// @desc    Get user posts
// route    GET /api/posts
// access Public
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});

    for (let post of posts) {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: post.image,
      });

      try {
        const url = await getSignedUrl(s3, command, { expiresIn: 360 });
        post.image = url;
      } catch (err) {
        console.error(err);
      }
    }

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

// @desc    Create user posts
// route    POST /api/posts
// access Public
const createPost = async (req, res, next) => {
  console.log("req.file", req.file);

  // TODO: RESIZE IMAGE
  const imageName = randomImageName();
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  // const { __session	 } = req.cookies;
  const { title, description } = req.body;
  // console.log(__session	);

  try {
    // TODO: Remove post
    const post = await Post.create({
      author: "Author",
      title,
      description,
      image: imageName,
    });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

export { getPosts, createPost };
