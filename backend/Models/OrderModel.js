import mongoose from "mongoose";

import OrderSchema from "../Schemas/OrderSchema.js";

const OrderModel = new mongoose.model("Order", OrderSchema);

export default OrderModel;
