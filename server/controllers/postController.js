import Post from "../models/post.js";

// @desc    Get user posts
// route    GET /api/posts
// access Public
const getPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

// @desc    Create user posts
// route    POST /api/posts
// access Public
const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

export {
  getPosts,
  createPost
};
