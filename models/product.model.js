const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({name: String, price: Number, description: String, category: String, image: String, rating: Number, inStock: Boolean});

const Product = mongoose.model("Product", ProductSchema)

module.exports = {Product, ProductSchema}