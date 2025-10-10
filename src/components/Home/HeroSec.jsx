import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Bg1 from '../../assets/images/hero-bg.png'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { Rocket, Users, ArrowRight, Sparkles, Target, Globe, Award, BarChart, Star } from 'lucide-react'

const HeroSec = () => {
  const services = [
    { icon: <Globe className='w-5 h-5' />, text: 'Brand Registration' },
    { icon: <Target className='w-5 h-5' />, text: 'Web Development' },
    { icon: <BarChart className='w-5 h-5' />, text: 'Digital Ads' },
    { icon: <Users className='w-5 h-5' />, text: 'Social Media' },
    { icon: <Rocket className='w-5 h-5' />, text: 'Logistics' }
  ]

  return (
    <ParallaxProvider>
      <Navbar />
      <div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 overflow-hidden'>
        {/* Main Content */}
        <motion.div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24'
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-center'>
            {/* Left Column - Text Content */}
            <Parallax speed={5} className='col-span-2'>
              <div className='space-y-8 '>
                {/* Badge */}
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-lg border-2 border-white '>
                  <Sparkles className='w-4 h-4 text-purple-600' />
                  <span className='text-sm font-semibold text-gray-700'>
                    Your Complete Growth Partner 
                  </span>
                </div>

                <Parallax speed={10}>
                  <h1 className='text-2xl sm:text-4xl lg:text-5xl text-gray-600 font-bold my-3 z-10'>
                    We <span className='text-[#2dd5d0]'> Create</span>{' '}
                    Experiences{' '}
                  </h1>

                  <div className='flex items-center z-10 mb-5 text-gray-600 font-bold gap-4 '>
                    <LayoutTextFlip
                      text='The Next Era of  '
                      words={[
                        'Advertisement',
                        'Branding',
                        'Designing',
                        'Marketing'
                      ]}
                    />
                  </div>

                  {/* Subheading */}

                  <p className='text-md sm:text-xl text-gray-600 leading-relaxed max-w-xl'>
                    From registration to rocket launch. We provide end-to-end
                    marketing solutions that turn startups into industry
                    leaders.
                  </p>
                </Parallax>
                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button className='group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden '>
                    <span className='relative z-10 flex items-center justify-center gap-2'>
                      Get Started Free
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </button>

                  <button className='px-6 py-3 bg-white/60 backdrop-blur-md border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-white/80 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg'>
                    View Our Work
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className='flex flex-wrap items-center justify-center gap-8 pt-4'>
                  <div className='flex items-center gap-2'>
                    <div className=' -space-x-2 hidden sm:flex'>
                      {[1, 2, 3].map(i => (
                        <div
                          key={i}
                          className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white'
                        ></div>
                      ))}
                    </div>
                    <div className='text-sm'>
                      <p className='font-semibold text-gray-900'>500+ Brands</p>
                      <p className='text-gray-600'>Trust us</p>
                    </div>
                  </div>

                  <div className='h-12 w-px bg-gray-300'></div>

                  <div className='flex items-center gap-2'>
                    <div className='sm:flex hidden gap-1'>
                      {[1, 2, 3].map(i => (
                        <Award
                          key={i}
                          className='w-5 h-5 text-yellow-500 fill-yellow-500'
                        />
                      ))}
                    </div>
                    <div className='text-sm'>
                      <p className='font-semibold text-gray-900 flex gap-3 items-center'>
                        4.9/5 <Star size={14} className='text-yellow-500 fill-yellow-500'/>
                      </p>
                      <p className='text-gray-600'>Client reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>

            {/* Right Column - Visual Elements */}
            <div className='relative '>
              {/* Main Glass Card */}
              <Parallax speed={-15}>
                <img src={Bg1} alt='hero-img ' className='mt-15' />
              </Parallax>

              {/* Floating Service Cards */}
              <Parallax
                speed={8}
                className='absolute top-0 md:left-20 right-0 animate-float-slow'
              >
                <div className='bg-white/50 backdrop-blur-md rounded-2xl px-6 py-3 w-fit shadow-lg border border-white/60 flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center'>
                    <Globe className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <p className='text-xs text-gray-600'>New Project</p>
                    <p className='font-semibold text-gray-900'>Brand Launch</p>
                  </div>
                </div>
              </Parallax>

              <Parallax
                speed={-8}
                className='absolute top-100 -right-5 animate-float-slow'
              >
                <div className='bg-white/50 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/60 flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center'>
                    <Rocket className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <p className='text-xs text-gray-600'>Campaign</p>
                    <p className='font-semibold text-gray-900'>Live Now</p>
                  </div>
                </div>
              </Parallax>

              <Parallax
                speed={10}
                className='absolute bottom-32 md:-left-15 left-0 animate-float-slow'
              >
                <div className='bg-white/50 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/60 flex items-center gap-3'>
                  <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center'>
                    <Target className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <p className='text-xs text-gray-600'>ROI Increase</p>
                    <p className='font-semibold text-gray-900'>+340%</p>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxProvider>
  )
}

export default HeroSec
