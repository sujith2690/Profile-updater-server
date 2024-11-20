import express from 'express';
import { signUser,loginUser, loginAdmin, signAdmin } from '../controller/authController.js';

const router = express.Router()

router.post('/signUp', signUser)
router.post('/login', loginUser)

router.post('/adminLogin', loginAdmin)
router.post('/adminSignUp', signAdmin)

export default router;
