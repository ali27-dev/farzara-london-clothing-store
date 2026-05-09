import asynchandler from "express-async-handler";
import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = asynchandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new orderModel({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @desc    Get all orders (Admin only)
// @route   GET /api/orders
// @access  Private/Admin
export const getAllOrders = asynchandler(async (req, res) => {
  // We use .populate to turn the user ID into a full user object (name and id)
  const orders = await orderModel.find({}).populate("user", "id name");
  res.json(orders);
});
