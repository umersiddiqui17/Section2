import { connect } from "@/utils/config/dbConfig";
import Seller from "@/utils/modals/Seller";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

// connect()

export async function POST(req){
    try {
        await connect()
        const {name,email,password,phonenumber,address,role} = await req.json()
        
        const ifuserExist = await Seller.findOne({email})

        if(ifuserExist){
            return NextResponse.json({error:"user already exist"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10)

        const hashedpassword = await bcryptjs.hash(password,salt)

        const newSeller = new Seller({
            name,email,password:hashedpassword,phonenumber,role,address
        })
        const SavedSeller = await newSeller.save()
        console.log(SavedSeller);

        return NextResponse.json({
            message:"Seller created successfully",
            success:true,
            SavedSeller
        })

        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}