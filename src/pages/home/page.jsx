import React from 'react'
import Header from './header'
import { Link, Links } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Header />
        
        {/*main content*/}
        <Links>
          <Link  />
        </Links>
    </div>
  )
}

export default Home
