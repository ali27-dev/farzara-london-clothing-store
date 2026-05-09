import mongoose from "mongoose";
import productsSchema from "../Schemas/productsSchema.js";

const productsModel = new mongoose.model("Products", productsSchema);

export default productsModel;
