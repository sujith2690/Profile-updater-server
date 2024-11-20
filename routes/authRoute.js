import express from 'express';
import { signUser,loginUser } from '../controller/authController.js';

const router = express.Router()

router.post('/signUp', signUser)
router.post('/login', loginUser)

export default router;
