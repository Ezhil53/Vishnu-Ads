import React from 'react'
import Logo from '../assets/images/vishnu_ads_logo.png'
import { FaLinkedin,FaInstagram, FaFacebookSquare, FaPinterestSquare, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { LuMapPin, LuPhone, LuMail } from 'react-icons/lu'


const Footer = () => {
  return (
    <>
      <footer className='p-10 md:p-20 md:pb-10 '>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
          <div className='logo-nav px-5'>
            <div className='w-60 h-auto mb-5'>
              <img
                src={Logo}
                alt='VA logo'
                className=' w-full h-auto object-cover'
              />
            </div>
            <p className='text-gray-600 text-md text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              optio asperiores nulla dolores libero neque quos repellendus quasi
              voluptate non?
            </p>
          </div>

          <div className='address-nav text-gray-600 flex justify-center  items-center'>
            <div className="md:grid grid-cols-3 flex md:gap-7 gap-4 px-5 ">
              <a href="#" className='hover:text-pink-400 hover:scale-125 duration-300'> <FaInstagram size={34}/></a>  
              <a href="#" className='hover:text-blue-700 hover:scale-125 duration-300'> <FaFacebookSquare size={34} /> </a> 
              <a href="#" className='hover:text-red-600 hover:scale-125 duration-300'> <FaYoutube size={36}/></a>  
              <a href="#" className='hover:text-red-500 hover:scale-125 duration-300'> <FaPinterestSquare size={34}/> </a> 
              <a href="#" className='hover:text-black hover:scale-125 duration-300'> <FaXTwitter size={30}/></a> 
              <a href="#" className='hover:text-blue-500 hover:scale-125 duration-300'> <FaLinkedin size={34}/></a>  
              
              
            </div>
          </div>

          <div className='link-nav flex flex-col px-5  '>
            <h1 className='text-xl text-gray-700 font-semibold underline mb-5'>
              Reach us
            </h1>
            <ul className='text-gray-600 text-sm gap-3 flex flex-col'>
              <li className='flex items-center gap-3'>
              <span className='border-2 border-gray-400 bg-white/50  rounded-full p-2'> <LuMapPin size={20} /></span> 
              <a href="#" target='__blank' className='hover:underline'>  5th floor,David Tower, Ashoknagar main Road, Kodambakkam,
                Chennai, Tamil Nadu 600024 </a>
              </li>
              <li className='flex items-center gap-3'>
               <span className='border-2 border-gray-400 bg-white/50  rounded-full p-2'><LuPhone size={18} /></span> <a href="#" className='hover:underline' target='__blank' > +91 85318 18181</a>
              </li>
              <li className='flex items-center gap-3'>
              <span className='border-2 border-gray-400 bg-white/50  rounded-full p-2'> <LuMail size={18}  /></span>  <a href="#" className='hover:underline' target='__blank' > contact@vishnuads.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b-2 my-5"></div>
        <h1 className='text-center mt-5 text-sm text-gray-400'>©2025 Vishnu Ads And Ventures Pvt Ltd.  All rights reserved. Made with 💖 </h1>
       
      </footer>
    </>
  )
}

export default Footer
