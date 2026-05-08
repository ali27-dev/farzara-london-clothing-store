import asyncHandler from "express-async-handler";
import UserModel from "../Models/UserModel.js";
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
    });
  } else {
    // 3. If it doesn't match, send a 401, not a 500
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
