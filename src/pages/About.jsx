import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import {
  Rocket,
  Target,
  Users,
  Globe,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Star
} from 'lucide-react'

const About = () => {
  const [activeService, setActiveService] = useState(0)
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const teamRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })
  const isStatsInView = useInView(statsRef, { once: true })
  const isTeamInView = useInView(teamRef, { once: true })

  const services = [
    {
      icon: <Globe className='w-8 h-8' />,
      title: 'Brand Registration',
      description:
        'Complete business registration, trademark protection, and legal documentation to establish your brand foundation.',
      features: [
        'Business Registration',
        'Trademark Filing',
        'Legal Documentation',
        'Brand Protection'
      ]
    },
    {
      icon: <Smartphone className='w-8 h-8' />,
      title: 'Website Development',
      description:
        'Custom websites that convert visitors into customers with modern design and seamless functionality.',
      features: [
        'Custom Design',
        'Mobile Responsive',
        'SEO Optimized',
        'E-commerce Ready'
      ]
    },
    {
      icon: <Target className='w-8 h-8' />,
      title: 'Digital Advertising',
      description:
        'Data-driven ad campaigns across all platforms to maximize your ROI and reach your target audience.',
      features: [
        'Google Ads',
        'Facebook Ads',
        'Instagram Campaigns',
        'YouTube Marketing'
      ]
    },
    {
      icon: <Users className='w-8 h-8' />,
      title: 'Social Media Management',
      description:
        'Build and engage your community with strategic content that drives brand awareness and loyalty.',
      features: [
        'Content Creation',
        'Community Management',
        'Influencer Partnerships',
        'Analytics & Reporting'
      ]
    },
    {
      icon: <ShoppingCart className='w-8 h-8' />,
      title: 'Logistics Solutions',
      description:
        'End-to-end logistics management to ensure your products reach customers efficiently and safely.',
      features: [
        'Inventory Management',
        'Shipping Solutions',
        'Supply Chain',
        'Fulfillment Services'
      ]
    }
  ]

  const stats = [
    {
      number: '500+',
      label: 'Brands Transformed',
      icon: <Award className='w-6 h-6' />
    },
    {
      number: '95%',
      label: 'Client Retention',
      icon: <Heart className='w-6 h-6' />
    },
    {
      number: '2M+',
      label: 'Revenue Generated',
      icon: <TrendingUp className='w-6 h-6' />
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: <Zap className='w-6 h-6' />
    }
  ]

  const teamValues = [
    {
      title: 'Innovation First',
      description:
        'We leverage cutting-edge technology and creative strategies to keep your brand ahead of the curve.'
    },
    {
      title: 'Data-Driven Results',
      description:
        'Every decision is backed by comprehensive analytics and measurable outcomes for optimal performance.'
    },
    {
      title: 'Partnership Approach',
      description:
        "We're not just a service provider – we're your strategic partner in long-term business growth."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-purple-100 via-white to-green-100 relative overflow-hidden'>
        {/* Background Elements */}
        {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div> */}

        {/* Hero Section */}
        <section ref={heroRef} className='relative px-4 py-20 lg:py-32'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <motion.h1
                className='text-5xl lg:text-6xl font-bold text-gray-600 mb-6 leading-tight'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We Transform
                <span className='block  text-gray-600'>
                  Brands Into Empires
                </span>
              </motion.h1>

              <motion.p
                className='text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed'
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From the first spark of an idea to a thriving global presence,
                we provide every service your brand needs to succeed in the
                digital age.
              </motion.p>

              <motion.div
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className='group relative bg-gradient-to-r from-cyan-200 to-purple-200 hover:from-cyan-100 hover:to-purple-100 text-gray-700 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>
                  <span className='relative z-10 flex items-center gap-2'>
                    Start Your Journey
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity'></div>
                </button>
              </motion.div>
            </motion.div>

            {/* Floating Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 '>
              {[
                {
                  icon: <Rocket className='w-8 h-8' />,
                  title: 'Launch Ready',
                  desc: 'Get to market faster'
                },
                {
                  icon: <TrendingUp className='w-8 h-8' />,
                  title: 'Growth Focused',
                  desc: 'Scalable solutions'
                },
                {
                  icon: <Award className='w-8 h-8' />,
                  title: 'Award Winning',
                  desc: 'Industry recognized'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className='flex items-center justify-center gap-8 mx-auto backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-black/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer w-80'
                >
                  <div className='text-green-600/80 mb-4 scale-150 transition-transform'>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-gray-500'>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className='relative px-4 py-20'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl lg:text-6xl font-bold text-gray-700 mb-6'>
                Complete Brand
                <span className='block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                  Ecosystem
                </span>
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Everything your brand needs under one roof. From legal
                foundation to digital dominance.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='space-y-6'
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 cursor-pointer ${
                      activeService === index
                        ? 'bg-white/20 border-cyan-400/50 shadow-2xl shadow-cyan-500/20'
                        : 'bg-white/60 border-white hover:bg-white/30'
                    }`}
                    onClick={() => setActiveService(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className='flex items-start gap-4'>
                      <div
                        className={`p-3 rounded-xl transition-colors ${
                          activeService === index
                            ? 'bg-cyan-500/20 text-cyan-400'
                            : 'bg-white/10 text-gray-400'
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                          {service.title}
                        </h3>
                        <p className='text-gray-500 text-md leading-relaxed'>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Active Service Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='backdrop-blur-xl bg-white/30 rounded-3xl p-8 border border-black/30 shadow-lg hidden md:block'
              >
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='p-4 bg-gradient-to-r from-cyan-200 to-purple-200 rounded-2xl text-gray-700'>
                      {services[activeService].icon}
                    </div>
                    <h3 className='text-2xl font-bold text-gray-700'>
                      {services[activeService].title}
                    </h3>
                  </div>

                  <p className='text-gray-500 mb-8 leading-relaxed text-lg'>
                    {services[activeService].description}
                  </p>

                  <div className='space-y-4'>
                    <h4 className='text-lg font-semibold text-gray-700 mb-4'>
                      Key Features:
                    </h4>
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className='flex items-center gap-3'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <CheckCircle className='w-5 h-5 text-cyan-400' />
                        <span className='text-gray-500'>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className='relative px-4 py-20'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className='backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20'
            >
              <div className='text-center mb-12'>
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-700 mb-4'>
                  Proven Track Record
                </h2>
                <p className='text-xl text-gray-500'>
                  Numbers that speak louder than words
                </p>
              </div>

              <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='text-center group'
                  >
                    <div className='bg-gradient-to-r from-cyan-100 to-purple-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
                      <div className='text-gray-600'>{stat.icon}</div>
                    </div>
                    <div className='text-3xl lg:text-4xl font-bold text-gray-600 mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-gray-500 text-sm lg:text-base'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={teamRef} className='relative px-4 py-20'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl lg:text-6xl font-bold text-gray-700 mb-6'>
                What Drives
                <span className='block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                  Our Success
                </span>
              </h2>
              {/* <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Our core values shape every strategy, every campaign, and every relationship we build.
            </p> */}
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {teamValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className='backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group'
                >
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-gradient-to-r from-cyan-200 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform'>
                      <Star className='w-8 h-8 text-gray-600' />
                    </div>
                    <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                      {value.title}
                    </h3>
                    <p className='text-gray-500 leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative px-4 py-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl p-12 border border-white/20'
            >
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-700 mb-6'>
                Ready to Build Your Empire?
              </h2>
              <p className='text-xl text-gray-500 mb-8 leading-relaxed'>
                Join the brands that chose growth over mediocrity. Let's create
                something extraordinary together.
              </p>
              <button className='group relative bg-white hover:from-cyan-200 hover:to-purple-400 text-gray-500 font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>
                <span className='relative z-10 flex items-center gap-2'>
                  Let's Get Started
                  <Rocket className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-200 to-purple-200 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity'></div>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About
