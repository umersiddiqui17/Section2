import React from 'react'

export default function SecBundle() {
  return (
    <div className='w-full mb-5 mt-10'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mr-1 ml-1'>
            <div className='h-40 rounded-xl w-full bg-red-400'>
              <img src="/limg.png" alt="" className='w-full h-full'/>
            </div>
            <div className='h-40 w-full rounded-xl bg-red-500'>
              <img src="/limg2.png" alt=""className='w-full h-full' />
            </div>
            
    </div>
</div>
  )
}
