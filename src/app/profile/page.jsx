"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function Profile() {
   const [userdata,setuserdata] =useState([])
    const {data:session} = useSession()
    const email = session && session.user && session.user.email
   //  console.log(email)
   useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/api/profile/${email}`);
          setuserdata(res.data.user);
          console.log(res.data.user)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (email && !userdata.length) {
        fetchData();
      }
    }, [email, userdata.length]);
  return (
    <div>
       {session?(
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                 <h1 className='text-red-600 text-3xl font-semibold'>Profile</h1>
                 <p>{session && session.user.email}</p>
            </div>
            <div className='w-4/5 h-4/5 flex flex-col items-start '>
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
                 <div>
                    <h1 className=' text-gray-500 mr-2'>address</h1>
                    <h1>{userdata.address}</h1>
                 </div>
                 <div>
                    <h1 className=' text-gray-500 mr-2'>Shop Name</h1>
                 </div>
                 <div>
                    <h1 className=' text-gray-500 mr-2'>Shop Description</h1>
                 </div>
                 <div>
                    <h1 className=' text-gray-500 mr-2'>City</h1>
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
