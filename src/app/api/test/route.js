import {createClient} from '@sanity/client'
import { NextResponse } from 'next/server'
const client = createClient({
    projectId: 'py3oxwy9',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn:true,
    token:process.env.SANITY_API_TOKEN
  
})
export async function POST(req){
    try {
        const {name,description} = await req.json()
        await client.create({
           _type:'product',
           name:name,
           description:description,
        })
        return  NextResponse.json({
            status: 200,
            body: "Comment submitted successfully",
        })
    } catch (error) {
        console.log(error)
        return  NextResponse.json({
            status: 500,
            body: "Internal Server Error",
        })
    }
}