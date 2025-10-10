import React, { useRef } from 'react'
import Navbar from './Navbar'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { LuArrowRight, LuZap } from 'react-icons/lu'
import Bg1 from '../../assets/images/hero-bg.png'



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

      <section className='relative min-h-screen  backdrop-blur-2xl bg-white' id='hero' ref={ref}>
        <div className="h-60 w-60 rounded-full bg-[#e28afa97] top-30 right-20 blur-[60px] -z-0 absolute"></div>
        <div className="h-40 w-40 rounded-full bg-[#7befdcdc] top-110 right-70 blur-[60px] -z-0 absolute"></div>
        <div className="grid md:grid-cols-3 grid-cols-1 max-w-6xl mx-auto">
        <AnimatePresence mode='wait'>
          {isInView && (
            <motion.div
              key='hero-component'
              className=' flex flex-col justify-center items-center md:items-start col-span-2 md:mt-5 h-screen    '
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <span className="inline-flex w-fit items-center px-4 py-2 shadow-lg bg-gray-50/50 backdrop-blur-sm border-2 border-black/10 rounded-full text-black/70 text-sm font-medium inset-shadow-sm inset-shadow-white">
                  <LuZap className="w-4 h-4 mr-2" />
                  Digital Innovation Leaders
                </span>
              <motion.h1
                className='md:text-4xl text-2xl text-gray-600 font-semibold my-5 z-10'
                variants={itemVariants}
              >
                We <span className='text-[#2dd5d0]'> Create</span> Experiences{' '}
              </motion.h1>

              <motion.div
                className='flex items-center z-10 mb-5 text-gray-600 font-bold gap-4 '
                variants={itemVariants}
              >
                <LayoutTextFlip
                  text='The Next Era of  '
                  words={[
                    'Advertisement',
                    'Branding',
                    'Designing',
                    'Marketing'
                  ]}
                />
              </motion.div>

              <motion.p
                className='my-5 text-gray-500 max-w-xl z-10 px-10 text-center md:text-left md:p-0'
                variants={itemVariants}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti cupiditate recusandae corrupti, quisquam culpa
                reiciendis ab quis. Eos, corporis qui?
              </motion.p>

              <motion.div className='flex mt-15 z-10 gap-8' variants={itemVariants}>
                <a href='' className='hover:bg-white/70 shadow-lg flex items-center gap-4 text-[#3dc2be] px-4 py-2 inset-shadow-sm rounded-4xl bg-[#2dd5d0]/20 transition inset-shadow-[#79bbb9]'>
                  Enquiry <LuArrowRight />
                </a>
                <button className='w-fit hover:bg-white/70 shadow-lg   bg-violet-200/50 transition text-violet-500  py-2 md:px-5 px-4 rounded-4xl inset-shadow-sm  inset-shadow-violet-300 ml-2'>
                  Get Quote
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <div className='absolute top-0 left-0 overflow-hidden -z-0'>
          <motion.img
            className='w-full h-80  opacity-50'
            src={Bg}
            alt='bg'
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 2 }}
          />
        </div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1.5, delay: 0.5 }}
          className='relative flex justify-center items-center  z-10 inset-shadow-xl '
        >
          <img
            className='w-90 h-auto  rounded-3xl hidden md:block bg-white/60 backdrop-blur-sm'
            src={Bg1}
            alt='bg'
          />
          <img
            className='absolute w-60 h-auto bottom-20 -left-20 rounded-3xl animate-pulse hidden md:block  '
            src={Bg2}
            alt='bg'
          />
        </motion.div>
</div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1.5, delay: 0.7 }}
          className='absolute bottom-5 left-7 hidden md:block'
        >
          <img className='w-full h-60 origin-bottom-left' src={Bg2} alt='bg' />
        </motion.div> */}
      </section>
    </>
  )
}

export default Hero
