import { NextResponse} from "next/server"
import {getToken} from "next-auth/jwt"

export default async function middleware(req) {
 const path = req.nextUrl.pathname
 const token = await getToken({
    req:req,
    secret:process.env.NEXTAUTH_SECRET
 })
    const publicPath = path === "/login" || path === "/register"

    if(publicPath && token){
        return NextResponse.redirect(new URL("/",req.nextUrl))
    }

    if(!publicPath && !token){
        return NextResponse.redirect(new URL("/login",req.nextUrl))
    }
}   
  
export const config = {
    matcher:["/register","/login","/dashboard/:path*"]
}
