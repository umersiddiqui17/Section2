import React from 'react'

export default function Bundles() {
  return (
    <div className='w-full mb-5 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mr-1 ml-1'>
                <div className='h-60 rounded-xl w-full bg-red-400'>
                  <img src="/firstimg.png" alt="" className='w-full h-full'/>
                </div>
                <div className='h-60 w-full rounded-xl bg-red-500'>
                  <img src="/secondimg.png" alt=""className='w-full h-full' />
                </div>
                <div className='h-60 w-full rounded-xl bg-red-600'>
                   <img src="thirdimg.png" alt="" className='w-full h-full'/>
                </div>
        </div>
    </div>
  )
}
