import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Film, TvMinimalPlay, Clapperboard, FileCode2, CalendarDays, ChartColumnIncreasing, MessagesSquare, Cpu} from 'lucide-react'


const GeometricIcon = ({ shape, index }) => {
  const shapes = {
    circle: ( <Film className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9'/> ),
    cube: ( <TvMinimalPlay className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9' /> ),
    diamond: ( <Clapperboard className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9'/> ),
    triangle: ( <FileCode2 className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9'/> ),
    origami: (<CalendarDays className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9' />),
    pinwheel: (<ChartColumnIncreasing className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9'/>  ),
    gem: (<MessagesSquare className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9'/> ),
    abstract: (<Cpu className='w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9'/> )
  }

  return shapes[shape] || shapes.circle
}

const FallingIcon = ({ shape, delay, startX, inView, containerWidth,iconSize }) => {

  const [phase, setPhase] = useState('waiting')
  const groundY = 100

  const iconRadius = iconSize / 2;
  const circumference = 2 * Math.PI * iconRadius;
  const rotations = 2 ;
  const rollDistance = (circumference * rotations) / Math.PI ;
  // Random direction
  const [rollDirection] = useState(Math.random() > 0.5 ? 1 : -1)
  // Calculate bounds
  const minX = 0
  const maxX = containerWidth - iconSize
  let tempFinalX = startX + rollDistance * rollDirection
  if (tempFinalX < minX) tempFinalX = minX
  if (tempFinalX > maxX) tempFinalX = maxX
  const finalX = tempFinalX

  useEffect(() => {
    if (inView && phase === 'waiting') {
      setPhase('falling')
    }
  }, [inView, phase])

  return (
    <motion.div
      className='absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/60 border-2 border-white backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg z-20'
      initial={{ x: startX, y: -200, rotate: 0 }}
      animate={
        phase === 'waiting'
          ? { x: startX, y: -200, rotate: 0 }
          : phase === 'falling'
          ? { y: groundY, x: startX, rotate: 0 }
          : { y: groundY, x: finalX, rotate: 360 * rotations * rollDirection }}
      transition={
        phase === 'falling'
          ? { duration: 1.5, delay: delay, ease: [0.34, 1.56, 0.64, 1] }
          : phase === 'rolling'
          ? { duration: 5, ease: 'easeOut' }
          : {}
      }
      onAnimationComplete={() => {
        if (phase === 'falling') {
          setPhase('rolling')
        }
      }}
    >
      <div className=' text-black flex justify-center items-center'>
        <GeometricIcon shape={shape} />
      </div>
    </motion.div>
  )
}

const MarqueeText = ({ inView }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-transparent py-4 sm:py-6">
      <motion.div
        className="inline-block"
        initial={{ x: 0 }}
        animate={inView ? {
          x: [0, -1000]
        } : { x: 0 }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        }}
      >
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-2xl sm:text-3xl md:text-5xl font-bold text-black">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-400 opacity-20 rounded-lg"></div>
          <span>Inspired by people</span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-400 rounded-lg"></div>
          <span>Our Services</span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 rounded-lg"></div>
          <span>Inspired by people</span>
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pink-400 rounded-lg"></div>
          <span>Our Services</span>
        </div>
      </motion.div>
    </div>
    // <>
    //   <Marquee>
    //     <div className='flex items-center gap-4 sm:gap-6 md:gap-8 text-2xl sm:text-3xl md:text-5xl font-bold text-black'>
    //       <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-500/50 rounded-lg'></div>
    //       <h1 className='opacity-20'>Our Services </h1>
    //       <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500/50 rounded-lg'></div>
    //     </div>
    //   </Marquee>
    // </>
  )
}

export default function App () {
  const [containerWidth, setContainerWidth] = useState(1200)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.5 })

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const shapes = [ 'circle', 'cube', 'diamond', 'triangle', 'origami', 'pinwheel', 'gem', 'abstract' ]
  const iconCount = 8
  const iconSize = 96
  const edgePadding = 16

  const icons = Array.from({ length: iconCount }, (_, i) => {
    // New maxX keeps icon fully visible
    const minX = edgePadding
    const maxX = containerWidth - iconSize - edgePadding
    const startX = Math.random() * (maxX - minX) + minX
    return {
      shape: shapes[i % shapes.length],
      delay: i * 0.3,
      startX,
      containerWidth, 
      iconSize     
    }
  })

  return (
    <div
      ref={containerRef}
      className='relative max-w-7xl mx-auto h-[300px] bg-gradient-to-br from-lime-300 via-lime-200 to-yellow-200 overflow-hidden rounded-3xl'>
     
      {/* <div className='absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-10'>
        <span className='text-[3rem]  md:text-[5rem] font-bold text-black'>
          OUR SERVICES
        </span>
      </div> */}
    

      {/* Marquee header */}
      <div className='relative z-10'>
        <MarqueeText inView={isInView} />
      </div>

      {/* Falling icons */}
      {icons.map((icon, index) => (
        <FallingIcon
          key={index}
          shape={icon.shape}
          delay={icon.delay}
          startX={icon.startX}
          inView={isInView}
          containerWidth={containerWidth}
          iconSize={icon.iconSize}
        />
      ))}
    </div>
  )
}
