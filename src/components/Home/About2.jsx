import React from 'react'
import { motion } from 'framer-motion'
import MD from '../assets/images/md.png'

const About2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.5
      }
    }
  }

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className='relative py-20 px-4 md:px-14 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-200 via-purple-200 to-slate-200'>
      {/* Animated Background Elements */}
      <motion.div 
        className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl'
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl'
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className='grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-8 items-center relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Text Card */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className='group relative'
        >
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500'
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className='relative flex flex-col justify-center items-start space-y-6 p-8 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl bg-white/10 hover:bg-white/15 transition-all duration-500'
            variants={hoverVariants}
            animate={floatingAnimation}
          >
            <motion.h2 
              className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Meet the Mind Behind the Magic
            </motion.h2>
            
            <motion.p 
              className='text-base text-gray-200 leading-relaxed'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              The spark behind our wildest ideas. If you can dream it, He can make it happen.
            </motion.p>
            
            <motion.i 
              className='text-base  italic border-l-4 border-cyan-400 pl-4'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              We're not here to simply follow trends. We set them.
            </motion.i>
            
            <motion.p 
              className='text-base text-purple-300 font-semibold'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Our Success is Your Success, Your Goals Are Our Mission
            </motion.p>
            
            {/* Decorative Elements */}
            <motion.div
              className='absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className='flex justify-center items-center relative group'
          variants={imageVariants}
        >
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500'
            whileHover={{ scale: 1.2 }}
          />
          
          <motion.div
            className='relative'
            whileHover={{ 
              rotateY: 15,
              rotateX: 5,
              scale: 1.1
            }}
            transition={{ type: "spring", damping: 15 }}
          >
            <img
              src={MD}
              alt='Rajesh - MD'
              className='rounded-3xl w-64 md:w-80 h-auto border-2 border-white/30 shadow-2xl relative z-10'
            />
            
            {/* Floating name card */}
            <motion.div
              className='absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border z-20 border-white/20 min-w-max'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              transition={{ delay: 1.2 }}
             >
              <motion.div
                className='text-center'
                whileHover={{ scale: 1.05 }}
              >
                <h3 className='text-white font-bold text-lg'>Rajesh R</h3>
                <p className='text-white/80 text-sm'>Managing Director</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Orbiting decorative elements */}
          <motion.div
            className='absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
            animate={{
              rotate: 360,
              x: [80, -80, 80],
              y: [80, -80, 80]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Right Text Cards */}
        <motion.div
          variants={itemVariants}
          className='space-y-6'
        >
          {/* First Card */}
          <motion.div
            className='group relative'
            whileHover="hover"
            variants={hoverVariants}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-l from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500'
              whileHover={{ scale: 1.05 }}
            />
            <motion.div
              className='relative flex flex-col items-end text-right p-8 border border-white/20 backdrop-blur-md shadow-2xl rounded-2xl bg-white/10 hover:bg-white/15 transition-all duration-500'
              animate={{
                y: [-5, 5, -5],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.h2 
                className='text-2xl md:text-3xl font-bold bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'
                whileHover={{ scale: 1.05 }}
              >
                Because Ordinary Isn't in Our Vocabulary
              </motion.h2>
            </motion.div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className='group relative'
            whileHover="hover"
            variants={hoverVariants}
          >
            <motion.div
              className='absolute inset-0 bg-gradient-to-l from-cyan-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500'
              whileHover={{ scale: 1.05 }}
            />
            <motion.div
              className='relative flex flex-col items-end text-right p-8 border border-white/20 backdrop-blur-md shadow-2xl rounded-2xl bg-white/10 hover:bg-white/15 transition-all duration-500'
              animate={{
                y: [5, -5, 5],
                transition: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.p 
                className='text-base text-gray-200 leading-relaxed'
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                We believe that great ideas don't just live on paper—they come to life through 
                collaboration, bold thinking, and a lot of coffee. We started as a small team 
                with a big vision: to break through the noise with ads that spark conversation. 
                Today, we partner with brands who want to create not just awareness, but a movement.
              </motion.p>
              
              <motion.div
                className='absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full'
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-white/20 rounded-full'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -80, -20],
            x: [-10, 10, -10],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </section>
  )
}

export default About2