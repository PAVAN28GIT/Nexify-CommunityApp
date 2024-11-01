import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full text-gray-400 fixed bottom-0 font-SourceCodePro'>
        <div className='flex justify-center items-center gap-8 py-4'>
          
        <Link className="hover:scale-105 hover:text-white hover:font-bold">
          Features
        </Link>
        <Link className="hover:scale-105 hover:text-white hover:font-bold">
          About
        </Link>
        
        </div>
    </div>
  )
}

export default Footer