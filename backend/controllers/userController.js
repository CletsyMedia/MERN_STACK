import asyncHandler from "express-async-handler";
// @desc authenticate a user setting token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // res.status(401);
  // throw new Error("Not Authorized");

  res.status(200).json({ message: "Authenticated User successful" });
});

// Registering a new user 
// @desc Registering a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Registering a new User successful" });
});


// @desc logging out a user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged out successful" });
});


// @desc get a user profile
// route GET /api/users/profile
// @access Private you must have a token
const userProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile successful" });
});


export { authUser };

