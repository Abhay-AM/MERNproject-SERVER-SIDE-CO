import express from 'express';
const router = express.Router();
// import products from '../Data/products.js';
import asyncHandler from 'express-async-handler';
import productModel from '../models/productModel.js';

//@desc  Fetch all products
//@route  GET/api/products
//@access  Fetch all products (public)
router.get("/",asyncHandler(async (req, res) => {
    const product =await productModel.find({});
    res.json(product);
}))

//@desc  Fetch single product
//route  GET/api/products/:id
//@access  Fetch all products (public)
router.get("/:id",asyncHandler(async(req, res) => {
    const product = await productModel.findById(req.params.id)
    if(product){
        res.json(product);
    }else{
        res.status(404) //.json({message: "Product not found"});
        throw new Error("Product not found");
    }
    
}))

export default router;