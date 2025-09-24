import React from 'react'
import { ArcTimeline } from '@/components/ui/ArcTimeline'


const ProTime = () => {
  const data = [
    {
      time: 'Step 1 ',
      steps: [
        {
          icon: <span>🚀</span>,
          content: 'From Spark to Spotlight: The Journey of a Fresh Brand'
        }
      ]
    },
    {
      time: 'Step 2',
      steps: [{ icon: <span>📈</span>, content: 'Growth' }]
    },
    {
      time: 'Step 3',
      steps: [{ icon: <span>🚀</span>, content: 'Launched v1' }]
    },
    {
      time: 'Step 4',
      steps: [{ icon: <span>📈</span>, content: 'Growth' }]
    },
    {
      time: 'Step 5',
      steps: [{ icon: <span>🚀</span>, content: 'Launched v1' }]
    },
    {
      time: 'Step 6',
      steps: [{ icon: <span>📈</span>, content: 'Growth' }]
    }
  ]

  return (
    
    <div className='relative w-full overflow-hidden md:h-screen md:py-0 py-20 bg-gradient-to-l from-green-50 via-white to-violet-100'>
      
      <h1 className='text-4xl font-semibold text-gray-600 text-center md:text-left mt-15 max-w-5xl mx-auto'>Our Process</h1>
      <div className="flex items-end">
      <ArcTimeline
        data={data}
        className='mx-auto'
        arcConfig={{ circleWidth: 4300 }}
      />
      </div>
    </div>
  )
}

export default ProTime
