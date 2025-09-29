import React from 'react'
import { motion } from 'framer-motion'
import MD from '../../assets/images/md.png'

const About = () => {
  return (
    <>
      <section className='relative py-16 px-4 md:px-14 min-h-screen z-10 flex items-center'>
        <div className='about top-0 left-0 md:block hidden'></div>

        <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 items-center'>
          {/* Left Text */}
          <div className='flex flex-col justify-center items-center space-y-4 p-5 rounded-lg   max-w-xs md:max-w-none'>
            <p className='text-2xl md:text-3xl font-bold text-[#3f8d82] mb-8'>
              Meet the Mind Behind the Magic
            </p>
            <p className='text-lg text-gray-700 mb-8 text-md'>
              The spark behind our wildest ideas. If you can dream it, He can
              make it happen.
            </p>
            <motion.i
              className='text-lg  italic border-l-4 border-cyan-400 pl-4'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              We're not here to simply follow trends. We set them.
            </motion.i>
            <p className=' text-[#6d4d87] font-semibold my-4 text-lg'>
              Our Success is Your Success, Your Goals Are Our Mission
            </p>
          </div>

          {/* Center Image */}
          <motion.div
            className='relative'
            whileHover={{
              rotateY: 15,
              rotateX: 5,
              scale: 1.1
            }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <img
              src={MD}
              alt='Rajesh - MD'
              className='rounded-3xl w-64 md:w-80 h-auto  relative z-10'
            />

            {/* Floating name card */}
            <motion.div
              className='absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-gradient-to-r from-purple-400/50 to-cyan-500/50 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl  z-20  min-w-max'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -5
              }}
              transition={{ delay: 1 }}
            >
              <motion.div className='text-center' whileHover={{ scale: 1.05 }}>
                <h3 className='text-white font-bold text-lg'>Rajesh R</h3>
                <p className='text-black/80 text-sm'>Managing Director</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Text */}
          <div>
            <div className='flex flex-col justify-center items-end text-right space-y-4 p-5 transition-opacity duration-700 delay-200   my-4 max-w-xs md:max-w-none'>
              <p className='text-2xl md:text-3xl font-bold text-[#3f8d82] '>
                Because Ordinary Isn't in Our Vocabulary
              </p>
            </div>
            <motion.div
             className='flex flex-col justify-center items-end text-right space-y-4 p-5 transition-opacity duration-700 delay-200    max-w-xs md:max-w-none'
             initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{  duration: 1}}
              viewport={{ once: false }}
             >
              <p className=' text-gray-700 max-w-xs md:max-w-none my-5 text-lg'>
                We believe that great ideas don't just live on paper—they come
                to life through collaboration, bold thinking, and a lot of
                coffee. We started as a small team with a big vision: to break
                through the noise with ads that spark conversation. Today, we
                partner with brands who want to create not just awareness, but a
                movement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
