import { model } from "mongoose";
import { productsSchema } from "../Schemas/ProductsSchema";

const ProductsModel = new model("product", productsSchema);

module.exports = { ProductsModel };
