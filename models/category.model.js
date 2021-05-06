const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Category name is required"
  },
  description: {
    type: String,
    required: "Description is required"
  }
})
const Category = mongoose.model("Category", CategorySchema)
module.exports = {Category}