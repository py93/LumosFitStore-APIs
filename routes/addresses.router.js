const express = require('express')
const addressRouter = express.Router();
const {Address} = require('../models/address.model')
const {addresses} = require('../db/data.js');

addressRouter.route('/')
.get(async (req,res) => {
  try{
    res.json({success:true, addresses})
  }
  catch(err){
    res.status(500).json({success:false, message: "Unable to get addresses", errorMessage: err.message})
  }
})
.post( async (req,res)=>{
  try{
    const address = req.body;
    const newAddress = new Address(product);
    const savedAddress = await newAddress.save();
    res.json({success: true, address: savedAddress})
  }
  catch(err)
  {
    res.status(500).json({success:false, message: "Unable to add product", errorMessage: err.message})
  }
}) 
module.exports = addressRouter