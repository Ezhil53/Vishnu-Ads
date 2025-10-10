import React from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Bg from '../assets/images/bgg.jpg'
import City from '../assets/images/city.png'

const Try = () => {
  const background = {
    image: Bg,
    translateY: [0, 100],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true
  }

  const headline = {
    translateY: [0, -40],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <h1 className='text-6xl md:text-8xl text-white font-thin'>
          Hello World!
        </h1>
      </div>
    )
  }

  const foreground = {
    image: City,
    translateY: [0, 0],
    scale: [1, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true
  }

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900' />
    )
  }

  return (
    <ParallaxProvider>
    <ParallaxBanner
      layers={[background, foreground, headline, gradientOverlay]}
      className='aspect-[2/1] bg-gray-900'
    />
    </ParallaxProvider>
  )
}

export default Try
