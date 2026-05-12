import mongoose from "mongoose";
import dotenv from "dotenv";
import productsData from "./ProductsData.js";
import productsModel from "../Models/productModel.js";

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
  productsData.data = productsData.data.map((obj) => ({
    ...obj,
    // owner: "68cfa8bcd469333d2579154c",
  }));
  await productsModel.insertMany(productsData.data);
  console.log("data was added");
};

initDB();
