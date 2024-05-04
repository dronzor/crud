import mongoose from "mongoose";
import { User } from "./userModels.js";
const contactSchema= mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
})

export const Contact=mongoose.model("Contact",contactSchema)