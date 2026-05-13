import mongoose from "mongoose";

import orderSchema from "../Schemas/orderSchema.js";

const OrderModel = new mongoose.model("Order", orderSchema);

export default OrderModel;
