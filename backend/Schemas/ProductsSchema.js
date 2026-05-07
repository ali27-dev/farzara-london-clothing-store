import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please add a product name"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
      enum: {
        values: [
          "Suits",
          "Pants",
          "T-Shirts",
          "Unstitched",
          "Pret",
          "Accessories",
        ],
        message: "{VALUE} is not a valid category",
      },
      season: {
        type: String,
        required: [true, "Please specify the season"],
        enum: ["Summer", "Winter", "All Season"],
      },
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
      min: [0, "Price must be a positive number"],
      default: 0,
    },
    discount: {
      type: Number,
      required: [true, "Please add a product discount"],
    },
    isSale: {
      type: Boolean,
      required: true,
    },
    images: {
      type: [String], // Array of strings (URLs)
      required: [true, "Please add at least one image"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, "Discount cannot be less than 0%"],
      max: [100, "Discount cannot exceed 100%"],
    },
    countInStock: {
      type: Number,
      required: [true, "Please add stock quantity"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default { ProductsSchema };
