import React from 'react'
import { Timeline } from '../ui/timeline'
import S1 from '../../assets/images/process/journey.png'
import S2 from '../../assets/images/process/strategy.png'
import S3 from '../../assets/images/process/understanding.png'


const Process = () => {
  const data = [
    {
      title: 'Step 1',
      content: (
        <div className='grid md:grid-cols-2 grid-cols-1  relative '>
          <div>
            <p className='text-md font-semibold text-[#66B7B4] md:text-lg mb-4 '>
              From Spark to Spotlight: The Journey of a Fresh Brand{' '}
            </p>
            <p className='mb-8   text-gray-500 text-sm '>
              A brand waiting to be born—an idea brimming with potential but
              needing a guiding hand to bring it to life. That’s where we come
              in
            </p>
          </div>
          <div className='flex justify-end'>
            <img
              src={S1}
              alt='startup template'
              className=' w-50 rounded-lg object-fit h-auto '
            />
          </div>
        </div>
      )
    },
    {
      title: 'Step 2',
      content: (
        <div className='grid md:grid-cols-2 grid-cols-1 relative '>
          <div>
            <p className='text-md font-semibold text-[#66B7B4] md:text-xl mb-4 '>
              It Begins with a Conversation
            </p>
            <p className='mb-8 text-xs  text-gray-500 md:text-sm '>
              We start by listening. Deeply. Understanding your vision, your
              dreams, and your goals. Your story is our first chapter, and we
              can’t wait to write it with you
            </p>
          </div>
          <div className='flex justify-end'>
            <img
              src={S3}
              alt='startup template'
              className=' w-60 rounded-lg object-fit h-auto invert'
            />
          </div>
        </div>
      )
    },
    {
      title: 'Step 3',
      content: (
        <div className='grid md:grid-cols-2 grid-cols-1 relative '>
          <div>
            <p className='text-md font-semibold text-[#66B7B4] md:text-xl mb-4 '>
              Strategy That Sets the Stage
            </p>
            <p className='mb-8 text-xs  text-gray-500 md:text-sm '>
              With a clear understanding of your brand, we craft a strategy that
              feels like magic. A roadmap that positions your brand to stand
              out, resonate, and engage. We set the stage for greatness.{' '}
            </p>
          </div>
          <div className='flex justify-end'>
            <img
              src={S2}
              alt='startup template'
              className=' w-60 rounded-lg object-fit h-auto '
            />
          </div>
        </div>
      )
    }
  ]
  return (
    <>
      <section className='py-10 relative flex flex-col justify-center  items-center  '>
        <div className='max-w-6xl bg-transparent backdrop-blur-lg'>
          <Timeline data={data} />
        </div>
      </section>
    </>
  )
}

export default Process
