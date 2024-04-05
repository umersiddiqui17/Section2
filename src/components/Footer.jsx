import React from 'react'

export default function Footer() {
  return (
    <div className='h-64 bg-slate-100 w-full flex justify-center items-center'>
      <div className='grid grid-cols-4 gap-x-36 ml-4 mr-4'>
         <div>
            <div className='font-sans text-xl font-semibold mb-4'>
            Get to Know Us
            </div>
            <div>
                <ul className='space-y-4 text-xs'>
                    <li>About us</li>
                    <li>Shipping Policy</li>
                    <li>Term & Conditions</li>
                    <li>Returns and Refunds</li>
                </ul>
            </div>
         </div>
         <div>
            <div className='font-sans text-xl font-semibold mb-4'>
            Information
            </div>
            <div>
            <ul className='space-y-4 text-xs'>
                    <li>Merchant Logins</li>
                    <li>Payment Methods</li>
                    <li>FAQ</li>
                  
                </ul>
            </div>
         </div>
         <div>
            <div className='font-sans text-xl font-semibold mb-4'>
            Let Us Help You
            </div>
            <div>
            <ul className='space-y-4 text-xs'>
                    <li>Customer Support Center</li>
                    <li>Refund & Returns</li>
                    <li>Sell on Alfamall</li>
                </ul>
            </div>
         </div>
         <div>
            <div className='font-sans text-xl font-semibold mb-4'>
            Keep In Touch
            </div>
            <div>
            <ul className='space-y-4 text-xs'>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>(021) 111-225-111</li>
                    
                </ul>
            </div>
         </div>
      </div>
    </div>
  )
}
