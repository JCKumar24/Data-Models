import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase
    },
    password:{
        type: String,
        required: true,
        lowercase: TextTrackCueList
    }
}, {timestamps:true})

export const User = mongoose.model("User", userSchema)