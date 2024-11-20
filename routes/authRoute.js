import express from 'express';
import { signUser } from '../controller/authController.js';

const router = express.Router()

router.post('/signUp', signUser)

export default router;
