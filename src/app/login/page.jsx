"use client"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Login() {
    const [seller ,setseller] = useState({email:"", password:""})
    const router =useRouter()
    const handlesubmit =async(e)=>{
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
            const res = await signIn("credentials",{email:seller.email, password:seller.password,redirect:false})
            router.push("/")
            if (res?.error) {
                console.log("error occyred in response")
            }
        } catch (error) {
            console.log("Error",error)
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
    <div className='flex justify-center items-center h-screen bg-indigo-300'>
    {/* Pc view */}
    <div className='w-4/5 h-4/5 flex justify-center items-center'>
        <div className='w-1/2 h-full bg-white rounded-l-xl flex flex-col justify-center items-center'>
            <div className='flex flex-col items-start'>
            <h1 className='text-2xl'>Start Your <span className='font-serif font-semibold text-blue-500'>Seller</span> Jorney</h1>
            <h1 className='text-xl'>By <span className='font-serif font-semibold text-blue-500'>Loging In</span></h1> 
            <p className='mt-12 text-black'>Dont have an account <Link href={"/register"}><span className='text-blue-500'>register</span></Link></p>

            </div>
           
        </div>
        <form onSubmit={handlesubmit} className='w-1/2 h-full flex flex-col justify-center items-center bg-blue-500 rounded-r-xl'>
            <h1 className='text-2xl font-serif text-white'>Login</h1>
          <input type="email" value={seller.email} onChange={(e)=>setseller({...seller, email:e.target.value})}  placeholder='Email' className='w-4/5 px-2 py-2 placeholder:text-white text-white outline-none border-b border-gray-100  bg-blue-500' /> 
             <input type="password"  value={seller.password} onChange={(e)=>setseller({...seller, password:e.target.value})}  placeholder='Password' className='w-4/5 px-2 py-2 text-white outline-none border-b border-gray-100 placeholder:text-white bg-blue-500' />
             <button type='submit' className='mt-14 mb-10 px-3 py-2 text-white bg-gradient-to-b from-indigo-400 to-blue-500 rounded-md'>Login</button>

        </form>
    </div>
    
    {/* Mobile view */} 
    </div>
   
    </>
  )
}
