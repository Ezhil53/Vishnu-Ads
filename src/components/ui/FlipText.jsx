import React from 'react'
import { motion } from 'framer-motion'

const FlipText = ({ children, href }) => {

  const DURATION = 0.35
  const STAGGER = 0.050

  return (
    <motion.a
      initial='initial'
      whileHover='hovered'
      href={href}
      className='relative block overflow-hidden whitespace-nowrap text-md font-semibold cursor-pointer px-6 py-3 md:p-0  '
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' }
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i
            }}
            onHoverEnd={{delay: 0}}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className='absolute inset-0 hidden md:block'>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 }
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

export default FlipText
