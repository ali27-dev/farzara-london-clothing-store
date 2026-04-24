import { Schema } from "mongoose";

const ProductsSchema = new Schema({
  id: String,
  name: String,
  category: String,
  season: String,
  price: Number,
  discount: Number,
  isSale: Boolean,
  images: String,
  description: String,
});

module.exports = { ProductsSchema };
