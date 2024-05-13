import mongoose from "mongoose";

const cetagorySchema = new mongoose.Schema({
    name:{
        type:string,
        required: true
    }
}, {timestamps: true})

export const Cetagory = mongoose.model("Cetagory", cetagorySchema)