const express = require('express')
const productRouter = express.Router();
const {Product} = require('../models/product.model')

productRouter.route('/')
.get(async (req,res) => {
  try{
      const products = await Product.find({});
      res.json({success: true, products})
  }
  catch(err)
  {
    res.status(500).json({success:false, message: "Unable to get products", errorMessage: err.message})
  }
})
.post( async (req,res)=>{
  try{
    const product = req.body;
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    res.json({success: true, product: savedProduct})
  }
  catch(err)
  {
    res.status(500).json({success:false, message: "Unable to add product", errorMessage: err.message})
  }
})


productRouter.route('/:id')
.get(async (req,res) => {
  try
  {
  const {id} = req.params;
  const product = await Product.find({_id : id});
  res.json({success: true, product})
  }
  catch(err)
  {
    res.status(500).json({success:false, message:"Unable to get product", errorMessage: err.message})
  }
})
.post(async (req,res)=>{
  try{
  const {id} = req.params;
  const updatedProduct = req.body;
  const product = await Product.findOneAndUpdate({ _id: id }, updatedProduct,{new:true});
  res.json({success:true,product})
  }
  catch(err)
  {
    res.status(500).json({success:false,message:"Unable to update product", errorMessage: err.message})
  }
})
module.exports = productRouter
