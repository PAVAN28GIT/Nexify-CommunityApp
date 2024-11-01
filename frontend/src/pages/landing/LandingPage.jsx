import React from 'react'
import Hero from './Hero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function LandingPage() {
  return (
    <div className="h-screen bg-[url('/images/hero-background.jpg')] bg-cover bg-start" >
      <Navbar />
      <Hero /> 
      <Footer />
    </div>
  )
}

export default LandingPage