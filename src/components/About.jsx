import React from 'react'
import MD from '../assets/images/md.png'

const About = () => {
  return (
    <>
      <section className='relative py-16 px-4 md:px-14 min-h-screen z-10 flex items-center'>
        <div className='about top-0 left-0 md:block hidden'></div>

        <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 items-center'>
          {/* Left Text */}
          <div className='flex flex-col justify-center items-center space-y-4 p-5 rounded-lg  border-2 backdrop-blur-[2px] shadow-lg  bg-white/30 max-w-xs md:max-w-none'>
            <p className='text-2xl md:text-3xl font-bold text-[#3f8d82] mb-3'>
              Meet the Mind Behind the Magic
            </p>
            <p className='text-base text-gray-700 mb-3'>
              The spark behind our wildest ideas. If you can dream it, He can
              make it happen.
            </p>
            <i className='text-base text-gray-700 mb-3'>
              We’re not here to simply follow trends. We set them.
            </i>
            <p className='text-base text-[#6d4d87] font-semibold my-4'>
              Our Success is Your Success, Your Goals Are Our Mission
            </p>
          </div>

          {/* Center Image */}
          <div className='flex justify-center items-center relative group'>
            <img
              src={MD}
              alt='Rajesh - MD'
              className='rounded-2xl max-w-full w-60 md:w-60 h-auto border-2 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl'
            />
            <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-24px] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-max bg-transparent backdrop-blur-sm px-5 py-2 rounded-lg shadow-lg text-white font-semibold text-lg'>
              Rajesh R<br />
              <span className='text-sm text-white/80'>Managing Director</span>
            </div>
          </div>

          {/* Right Text */}
          <div>
            <div className='flex flex-col justify-center items-end text-right space-y-4 p-5 transition-opacity duration-700 delay-200 border-2 backdrop-blur shadow-lg rounded-lg my-4 bg-white/30 max-w-xs md:max-w-none'>
              <p className='text-2xl md:text-3xl font-bold text-[#3f8d82] mb-2'>
                Because Ordinary Isn't in Our Vocabulary
              </p>
            </div>
            <div className='flex flex-col justify-center items-end text-right space-y-4 p-5 transition-opacity duration-700 delay-200 border-2 backdrop-blur shadow-lg rounded-lg  bg-white/30 max-w-xs md:max-w-none'>
              <p className='text-base text-gray-700 max-w-xs md:max-w-none my-5'>
                We believe that great ideas don't just live on paper—they come
                to life through collaboration, bold thinking, and a lot of
                coffee. We started as a small team with a big vision: to break
                through the noise with ads that spark conversation. Today, we
                partner with brands who want to create not just awareness, but a
                movement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
