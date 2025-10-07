'use client'
import React from 'react'
import { ArcTimeline } from '@/components/arc'

const ProTime = () => {
  const data = [
    {
      time: 'Step 1',
      steps: [{ icon: <span>🚀</span>, content: 'From Spark to Spotlight: The Journey of a Fresh Brand' }]
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
    <section className="relative h-[500vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-700 text-center mb-10">
          Our Process
        </h1>
        <ArcTimeline data={data} />
      </div>
    </section>
  )
}

export default ProTime
