import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Process from '../components/Home/Process'
import Stats from '../components/Home/Stats'
import About from '../components/Home/About'
import Clients from '../components/Home/Clients'
import Footer from '../components/Home/Footer'
import ProTime from '../components/Home/ProTime'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <Process />
      <Clients />
      <ProTime />
      <Footer />
    </>
  )
}

export default Home
