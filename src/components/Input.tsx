import React from 'react'
import search from '../assets/Icons/Search.svg'
const Input = () => {
  return (
      <div className='flex items-center gap-2 border border-transparent hover:border-gray-400 px-1 focus-within:border-black rounded'>
          <img src={search} alt="" className='w-4' />
          <input placeholder='search...' className='py-2 outline-none'/>
    </div>
  )
}

export default Input