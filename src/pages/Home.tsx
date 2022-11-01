import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import GraphOverview from '../components/GraphOverview'

const Home = () => {
  return (
      <div>
          <div className='flex gap-10  justify-between mb-[30px]'>
              
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
          <GraphOverview/>
      
    </div>
  )
}

export default Home