"use client"
import axios from 'axios'
import React,{useState} from 'react'

export default function Test() {
    const [data,setdata] =useState({name:"",description:""})
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post("/api/test",data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className=' flex justify-center items-center mt-20'>
        <input type="text"placeholder='name ' onChange={(e)=>setdata({...data,name:e.target.value})} className='w-full bg-red-200' />
        <input type="text"placeholder='description ' onChange={(e)=>setdata({...data,description:e.target.value})} className='w-full bg-red-200' />
    <button type='submit'>Submit</button>
    </div>
    </form>
    
  )
}
