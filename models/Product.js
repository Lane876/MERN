import mongoose from "mongoose";
import shortid from "shortid";

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate(),
  },
  description: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

// if (!modelAlreadyDeclared()) {
//   const Product = mongoose.model("Product", ProductSchema);
// }

// function modelAlreadyDeclared() {
//   try {
//     mongoose.model("Product"); // it throws an error if the model is still not defined
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
