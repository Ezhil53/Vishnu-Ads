import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Stats from './components/Stats'
import About from './components/About'
import Clients from './components/Clients'
import Footer from './components/Footer'

import ProTime from './components/ProTime'

function App () {
  return (
    <>
      <Hero />
      <Services/>
      <Stats/>
      <About/>
      <Process/>
      <Clients/>
      <ProTime/>
      <Footer/>
      
    </>
  )
}

export default App
