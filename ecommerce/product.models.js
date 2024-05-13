import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productImage: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    stock:{
        type: number,
        default: 0
    },
    cetagory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cetagory",
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)