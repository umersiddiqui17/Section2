"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import  MoonLoader  from "react-spinners/MoonLoader";


export default function Profile() {
   const [userdata,setuserdata] =useState([])
   const [loading,setloading] = useState(true)
    const {data:session} = useSession()
    const email = session && session.user && session.user.email
   //  console.log(email)
   useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/api/profile/${email}`);
          setuserdata(res.data.user);
          setloading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setloading(false);
        }
      };
  
      if (email && !userdata.length) {
        fetchData();
      }
    }, [email, userdata.length]);
  return (
    <div>
       {loading?(
         <div className='flex justify-center items-center mt-40 flex-col'>
            <MoonLoader
  color="#db0d41"
  size={60}
/>
<div className='text-red-600'>Please wait while we set everything up</div>
       </div>
       ): session?(
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                 <h1 className='text-red-600 text-3xl font-semibold'>Profile</h1>
                 <p>{session && session.user.email}</p>
            </div>
            <div className='w-3/4 h-4/5 flex items-start border shadow-2xl '>
               <div className='flex flex-col items-start space-y-3 mt-5 ml-5 mb-5'>
                        <div>
                    <h1 className='text-2xl font-semibold'>{session&&session.user.name}</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className=' text-gray-500 mr-2'>Email:</h1>
                   <h1 className=''>{session&&session.user.email}</h1>
                </div>
                 <div className='flex justify-center items-center'>
                    <h1 className=' text-gray-500 mr-2'>phone number</h1>
                    <h1>{userdata.phonenumber}</h1>
                 </div>
                 <div className='flex justify-center items-center'>
                    <h1 className=' text-gray-500 mr-2'>address</h1>
                    <h1>{userdata.address}</h1>
                 </div>
               </div>
          
            
            </div>
            
         
        </div>
       ):(
        <div>
 you are not signed in
        </div>
       )}
    </div>
  )
}
