import mongoose from "mongoose";
import dotenv from "dotenv";
import { products } from "./ProductsData.js";
import productsModel from "../Models/productModel.js";

// const MONGO_URL = process.env.MONGO_URI;
dotenv.config();

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

const initDB = async function () {
  await productsModel.deleteMany({});
  // products.productsData = products.productsData.map((obj) => ({
  //   ...obj,
  //   owner: "68cfa8bcd469333d2579154c",
  // }));

  await productsModel.insertMany(products.productsData);
  console.log("data was added");
};

initDB();
