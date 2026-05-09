import express from "express";
import {
  getProducts,
  getProductById,
} from "../Controllers/ProductController.js";
import { addOrderItems } from "../Controllers/orderController.js";
import { protect } from "../Middlewares/userMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
// router.route("/:id").get(protect, getOrderById);

export default router;
