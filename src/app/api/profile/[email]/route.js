import { connect } from "@/utils/config/dbConfig"
import Buyer from "@/utils/modals/Buyer"
import Seller from "@/utils/modals/Seller"
import { NextResponse } from "next/server"

connect()

export async function GET(request,{params}) {
    try {
        const {email} = params
        let user = await Buyer.findOne({email})
        if (!user) {
            user = await Seller.findOne({email})
        }
        return NextResponse.json({
            user,
            success:true
        })
    } catch (error) {
     console.log("Error:",error) 
     return NextResponse.json({error:error.message},{status:500})  
    }
}