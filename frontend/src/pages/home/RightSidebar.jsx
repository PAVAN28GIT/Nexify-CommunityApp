import React from 'react'

function RightSidebar() {
  return (
    <div className='fixed right-0 top-0 h-screen bg-black w-96 shadow-2xl shadow-[rgba(255,255,255,0.6)] py-3 px-5'>

      <div className='flex flex-col gap-5'>
    
        <div className='h-96 bg-zinc-900 border rounded-3xl shadow-2xl shadow-[rgba(255,255,255,0.4)]'>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
        </div>
        <div className='h-96 bg-zinc-900 border rounded-3xl shadow-2xl shadow-[rgba(255,255,255,0.6)]'>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
          <div className='text-white text-3xl p-5'>Trending</div>
        </div>
     
      </div>
    </div>
  )
}

export default RightSidebar