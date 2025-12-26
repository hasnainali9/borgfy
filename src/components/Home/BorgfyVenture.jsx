'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import brainIcon from '../../../public/assets/home/BrainIcon.svg'
import upGraphIcon from '../../../public/assets/home/UpGraphIcon.svg'
import targetIcon from '../../../public/assets/home/TargetIcon.svg'
import computerIcon from '../../../public/assets/home/ComputerIcon.svg'
import userIcon from '../../../public/assets/home/UserIcon.svg'
import scaleIcon from '../../../public/assets/home/ScaleIcon.svg'

const ventureStack = [
  { id: 1, icon: brainIcon, title: 'Brainstorm' },
  { id: 2, icon: upGraphIcon, title: 'Operations' },
  { id: 3, icon: targetIcon, title: 'Marketing & Sales' },
  { id: 4, icon: computerIcon, title: 'Product & Engineering' },
  { id: 5, icon: userIcon, title: 'HR & Talent' },
  { id: 6, icon: scaleIcon, title: 'Legal & Compliance' }
]

const BorgfyVenture = () => {
  return (
    <div className='w-full py-10 sm:py-20 bg-gradient-to-br from-[#0049DA] to-[#011F5C] text-white'>
      <div className='custom-container text-center'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='text-3xl md:text-5xl font-light'
        >
          <span className='italic font-[Times_New_Roman]'>
            The Borgfy Venture
          </span>{' '}
          Stack
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='mt-4 text-base md:text-lg max-w-4xl mx-auto text-white'
        >
          The world doesn’t need more startups—it needs game-changers. We turn
          ideas from inception to launch.
        </motion.p>

        {/* Icons Grid */}
        <div className='mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-24 md:px-4'>
          {ventureStack.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className='flex flex-col items-center text-center gap-4 cursor-pointer'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4, ease: 'easeInOut' }
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className='w-[80px] h-[80px] md:w-[100px] md:h-[100px]'
                />
              </motion.div>
              <p className='text-lg md:text-[24px] font-normal'>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BorgfyVenture
