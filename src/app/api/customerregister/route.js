import { connect } from "@/utils/config/dbConfig";
import Buyer from "@/utils/modals/Buyer";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

connect()

export async function POST(req){
    try {
        const {name,email,password,phonenumber,address,role} = await req.json()
        
        const ifuserExist = await Buyer.findOne({email})

        if(ifuserExist){
            return NextResponse.json({error:"user already exist"},{status:409})
        }

        const salt = await bcryptjs.genSalt(10)

        const hashedpassword = await bcryptjs.hash(password,salt)

        const newBuyer = new Buyer({
            name,email,password:hashedpassword,phonenumber,role,address
        })
        const SavedBuyer = await newBuyer.save()
        console.log(SavedBuyer);

        return NextResponse.json({
            message:"Seller created successfully",
            success:true,
            SavedBuyer
        })

        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}