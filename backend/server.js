import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import ProductsModel from "./Models/ProductsModel.js";

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new ProductsModel();
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 5001}`);
});
