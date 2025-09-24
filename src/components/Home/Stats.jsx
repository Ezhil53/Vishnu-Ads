import React from 'react'
import { GrUserExpert, GrServices } from 'react-icons/gr'
import { AiOutlineStock } from 'react-icons/ai'
import CountUp from '../ui/CountUp'

const Stats = () => {
  return (
    <>
    
      <section className=' relative text-gray-900    py-15 px-20 w-full overflow-hidden '>
        <div className='absolute mt-25 -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6'>
          <div
            className='w-full h-20 max-w-4xl mx-auto rounded-3xl opacity-30 blur-lg filter'
            style={{
              background:
                'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
            }}
          />
        </div>
        <div className='  grid md:grid-cols-3 grid-cols-1   p-1  rounded-lg text-lg font-bold md:max-w-4xl mx-auto '>
          <div className='experience grid grid-cols-2  text-center p-5'>
            <div>
              <CountUp
                from={0}
                to={19}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text text-4xl'
              />
              +<p className='text-gray-800'>Experience</p>
            </div>
            <div className='flex justify-center items-center md:border-r-2 border-black/40 border-dashed text-black/90'>
              <AiOutlineStock size={40} />
            </div>
          </div>
          <div className='service grid grid-cols-2 text-center p-5'>
            <div>
              <CountUp
                from={0}
                to={10}
                separator=','
                direction='up'
                duration={1}
                className='count-up-text text-4xl'
              />
              +<p className='text-gray-800'>Services</p>
            </div>
            <div className='flex justify-center items-center md:border-r-2 border-dashed border-black/40 text-black/90'>
              <GrServices size={36} />
            </div>
          </div>

          <div className='clients grid grid-cols-2 text-center p-5'>
            <div>
              <CountUp
                from={0}
                to={100}
                separator=','
                direction='up'
                duration={2}
                className='count-up-text text-4xl'
              />
              +<p className='text-gray-800'>Customers</p>
            </div>
            <div className='flex justify-center items-center text-black/90'>
              <GrUserExpert size={30} />
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Stats
