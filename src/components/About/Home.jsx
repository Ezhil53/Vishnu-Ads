import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const cardsVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.7 } }
};

const Home = () => {
  return (
    <>
     <section
      className="relative py-16 md:py-24 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-violet-200/20 via-violet-100/40 to-blue-100/20"
    >
      {/* Glassmorphism Card */}
      <motion.div
        className="max-w-3xl mx-auto w-full px-6 md:px-12 glass-card rounded-xl shadow-xl backdrop-blur-md bg-white/30 border border-white/20"
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 py-10">
          {/* Company Image/Logo */}
          <motion.img
            src="https://images.unsplash.com/photo-1556740759-340e6752fabb?auto=format&fit=facearea&w=256&q=80"
            alt="Company Logo"
            className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full border-2 border-white/40 shadow"
            variants={cardsVariants}
            initial="hidden"
            animate="visible"
          />

          {/* About Content */}
          <div className="flex flex-col gap-3 md:gap-5">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-violet-800 drop-shadow"
              variants={cardsVariants}
              initial="hidden"
              animate="visible"
            >
              Empowering Your Growth
            </motion.h2>
            <motion.p
              className="text-md md:text-lg text-black/70 font-medium"
              variants={cardsVariants}
              initial="hidden"
              animate="visible"
            >
              We deliver innovative business setup, branding, digital marketing, event management, channel broadcasting, and global distribution solutions. Our blend of strategy, creativity, and technology ensures your brand stands out in a fast-moving world.
            </motion.p>
            {/* Company values or highlights */}
            <motion.ul
              className="mt-3 space-y-2"
              variants={cardsVariants}
              initial="hidden"
              animate="visible"
            >
              <li className="flex items-center gap-2 text-violet-700 font-semibold">
                <span className="inline-block w-2 h-2 bg-violet-400 rounded-full" /> Business Setup & Strategy
              </li>
              <li className="flex items-center gap-2 text-blue-700 font-semibold">
                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full" /> Branding & Design
              </li>
              <li className="flex items-center gap-2 text-teal-700 font-semibold">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full" /> Digital Marketing & Advertising
              </li>
              <li className="flex items-center gap-2 text-rose-700 font-semibold">
                <span className="inline-block w-2 h-2 bg-rose-400 rounded-full" /> Event & Media Promotion
              </li>
              <li className="flex items-center gap-2 text-orange-700 font-semibold">
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full" /> Website & App Development
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  )
}

export default Home
