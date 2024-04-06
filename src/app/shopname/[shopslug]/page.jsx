import { client } from '@/app/libs/sanity'
import React from 'react'
async function getData(shopslug) {
    const query =`*[_type == "product" && shopslug.current == "${shopslug}"  ]{
        _id,
        name,
        "slug":slug.current,
        "imageUrl":images[0].asset->url,
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
    <div className ="mt-40">
       <h1>
       {data.map((item,index)=>(
        <div className='' key={index}>
          {item.name}
        </div>
       ))}
        </h1>
    </div>
  )
}
