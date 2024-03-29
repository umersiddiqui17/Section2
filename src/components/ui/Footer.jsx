import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='h-56 bg-gradient-to-b from-indigo-300 to-indigo-600 flex flex-col md:flex-row justify-center items-center'>
  <div className='flex items-center mr-20'>
 {/* logo */}
 <h1>Logo</h1>
  </div>
  <div className='md:w-4/5 flex items-center'>
    {/* copyright */}
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae nesciunt, natus sapiente distinctio cum! Atque eum corrupti consequuntur nobis, voluptates natus incidunt eligendi repudiandae ex ea non, numquam provident.</h1>
  </div>
</footer>
    </>
  )
}
