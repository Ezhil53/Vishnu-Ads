import React, { useState } from 'react'
import Logo from '../assets/images/vishnu_ads_logo.png'
import { LuAlignJustify } from 'react-icons/lu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=' md:w-[80%] w-full backdrop-blur-lg border-2 shadow-lg z-50  md:my-4 md:rounded-xl  fixed md:top-3 md:left-[10%] '>
      
      <div className='max-w-7xl mx-auto px-6 py-3 grid grid-cols-4 '>
        <div className='w-100 h-10 '>
          <img src={Logo} alt='logo' className='w-ful h-full object-cover' />
        </div>

        <div className='col-span-2 flex items-center justify-center'>
          <div className='md:hidden flex items-center justify-end w-full '>
            <button
              aria-label='Toggle menu'
              onClick={() => setIsOpen(!isOpen)}
              className='text-black focus:outline-none'
            >
              {isOpen ? (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <LuAlignJustify />
              )}
            </button>
          </div>

          {/* Menu */}
          <ul
            className={`
            md:flex md:items-center md:space-x-8 md:max-h-none md:overflow-visible
            absolute md:static top-full left-0 w-full md:w-auto  border-b border-white/30 md:border-none 
            transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 bg-green-50' : 'max-h-0 overflow-hidden'}
          `}
          >
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <li
                key={item}
                className='text-black/70 px-6 py-3 md:p-0 font-semibold hover:text-violet-400 cursor-pointer transition'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center justify-end '>
          <button className='w-fit bg-violet-500 hover:bg-pink-600 transition text-white md:font-semibold py-2 md:px-5 px-2 rounded-lg shadow-md'>
            Get Quote
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
