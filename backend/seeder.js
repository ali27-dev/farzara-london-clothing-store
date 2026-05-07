import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import User from "./Models/UserModel.js";
import ProductsModel from "./Models/ProductsModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // 1. Clear existing data to start fresh
    await User.deleteMany();
    await ProductsModel.deleteMany();

    // 2. Create a Test User
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@farzara.com",
      password: "password123", // Bcrypt will hash this automatically!
      role: "admin",
    });

    // 3. Create a Test ProductsModel
    await ProductsModel.create({
      name: "Classic Navy Suit",
      price: 450,
      category: "Suits",
      season: "Winter",
      images: ["https://example.com/suit.jpg"],
      description: "A premium wool suit for formal occasions.",
      countInStock: 10,
    });

    console.log("✅ Data Imported Successfully!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await ProductsModel.deleteMany();
    console.log("🗑️ Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

// Check command line arguments: "node seeder -d" to delete, "node seeder" to import
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
