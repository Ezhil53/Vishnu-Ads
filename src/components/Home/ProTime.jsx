'use client'
import React from 'react'
import { Arc } from '@/components/ui/Arc'
import { ArcBtn } from '@/components/ui/ArcBtn'

const ProTime = () => {
  const data = [
    {
      time: 'Step 1',
      steps: [
        {
          icon: <span>🚀</span>,
          content: 'From Spark to Spotlight: The Journey of a Fresh Brand'
        }
      ]
    },
    {
      time: 'Step 2',
      steps: [{ icon: <span>📈</span>, content: 'Growth & Market Expansion' }]
    },
    {
      time: 'Step 3',
      steps: [{ icon: <span>🧠</span>, content: 'Innovation & Refinement' }]
    },
    {
      time: 'Step 4',
      steps: [{ icon: <span>🎯</span>, content: 'Reaching Milestones' }]
    },
    {
      time: 'Step 5',
      steps: [{ icon: <span>🏆</span>, content: 'Success Achieved' }]
    }
  ]

  return (
    <section className='relative h-[500vh] bg-white max-w-7xl mx-auto'>
      
      <div className='sticky top-0 h-screen md:flex flex-col justify-center hidden '>
        <h1 className='text-4xl  font-semibold text-gray-700 px-10'>Our Process</h1>
        <Arc data={data} />
      </div>
      <div className='sticky top-0  flex flex-col justify-center items-center md:hidden h-screen '>
        <h1 className='text-4xl  font-semibold text-gray-700 '>Our Process</h1>
        <ArcBtn data={data} />
      </div>
    </section>
  )
}

export default ProTime
