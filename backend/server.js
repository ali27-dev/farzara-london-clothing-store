import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
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

// ROUTES //
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 5001}`);
});
