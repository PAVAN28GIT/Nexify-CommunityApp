import React from 'react'

function RightSidebar() {
  return (
    <div className='fixed right-0 top-0 h-screen bg-black w-96  py-3 px-5 border-l border-gray-800'>

      <div className='flex flex-col gap-5'>
    
        <div className='h-96 border border-gray-700 rounded-3xl'>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
        </div>
        <div className='h-96 border border-gray-700 rounded-3xl'>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
        </div>
     
      </div>
    </div>
  )
}

export default RightSidebar