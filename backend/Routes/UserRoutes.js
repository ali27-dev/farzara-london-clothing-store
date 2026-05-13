import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../Controllers/userController.js";
import { protect } from "../Middlewares/userMiddleware.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
export default router;
