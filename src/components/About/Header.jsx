'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import rightBg from '../../../public/assets/about/aboutHero.png'

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut', delay }
  })
}

const Header = () => {
  return (
    <div className='relative flex justify-between items-center h-[80vh] sm:h-[766px] overflow-hidden'>
      {/* Left block (static, no animation) */}
      <div className='w-[25%] h-full bg-black' />

      {/* Right image container (static, no animation) */}
      <div className='relative w-[75%] h-full overflow-hidden'>
        <Image
          src={rightBg}
          alt='about-us'
          fill
          priority
          className='object-cover object-left-top scale-115 -translate-y-2'
        />
        {/* Static gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black to-black/10' />
      </div>

      {/* Content at bottom with animations */}
      <div className='absolute bottom-20 w-full z-20'>
        <div className='custom-container text-left'>
          <motion.h1
            variants={textVariants}
            initial='hidden'
            animate='visible'
            custom={0.2}
            className='text-4xl md:text-[68px] font-[400] md:leading-[80px] text-white'
          >
            Startups aren’t enough —
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial='hidden'
            animate='visible'
            custom={0.5}
            className='text-4xl md:text-[68px] font-[400] md:leading-[80px] text-white font-[Times_New_Roman] italic'
          >
            we craft ventures with purpose.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Header
