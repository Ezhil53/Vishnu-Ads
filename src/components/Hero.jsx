import React, { useRef } from 'react'
import Navbar from './Navbar'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { LuArrowRight} from 'react-icons/lu'
import Bg from '../assets/images/bg-pattern.png'
import Bg1 from '../assets/images/hero-bg.png'
import Bg2 from '../assets/images/hero-bg2.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.6, duration: 0.7 }
  },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: 'easeInOut' } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2, once: false })
  return (
    <>
      <Navbar />

      <section className='relative min-h-screen' id='hero' ref={ref}>
        <AnimatePresence mode='wait'>
          {isInView && (
            <motion.div
              key="hero-component"
              className='max-w-6xl mx-auto flex flex-col justify-center items-center h-screen px-4 md:px-0'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <motion.h1
                className='md:text-4xl text-2xl text-gray-600 font-semibold my-5'
                variants={itemVariants}
              >
                We <span className='text-[#2dd5d0]'> Create</span> Experiences{' '}
              </motion.h1>

              <motion.div
                className='flex flex-row items-center justify-center text-5xl text-gray-600 font-bold gap-4 text-center'
                variants={itemVariants}
              >
                <LayoutTextFlip
                  text='The Next Era of'
                  words={[
                    'Advertisement',
                    'Branding',
                    'Designing',
                    'Marketing'
                  ]}
                />
              </motion.div>

              <motion.p
                className='my-5 text-gray-500 text-center max-w-xl'
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti cupiditate recusandae corrupti, quisquam culpa
                reiciendis ab quis. Eos, corporis qui?
              </motion.p>

              <motion.div className='flex mt-5' variants={itemVariants}>
                <button className='bg-white flex items-center gap-4 text-[#2dd5d0] px-4 py-2 shadow-lg  rounded-4xl hover:bg-[#2dd5d0]/20 transition'>
                  Enquiry <LuArrowRight/>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className='absolute top-0 left-0 overflow-hidden'>
          <motion.img
            className='w-full h-auto origin-top-left transform scale-110 lg:w-auto lg:mx-auto lg:object-cover lg:scale-60 opacity-50'
            src={Bg}
            alt='bg'
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 0.6, scale: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1.5, delay: 0.5 }}
          className='absolute bottom-10 right-0 overflow-hidden'
        >
          <img
            className='w-full md:h-80 h-50 origin-bottom-right'
            src={Bg1}
            alt='bg'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 0.6, scale: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1.5, delay: 0.7 }}
          className='absolute bottom-10 left-7 hidden md:block'
        >
          <img className='w-full h-70 origin-bottom-left' src={Bg2} alt='bg' />
        </motion.div>
      </section>
    </>
  )
}

export default Hero
