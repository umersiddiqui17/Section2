"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function TrendingCategories() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center '>
        <div className='w-4/5 '>
        <div className="lg:h-[600px]  bg-red-500  xl:h-[] lg:mt-4 md:h-[375px] h-[250px]  ">
       <Carousel showThumbs={false} showArrows={ true} showStatus={false}>
        
         
           
            <div className=" " >
           <img src="/ac.jpg" className="md:h-[375px] xl:h-[]  lg:h-[500px] w-full object-fill object-center" />
           
          </div>
           
            
      
    

</Carousel>
    </div>
           {/* Categories  */}
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
              <div className='w-full h-40 bg-red-300'>
                 hello
              </div>
              <div className='w-full h-40 bg-cyan-300'>
               hello
              </div>
              <div className='w-full h-40 bg-slate-300 '>
                hello
              </div>
              <div className='w-full h-40 bg-teal-300'>
                hello
              </div>
              <div className='w-full h-40 bg-yellow-200'>
                hello
              </div>
              <div className='w-full h-40 bg-gray-400'>
                hello
              </div>
              <div className='w-full h-40 bg-blue-300'>
                hello
              </div>
              <div className='w-full h-40 bg-red-400'>
                hello
              </div>
              <div className='w-full h-40 bg-violet-400'>
                hello
              </div>
              <div className='h-40 w-full bg-slate-400'>
                hello
              </div>
           </div>
          
        </div>
       
    </div>
  )
}
