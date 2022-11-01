import React from 'react'
import Button from './Button'

const Sidebar = () => {
  return (
      <div className='h-screen w-[260px] pt-[120px] sticky top-0 left-0 bg-white border'>
          <Button>generate invoice</Button>
    </div>
  )
}

export default Sidebar