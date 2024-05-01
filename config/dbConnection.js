import mongoose from "mongoose";
const connectDb= async()=>{
    try {
        const connect= await mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log("database connected",connect.connection.host,connect.connection.name);
    } 
    catch (error) {
        console.log(error);
        
    }
}

export {connectDb}