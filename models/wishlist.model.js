const mongoose = require('mongoose')
const {ProductSchema} = require('./product.model.js')
// GIVING PROBLEMS: const WishListSchema = new mongoose.Schema({userId: String, products: [ProductSchema]})

const WishListSchema = new mongoose.Schema({userId: String, products: [{id: String, name: String,description: String, price: Number, category: String, image: String, rating: Number}]})

const Wishlist = mongoose.model("Wishlist", WishListSchema)

module.exports = {Wishlist}