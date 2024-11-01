import React from 'react'
import Hero from './Hero'
import Navbar from '../../components/Navbar'
import Features from './Features'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Features />
    </div>
  )
}

export default LandingPage