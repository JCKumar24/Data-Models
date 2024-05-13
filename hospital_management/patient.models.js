import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        requiered: true
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum :["MALE", "FEMALE", "OTHER"]
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        red: "Hospital"
    }
}, {timestamps:true})

export const Patient = mongoose.model("Patient", patientSchema)