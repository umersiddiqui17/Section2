"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Rgister() {
 const [seller,setseller] = useState({name:"",email:"",password:"",phonenumber:0,shopname:"",address:"",shopDescriptions:"",city:"",role:"seller"})
 const router = useRouter()
 const handleSubmit =async(e)=>{
  e.preventDefault()
  try {
    if (!seller.email || !seller.password) {
      toast.error('Login unsuccessfull!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      return null
  }
    const res = await axios.post("/api/register",seller)
    console.log(res.data)
    if(res.status ===200 || res.status === 201){
      console.log("user added succesfully")
    }
    router.push("/login")

  } catch (error) {
    console.log("Error: ",error)
  }
 } 
 return (
    <>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  
    <form onSubmit={handleSubmit} className='bg-indigo-300 ' >

    <div className='flex flex-col justify-center items-center bg-indigo-300 '>
        {/* Pc view */}
    <div className='flex  justify-center items-center w-4/5 h-screen '>

        {/* First Half */}
        <div className='flex flex-col justify-center items-center space-y-3 w-1/2 h-full bg-white'>
               <div className='flex items-start w-4/5 mb-8'>
                <h1 className='text-blue-500 text-2xl md:text-4xl font-sans font-semibold  ml-2'>General Information</h1>
               </div>
             
             <input type="emaiL" value={seller.email} onChange={(e)=>setseller({...seller,email:e.target.value})} placeholder='Email' className='w-4/5 px-2 py-2 outline-none border-b border-gray-400  text-blue-500' /> 
             <input type="text" value={seller.name} onChange={(e)=>setseller({...seller,name:e.target.value})} placeholder='Name' className=' w-4/5 px-2 py-2 outline-none border-b border-gray-400 text-blue-500'/>
             <input type="password" value={seller.password} onChange={(e)=>setseller({...seller,password:e.target.value})} placeholder='Password' className='w-4/5 px-2 py-2 outline-none border-b border-gray-400 text-blue-500' />
             <input type="number" value={seller.phonenumber} onChange={(e)=>setseller({...seller,phonenumber:e.target.value})} placeholder='Phone Number' className='w-4/5 px-2 py-2 outline-none border-b border-gray-400 text-blue-500' />

        </div>
        {/* Second Half */}
        <div className='flex flex-col justify-center items-center space-y-3 w-1/2 h-full bg-blue-500'>
              <div className='flex items-start w-4/5 mb-8'>
                <h1 className='text-white text-2xl md:text-4xl font-sans font-semibold  ml-2'>Contact Details</h1>
               </div>
             <input type="text" value={seller.shopname} onChange={(e)=>setseller({...seller,shopname:e.target.value})} placeholder='Shop Name' className=' w-4/5 px-2 py-2 outline-none border-b border-gray-100 bg-blue-500  placeholder:text-gray-100 text-white'/>
             <input type="text" value={seller.shopaddress} onChange={(e)=>setseller({...seller,address:e.target.value})} placeholder='Shop Address' className=' w-4/5 px-2 py-2 outline-none border-b border-gray-100 bg-blue-500  placeholder:text-gray-100 text-white'/>
             <input type="text" value={seller.shopdescription} onChange={(e)=>setseller({...seller,shopDescriptions:e.target.value})} placeholder='Shop Description' className='w-4/5 px-2 py-2 outline-none border-b border-gray-100 bg-blue-500  placeholder:text-gray-100 text-white' />
             <input type="text" value={seller.city} onChange={(e)=>setseller({...seller,city:e.target.value})} placeholder='City' className='w-4/5 px-2 py-2 outline-none border-b border-gray-100 bg-blue-500  placeholder:text-gray-100 text-white' />

        </div>   
    </div>

    {/* Mobile view */}
    <button className='mt-14 mb-10 px-3 py-2 text-white bg-gradient-to-b from-indigo-400 to-blue-500 rounded-md'>Register</button>
    <p className='mb-8 text-white'>already have an account <Link href={"/login"}><span className='text-blue-500'>Login</span></Link> </p>
    </div>
    </form>
    
    
    
    </>
  )
}
