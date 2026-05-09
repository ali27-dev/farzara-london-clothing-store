import asyncHandler from "express-async-handler";
import productModel from "../Models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
