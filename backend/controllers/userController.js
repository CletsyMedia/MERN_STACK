import asyncHandler from "express-async-handler";
import genToken from "../utils/genToken.js";
import User from "../models/userModel.js";
// @desc authenticate a user setting token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Authenticated User successful" });
  // validating credentials
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if (user && (await user.matchPassword(password)) ){
    genToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid emial or password')
  }

});

// Registering a new user
// @desc Registering a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  // console.log(req.body);
  // Destructure the request body to get name, email, and password
  const { name, email, password } = req.body;
  // if a  user exist or not
  const userExists = await User.findOne({email});
  if (userExists){
    res.status(400)
    throw new Error('User already exits')
  }

  const user = await User.create({
    name,
    email,
    password
  })
  if (user){
    genToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid User data')
  }

  // Respond with a JSON object including name and email on separate lines
  // res.status(200).json({
  //   message: "Registering a new User successful",
  //   user: {
  //     name,
  //     email,
  //     password
  //   }
  // });
});


// @desc logging out a user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
// destroy cookie
res.cookie('jwt', 'none', {
  httpOnly: true,
  // expires: new Date(Date.now() + 10 * 1000),
  expires: new Date(0)
});

  res.status(200).json({ message: "User logged out successfully" });
});

// @desc update user profile
// route GET /api/users/profile
// @access Private you must have a token
const getUserProfile = asyncHandler(async (req, res) => {
  // When you don't want to return lots of iser details
  const user ={
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email
  }
  res.status(200).json(user);
  console.log(req.user);
});

// @desc update user profile
// route PUT /api/users/profile
// @access Private you must have a token
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user){
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password){
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    genToken(res, updatedUser._id);
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email
    })
  } else {
    res.status(404);
    throw new Error('User not found')
  }
  // res.status(200).json({ message: "User profile updated successfully" });
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };
