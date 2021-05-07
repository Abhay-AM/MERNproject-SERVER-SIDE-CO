import mongoose from 'mongoose';
import saslprep from 'saslprep';
 import dotenv from 'dotenv';
 dotenv.config();
// console.log("dotenv "+dotenv.config());
const DBconnect =async ()=>{
    try {
        
        console.log(process.env.DATA_BASE);
         const database =  await mongoose.connect(process.env.DATA_BASE,{
                                useNewUrlParser: true,
                                useUnifiedTopology: true,
                                // useFindAndModify: false,
                                useCreateIndex: true
                    })
                    // console.log(`from dataBase ${dataBase}`);
                    console.log("Data Base connection successfully");
    } catch (error) {
        console.log(`Error:${error}`);
        process.exit(1);
    }
}

export default DBconnect;