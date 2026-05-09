import express from "express";
import { addOrderItems, getAllOrders } from "../Controllers/orderController.js";
import { protect, admin } from "../Middlewares/userMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, addOrderItems) // Any logged-in user can buy
  .get(protect, admin, getAllOrders); // ONLY an Admin can see the list

export default router;
