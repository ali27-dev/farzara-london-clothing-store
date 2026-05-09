import mongoose from "mongoose";

import OrderSchema from "../Schemas/orderSchema.js";

const OrderModel = new mongoose.model("Order", OrderSchema);

export default OrderModel;
