import mongoose from "mongoose";
import dotenv from "dotenv";
import { productsData } from "./ProductsData.js";
import productsModel from "../Models/productModel.js";

dotenv.config();

main()
  .then(() => {
    console.log("connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

const initDB = async function () {
  await productsModel.deleteMany({});
  try {
    await productsModel.insertMany(productsData, { ordered: false });
    console.log("data was added");
  } catch (err) {
    console.error(
      "Some products failed to insert:",
      err.writeErrors?.length || err
    );
    if (err.writeErrors) {
      err.writeErrors.forEach((e, i) => {
        console.error(
          `Error #${i + 1}:`,
          e.errmsg || e.err.message || JSON.stringify(e),
          e.err && e.err.op ? e.err.op : undefined
        );
      });
    }
  }
};
