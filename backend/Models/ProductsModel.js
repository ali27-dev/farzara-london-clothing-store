import mongoose from "mongoose";
import ProductsSchema from "../Schemas/ProductsSchema.js";

const ProductsModel = new mongoose.model("Products", ProductsSchema);

export default ProductsModel;
