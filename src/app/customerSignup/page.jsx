"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function customerSignup() {
    const [customer,setcustomer] = useState({name:"",email:"",password:"",phonenumber:"",address:"",role:"Buyer"})
    const router = useRouter()
    const handleSubmit =async(e) =>{
        e.preventDefault()
        if (!customer.name || !customer.email || !customer.password || !customer.phonenumber || !customer.address) {
            toast.error('Please fill all fields!', {
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
        try {
            const res = await axios.post("/api/customerregister",customer)
            if(res.status ===200 || res.status === 201){
                console.log("user added succesfully")
              }
            router.push("/login")  
        } catch (error) {
            console.log("Error:",error)
        }
    }
  return (
    <div>
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
  
        <div className='flex justify-center items-center font-serif mt-6'>
               <h1 className='text-red-600 text-3xl font-semibold'>Customer Signup</h1>

        </div>
        <form onSubmit={handleSubmit} className='flex justify-center items-center mt-14'>
            {/* Pc view */}
            <div className='flex flex-col items-start w-3/4 space-y-3'>
                <div className='flex flex-col w-5/6  ml-5 mr-5'>
                <h1 className=''>Name:</h1>
                <input type="text" value={customer.name} placeholder='Name' onChange={(e)=>setcustomer({...customer,name:e.target.value})} className='w-full px-2 py-2 rounded-md outline-none border-b-2 border-black ' />
            </div>
            <div className='flex flex-col w-5/6  ml-5 mr-5'>
                <h1 className=''>Email:</h1>
                <input type="email" value={customer.email} placeholder='Email' onChange={(e)=>setcustomer({...customer,email:e.target.value})} className='w-full px-2 py-2 rounded-md outline-none border-b-2 border-black ' />
            </div>
            <div className='flex flex-col w-5/6  ml-5 mr-5'>
                <h1 className=''>Password:</h1>
                <input type="password" value={customer.password} placeholder='Password' onChange={(e)=>setcustomer({...customer,password:e.target.value})} className='w-full px-2 py-2 rounded-md outline-none border-b-2 border-black' />
            </div>
            <div className='flex flex-col w-5/6  ml-5 mr-5'>
                <h1 className=''>Phonenumber:</h1>
                <input type="number" value={customer.phonenumber} placeholder='Phonenumber' onChange={(e)=>setcustomer({...customer,phonenumber:e.target.value})} className='w-full px-2 py-2 rounded-md outline-none border-b-2 border-black ' />
            </div>
            <div className='flex flex-col w-5/6  ml-5 mr-5'>
                <h1 className=''>Address:</h1>
                <input type="text" value={customer.address} placeholder='Address' onChange={(e)=>setcustomer({...customer,address:e.target.value})} className='w-full px-2 py-2 rounded-md outline-none border-b-2 border-black ' />
            </div>
            <div className='flex flex-col w-5/6  ml-5 mr-5'> 
                <button type='submit' className=' mt-7 bg-gradient-to-r from-red-800 to-red-600 w-full'>
                Submit
            </button>
            </div>
           
            </div>
            
            
        </form>
    </div>
  )
}
