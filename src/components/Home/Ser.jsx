import { motion, useTransform, useScroll, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Zap, Target, TrendingUp } from 'lucide-react'
import { SparklesCore } from '../ui/sparkles'
import D1 from '../../assets/images/team.jpg'
import D2 from '../../assets/images/lap.jpg'
const Ser = () => {
  return (
    <div >
      {/* Horizontal Scroll Section (Desktop) / Stack Section (Mobile) */}
      <HorizontalScrollCarousel />
    </div>
  )
}


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const x = useTransform(scrollYProgress, [0, 1], ['50%', '-105%'])

  const introOpacity = useTransform( scrollYProgress, [0, 0.12, 0.22], [1, 0.3, 0])
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, -280])

  const cards = [
    {
      url: D1,
      title: 'Brand Registration',
      description: 'Complete legal setup and trademark protection',
      gradient: 'from-blue-600 to-cyan-600',
      id: 1
    },
    {
      url: D2,
      title: 'Web Development',
      description: 'Custom websites that convert and engage',
      gradient: 'from-purple-600 to-pink-600',
      id: 2
    },
    {
      url: D1,
      title: 'Digital Advertising',
      description: 'ROI-focused campaigns across all platforms',
      gradient: 'from-orange-600 to-red-600',
      id: 3
    },
    {
      url: D2,
      title: 'Social Media',
      description: 'Build communities that drive growth',
      gradient: 'from-green-600 to-emerald-600',
      id: 4
    }
 
  ]

  return (
    <>
      {/* Desktop: Horizontal Scroll */}
      <section ref={targetRef} className='relative h-[300vh] hidden lg:block'>
        <div className='sticky top-0 flex h-screen items-center overflow-hidden '>
          <motion.div
            style={{ opacity: introOpacity, x: introY }}
            className='absolute inset-0 flex items-center justify-center pointer-events-none'
          >
            <div className='h-[40rem] w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md'>
              <div className='max-w-3xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-extrabold relative z-20'>
                  Introducing the gallery
                </h2>
                <p className='mt-4 text-base md:text-lg text-neutral-600'>
                  This is some introductory content that shows first. Scroll
                  down further and the horizontal carousel will slide in from
                  right to left.
                </p>
              </div>
              <div className='w-[40rem] h-40 mt-10 relative'>
                {/* Gradients */}
                <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
                <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
                <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
                <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

                <SparklesCore
                  background='transparent'
                  minSize={0.7}
                  maxSize={1.5}
                  particleDensity={300}
                  className='w-full h-full'
                  particleColor='#000000'
                />
                <div className='absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ x }} className='flex gap-8 px-8 '>
            {cards.map(card => {
              return <Card card={card} key={card.id} />
            })}
          </motion.div>
        </div>
      </section>

      {/* Mobile/Tablet: Stacked Cards with Scroll Animation */}
      <section className='lg:hidden py-20 px-10 '>
        <div className='max-w-3xl mx-auto my-5'>
          <h2 className='text-3xl md:text-4xl font-extrabold relative z-20'>
            Introducing the gallery
          </h2>
          <p className='mt-4 text-base md:text-lg text-neutral-600'>
            This is some introductory content that shows first. Scroll down
            further and the horizontal carousel will slide in from right to
            left.
          </p>
        </div>
        <div className='max-w-2xl mx-auto space-y-8'>
          {cards.map((card, index) => (
            <MobileCard card={card} key={card.id} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}

const Card = ({ card }) => {
  return (
    <div className='group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200 rounded-3xl flex-shrink-0'>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-5'></div>
      <div className='absolute inset-0 z-10 flex flex-col justify-end p-8'>
        <div className='transform transition-transform duration-300 group-hover:translate-y-[-10px]'>
          <h3 className='text-3xl font-bold text-white mb-3'>{card.title}</h3>
          <p className='text-lg text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {card.description}
          </p>
        </div>
        <div className='mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <button
            className={`px-6 py-3 bg-gradient-to-r ${card.gradient} text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

const MobileCard = ({ card, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='relative h-[300px] overflow-hidden bg-neutral-200 rounded-3xl'
    >
      <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-5'></div>
      <div className='absolute inset-0 z-10 flex flex-col justify-end p-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        >
          <h3 className='text-2xl font-bold text-white mb-3'>{card.title}</h3>
          <p className='text-base text-gray-200 mb-4'>{card.description}</p>
          <button
            className={`px-6 py-3 bg-gradient-to-r ${card.gradient} text-white rounded-full font-semibold shadow-xl`}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Ser
