import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "../config/db.js";
import { products } from "./ProductsData.js";

dotenv.config();
const app = express();
const PORT = 3000;
connectDB();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  const testData = products.map((product) => ({
    _id: product._id,
    name: product.name,
    price: product.price,
    category: product.category,
    season: product.season,
    images: product.images,
    description: product.description,
    countInStock: product.countInStock,
  }));
  res.json(testData);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from the test backend!" });
});

app.listen(PORT, () => {
  console.log(`Test backend server is running on port ${PORT}`);
});
