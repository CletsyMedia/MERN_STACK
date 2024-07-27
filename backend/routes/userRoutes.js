// Using express router
import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
// Post req to auth
router.post('/auth', authUser,)
// Post req to register
router.post('/', registerUser)
// Post req to logout
router.post('/logout', logoutUser)
// Get req to get user profile
router.get('/profile', protect, getUserProfile)
// Put req to update user profile
router.put('/updateprofile', protect, updateUserProfile)
// Exploring router alternative for profile
// router.route('/profile').get(getUserProfile).put(updateUserProfile)
export default router