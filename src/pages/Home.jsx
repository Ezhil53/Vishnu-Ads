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
import Sticky from '../components/Home/Sticky'
import Try from '../components/Try'


const Home = () => {
  return (
    <>
    {/* <Try/> */}
      <Dummy/>
      {/* <Hero /> */}
      <Stats />
      <About />
      <Services />
      <Sticky/>
      <ProTime />
      <Process />
      <S2/>
      <Clients />
      <Footer />
      <Cursor/>
    </>
  )
}

export default Home
