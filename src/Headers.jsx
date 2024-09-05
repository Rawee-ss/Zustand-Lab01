import React from 'react'

export default function Headers() {
  return (
    <div className='bg-blue-300 h-20 flex justify-between items-center p-4 '>
        <h1 className='text-[30px] font-bold '>Navbar</h1>
        <div >

        <button className='w-[80px] h-[30px] bg-blue-900 text-white rounded-[10px] font-medium ml-3' >Home</button>
        <button className='w-[80px] h-[30px] bg-blue-900 text-white rounded-[10px] font-medium ml-3' >About</button>
        <button className='w-[80px] h-[30px] bg-blue-900 text-white rounded-[10px] font-medium ml-3' >Login</button>
        </div>
      
    </div>
  )
}
