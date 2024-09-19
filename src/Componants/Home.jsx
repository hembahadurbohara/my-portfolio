import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Skills from './Skills'
import Work from './Work'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'

function Home() {
  return (
    <>
    <Navbar/>
   <HeroSection/>
   <About/>
    <Skills/> 
    <Work/>
    <Experience/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default Home