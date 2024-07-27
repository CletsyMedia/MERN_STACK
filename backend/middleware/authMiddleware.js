import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// Verify and decode token from cookies
const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt; // Initialize token from cookies
  
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      
      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      // Token verification failed
      res.status(401).json({ message: 'Not authorized, token invalid' });
    }
  } else {
    // Token not provided
    res.status(401).json({ message: 'Not authorized, no token' });
  }
});

export { protect };
