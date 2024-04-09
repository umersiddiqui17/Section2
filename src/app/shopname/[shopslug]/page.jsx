import { client } from '@/app/libs/sanity'
import { IoMdAddCircle } from "react-icons/io";

import React from 'react'
async function getData(shopslug) {
    const query =`*[_type == "product" && shopslug.current == "${shopslug}"  ]{
        _id,
        name,
        "slug":slug.current,
        "imageUrl":image[0].asset->url,
        "categoryName":category -> name,
        price,
    }`
    const data = await client.fetch(query)
    return data
}

export default async function ShopSlug({params}) {
    console.log(params)
    const data = await getData(params.shopslug)
    console.log(data)
  return (
    <>
 <div className ="mt-10">
       <h1>
        Products
       </h1>
       <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
       {data.map((item,index)=>(
        <div key={index} className=" aspect-square h-80 overflow-hidden rounded-md hover:opacity-75 hover:shadow-xl ml-4">
        <img className=" h-60 w-full object-fill object-center" src={item.imageUrl}/>
        <div className='h-20 w-full  flex'>
           <div className='flex-col w-2/3 h-full flex items-start'>
            <h1 className='ml-2 hover:text-red-500'>
              {item.name}
            </h1>
            <p className='text-sm mt-5 ml-2'>
              <span className=''>Rs:</span>{item.price}
            </p>
           </div>
           <div className='w-1/3 h-full flex justify-center items-center'>
           <IoMdAddCircle className='w-12 h-12 text-red-600' />

           </div>
        </div>
       </div>
       ))}
       
       </div>
    </div>    
    </>
   
  )
}
