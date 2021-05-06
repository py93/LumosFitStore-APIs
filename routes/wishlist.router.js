const express = require('express')
const wishlistRouter = express.Router();
const {Wishlist} = require('../models/wishlist.model')

wishlistRouter.route('/:currentUserId')
.get( async (req,res) => {
   try
   {
     //TODO: Design and code for backend authInterceptor for all auth apis / authToken in header
     const {currentUserId} = req.params;
     const userWishlist = await Wishlist.find({userId:currentUserId})
     res.json({success:true, userWishlist})
   }
   catch(err)
   {
     res.status(500).json({success:false,message:"Could not get wishlist",errorMessage: err.message})
   }
   
})

wishlistRouter.route('/:currentUserId/:productId')
.post(async (req,res) => {
    try{
    const {currentUserId, productId} = req.params;
    const wishlist = req.body;
    const doesWishlistExist = await Wishlist.exists({userId: currentUserId})
    if(!doesWishlistExist){
    const newWishlist = new Wishlist(wishlist);
    const savedWishlist = await newWishlist.save();
    res.json({success: true, wishlist: savedWishlist})
    }
    else {
    const updatedWishlist = await Wishlist.findOneAndUpdate({ userId: currentUserId, products: {id:productId} }, wishlist,{new:true});
    res.json({success:true,updatedWishlist})
  }
    }
  catch(err)
  {
    res.status(500).json({success:false, message: "Unable to update wishlist", errorMessage: err.message})
  }
})


module.exports = wishlistRouter
