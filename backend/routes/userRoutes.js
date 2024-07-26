// Using express router
import express from 'express';
import { authUser } from '../controllers/userController.js';

const router = express.Router();
// Post req to auth
router.post('/auth', authUser)
export default router