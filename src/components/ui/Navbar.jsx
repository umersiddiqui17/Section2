"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


export default function 
() {
  return (
    <>
     {/* Pc view */}
     <header className='h-20 bg-red-600'>
        <div className=' flex h-full justify-between items-center'>
            <div className='flex justify-center items-center h-full'>
            <h1 className='text-xl font-sans'>AlfaMall</h1>
            </div>
            <nav className='flex justify-center items-center'>
                <input type="text" className='w-96 outline-none text-xs rounded-l-2xl px-3 py-3' />
                <button className='px-3 py-3 rounded-r-2xl bg-white'><CiSearch/></button>
            </nav>
            <div className='mr-3'>
                <IoCartOutline className='w-8 h-8'/>
            </div>
        </div>
        
     </header>
    </>
  )
}
