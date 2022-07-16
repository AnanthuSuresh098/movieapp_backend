const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    by: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Products = mongoose.model("Product", productSchema);

module.exports = Products;
