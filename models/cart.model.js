const mongoose = require('mongoose')

//TODO: Add auth and change schema
const CartSchema = new mongoose.Schema({userId: String, products: [{id: String, name: String,description: String, price: Number, category: String, image: String, rating: Number, qty:Number}]})

const Cart = mongoose.model("Cart", CartSchema)

module.exports = {Cart}