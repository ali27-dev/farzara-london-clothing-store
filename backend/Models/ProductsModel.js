const { model } = require("mongoose");
const mongoose = require("mongoose");
const { productsSchema } = require("../Schemas/ProductsSchema");

const ProductsModel = new mongoose.model("Products", productsSchema);

module.exports = { ProductsModel };
