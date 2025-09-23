import React from 'react'
import FeaturesSectionDemo from './ui/features-section-demo-2'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className='services relative min-h-screen py-10'>
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className='text-5xl font-semibold text-center text-gray-600'
      >
        Our <span className='text-[#4cc1bd]'>Services</span>
      </motion.h1>
      <motion.div className='py-10 relative flex justify-center items-center max-w-6xl mx-auto'
      initial={{opacity: 0, y: 100}}
        whileInView={{opacity:1, y:0 }} 
        transition= { {duration: 2, ease: 'easeOut' }}  
        viewport={{ once: false }}
      >
        <FeaturesSectionDemo className='absolute -top-10 left-0' />
      </motion.div>
    </section>
  )
}

export default Services
