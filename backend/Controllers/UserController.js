import asyncHandler from "express-async-handler";
import UserModel from "../Models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1. We use .select('+password') to override the 'select: false' in the schema
  const user = await UserModel.findOne({ email }).select("+password");

  // 2. Check if user exists AND password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    // 3. If it doesn't match, send a 401, not a 500
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
