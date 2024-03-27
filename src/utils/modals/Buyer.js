import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]

    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter your Password"]
    },
    phonenumber:{
        type:Number,
        required:[true,"please enter your number"]
    },
    address:{
        type:String,
        required:[true,"please enter your address"]
    },
    role:{
        type:String,
        required:[true,"please enter your role"]
    },
});

const Buyer = mongoose.models.buyer || mongoose.model("buyer", buyerSchema);

export default Buyer;