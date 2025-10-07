import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/vishnu_ads_logo.png'
import { LuAlignJustify } from 'react-icons/lu'
import FlipText  from '../ui/FlipText'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full backdrop-blur-md border-b-2 shadow-lg z-50 fixed'>
      <div className='max-w-7xl mx-auto px-6 py-3 flex items-center justify-between'>
        {/* Row: Logo, Hamburger, Button */}
        <div className='flex items-center w-full justify-between'>
          {/* Logo */}
          <div className='md:h-14 h-8'>
            <img src={Logo} alt='logo' className='w-full h-full object-cover' />
          </div>

          {/* Hamburger Menu (mobile only) */}
          <button
            aria-label='Toggle menu'
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-black focus:outline-none mx-2'
          >
            {isOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <LuAlignJustify className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Menu links (desktop: row, mobile: dropdown) */}
        <ul
          className={`md:flex md:items-center md:space-x-8 backdrop-blur-lg md:max-h-none md:overflow-visible absolute md:static top-full left-0 w-full md:w-auto border-b border-white/30 md:border-none transition-all duration-300 ease-in-out
          ${isOpen ? 'flex flex-col max-h-96  bg-white ' : 'hidden'}`}
        >
          {[
            { name: 'Home', li: '/' },
            { name: 'About', li: '/about' },
            { name: 'Services', li: '/services' },
            { name: 'Contact', li: '/contact' }
          ].map((item, id) => (
            <FlipText
              href={item.li}
              key={id}
              // className='text-black/70 px-6 py-3 md:px-2 md:py-1 rounded-sm font-semibold hover:bg-white/90 hover:text-violet-500  cursor-pointer transition'
            >
              {item.name}
            </FlipText>
          ))}
        </ul>

        {/* <button className="w-fit bg-violet-500 hover:bg-pink-600 transition text-white md:font-semibold py-2 md:px-5 px-2 rounded-lg shadow-md ml-2">
            Get Quote
          </button> */}
      </div>
    </nav>
  )
}

export default Navbar
