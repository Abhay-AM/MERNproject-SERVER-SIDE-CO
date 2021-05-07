import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./Data/user.js";
import products from "./Data/products.js";
import userModel from "./models/userModel.js";
import productModel from "./models/productModel.js";
import orderModel from "./models/orderModel.js";
import DBconnect from "./config/db.js";

dotenv.config();
DBconnect();

const importData = async ()=>{
    try {
       await orderModel.deleteMany();
       await productModel.deleteMany();
       await userModel.deleteMany();

       const createUsers = await userModel.insertMany(users);
       const adminUser = createUsers[0]._id

       const sampleProducts = products.map(product =>{
           return {...product,user : adminUser}
       })

       await productModel.insertMany(sampleProducts);
       console.log("Data imported successfully from seeder.js");
       process.exit();
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

const destroyData = async ()=>{
    try {
       await orderModel.deleteMany();
       await productModel.deleteMany();
       await userModel.deleteMany();

      
       console.log("Data Destroyed  from seeder.js");
       process.exit();
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

if(process.argv[2] === "-d"){
    destroyData();
}else{
    importData();
}
