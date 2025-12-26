'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import bg from '../../../public/assets/contact/headerbg.jpg'

const Header = () => {
  return (
    <section className='relative w-full h-[80vh] md:h-[766px] flex items-center justify-start overflow-hidden'>
      {/* Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='absolute inset-0'
      >
        <Image
          src={bg}
          alt='Contact Header Background'
          fill
          priority
          className='object-cover object-center'
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='absolute inset-0 bg-black'
      />

      {/* Content */}
      <div className='relative z-10 text-start px-4 max-w-[1320px] mx-auto top-24 sm:top-0'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className='text-white text-4xl md:text-[60px] xl:text-[64px] font-normal md:leading-[72px]'
        >
          Let’s Build the Future’s Billion-Dollar Ventures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
          className='text-white text-[24px] md:text-[38px] max-w-2xl text-start leading-[100%] font-[Times_New_Roman] italic mt-6'
        >
          Together, With Purpose, Not Just Profit.
        </motion.p>
      </div>
    </section>
  )
}

export default Header
