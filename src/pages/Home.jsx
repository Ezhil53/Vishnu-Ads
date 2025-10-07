import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Process from '../components/Home/Process'
import Stats from '../components/Home/Stats'
import About from '../components/Home/About'
import Clients from '../components/Home/Clients'
import Footer from '../components/Home/Footer'
import ProTime from '../components/Home/ProTime'
import Dummy from '../components/Home/HeroSec'
import Cursor from '../components/ui/smoothFollower'
import S2 from '../components/Home/Ser'



const Home = () => {
  return (
    <>
    <Dummy/>
      {/* <Hero /> */}
      <Services />
      <Stats />
      <About />
      <ProTime />
      <Process />
      <S2/>
      <Clients />
     
      <Footer />
      {/* <Cursor/> */}
      

    </>
  )
}

export default Home
