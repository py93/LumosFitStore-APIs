const express = require('express')
const cartRouter = express.Router();
const {Cart} = require('../models/cart.model')

cartRouter.route('/:currentUserId')
.get( async (req,res) => {
   try
   {
     //TODO: Design and code for backend authInterceptor for all auth apis / authToken in header
     const {currentUserId} = req.params;
     const userCart = await Cart.find({userId:currentUserId})
     res.json({success:true, userCart})
   }
   catch(err)
   {
     res.status(500).json({success:false,message:"Could not get cart",errorMessage: err.message})
   }
   
})
cartRouter.route('/:currentUserId/:productId')
.post(async (req,res) => {
    try{
    const {currentUserId, productId} = req.params;
    const cart = req.body;
    const doesCartExist = await Cart.exists({userId: currentUserId})
    if(!doesCartExist){
    const newCart = new Cart(cart);
    const savedCart = await newCart.save();
    res.json({success: true, cart: savedCart})
    }
    else {
    const updatedCart = await Cart.findOneAndUpdate({ userId: currentUserId, products: {id:productId} }, cart,{new:true});
    res.json({success:true,updatedCart})
  }
    }
  catch(err)
  {
    res.status(500).json({success:false, message: "Unable to update cart", errorMessage: err.message})
  }
})


module.exports = cartRouter
