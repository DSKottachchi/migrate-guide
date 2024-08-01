import express from 'express';
import multer from 'multer'

const router = express.Router();
import {
    getPosts,
    createPost
} from '../controllers/postController.js';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.route('/').get(getPosts).post(upload.single('image'), createPost)

export default router;
