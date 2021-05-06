const express = require('express')
const categoriesRouter = express.Router();
const {Category} = require('../models/category.model')

categoriesRouter.route('/')
.get( async (req,res) => {
  try {
    const categories = await Category.find({});
    res.json({success:true,categories})
  }
  catch(err) {
    res.status(500).json({success:false,message:"Unable to get categories",errorMessage: err.message})
  }
})

module.exports = categoriesRouter