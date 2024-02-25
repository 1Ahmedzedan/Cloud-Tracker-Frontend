import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from '../pages/Home'

const Applayout = () => {
  return (
      <div>
          <NavBar />
          <Home/>
          <Footer/>
      </div>
  )
}

export default Applayout