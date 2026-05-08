import asyncHandler from "express-async-handler";
import ProductsModel from "../Models/ProductsModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductsModel.find({});
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
