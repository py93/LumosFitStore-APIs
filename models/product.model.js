const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required"
  },
  price:
  {
    type: Number,
    required: "Price is required"
  },
  description: {
    type: String,
    required: "Description is required"
  },
  category: {
    type: String,
    required: "Category is required"
  },
  image: {
    type: String,
    required: "Image is required"
  },
  rating: {
    type: Number
  },
  inStock: {
    type: Boolean
  }
}, 
{timestamps: true})

const Product = mongoose.model("Product", ProductSchema)

module.exports = {Product, ProductSchema}