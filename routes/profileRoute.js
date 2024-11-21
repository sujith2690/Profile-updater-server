import express from 'express';
import { profileUpdate } from '../controller/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/update',authMiddleware, profileUpdate)

export default router;