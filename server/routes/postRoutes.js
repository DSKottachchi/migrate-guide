import express from 'express';
const router = express.Router();
import {
    getPosts,
    createPost
} from '../controllers/postController.js';

router.route('/profile').get(getPosts).post(createPost)

export default router;
