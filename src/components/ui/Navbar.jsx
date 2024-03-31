"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CgProfile } from "react-icons/cg";


export default function 
() {
  return (
    <>
     {/* Pc view */}
     <header className='  '>
        <div className='md:flex hidden h-20 bg-red-600 justify-between items-center'>
            <div className='flex justify-center items-center h-full'>
            <h1 className='text-xl text-white font-sans ml-3'>AlfaMall</h1>
            </div>
            <nav className='flex justify-center items-center'>
                <input type="text" className='w-96 outline-none text-xs rounded-l-2xl px-3 py-3' />
                <button className='px-3 py-3 rounded-r-2xl bg-white'><CiSearch/></button>
            </nav>
            <div className='space-x-3 mr-3 flex justify-center items-center'>
                <CgProfile className='w-8 h-8 text-white' />
                <IoCartOutline className='w-8 h-8 text-white'/>
            </div>
        </div>
        
     </header>
     {/* Mobile view */}
     <header className=''>
      <div className='flex md:hidden h-20  bg-red-600  justify-between items-center'>
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-xl text-white font-sans'>AlfaMall</h1>
        </div>
       <div className='mr-3 flex justify-center items-center'>
       <Sheet>
  <SheetTrigger><GiHamburgerMenu className='w-5 h-5 text-white' /></SheetTrigger>
  <SheetContent className="bg-red-600 text-white  ">
    <SheetHeader className="">
      <SheetTitle className="text-white">Navbar</SheetTitle>
    </SheetHeader>
    <nav className='flex justify-center items-center'>
                <input type="text" className='w-96 text-black outline-none text-xs rounded-l-2xl px-3 py-3'/>
                <button className='px-3 py-3 rounded-r-2xl text-black bg-white'><CiSearch/></button>
            </nav>
            <div className=' mt-6 flex items-start'>
                <CgProfile  className='w-8 h-8 text-white'/>
                <h1 className='mt-1'>Customer Account</h1>
            </div>
            <div className=' mt-3 flex items-start'>
                <IoCartOutline className='w-8 h-8 text-white'/>
                <h1 className='mt-1'>Shopping Cart</h1>
            </div>
  </SheetContent>
</Sheet>

       </div>
      </div>
     </header>
    </>
  )
}
