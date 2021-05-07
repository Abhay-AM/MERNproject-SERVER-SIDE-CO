
// For nunnig the server the command is (npm run server)

// this is using for version controlling ("type":"module")
import express, { json } from 'express';
import dotenv from 'dotenv';
// import products from './Data/products.js';
import {noFound , errorHandler} from './middleware/errorMiddleware.js'
import DBconnect from './config/db.js';
DBconnect();
import productRoutes from './routes/productRoutes.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;
// console.log("path : "+products);
app.get("/",(req, res) => {
    res.send("this is my home page")
})

app.use("/api/products",productRoutes);

app.use(noFound)

app.use(errorHandler)

app.listen(port, (req,res)=>{
    console.log("server is running on at the port of "+port);
})






// const products = require('./Data/products');
// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');

//  app.get("/api/products",(req, res) => {
//      res.json(products);
//  })
//  app.get("/api/products/:id",(req, res) => {
//      const product = products.find((p)=> p._id === req.params.id);
//      res.json(products);
//  })