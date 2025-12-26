'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import aboutImg from '../../../public/assets/about/aboutSection.svg'

const AboutUs = () => {
  return (
    <div className='relative bg-[#FFFBF5] py-14 md:py-24 overflow-hidden'>
      <div className='custom-container space-y-10 md:space-y-16'>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12'
        >
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='text-2xl sm:text-3xl md:text-[52px] leading-tight tracking-[-1px] text-[#080705] font-semibold'
          >
            ABOUT US
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className='text-[#302D2B] text-base sm:text-lg md:text-xl leading-relaxed md:leading-[36px] font-normal w-full lg:max-w-[735px]'
          >
            At Borgfy, we believe the future belongs to products that bring
            peace of mind, happiness, and a sense of relaxation to people’s
            lives. We don’t just build startups — we create solutions for deep
            human pain points, ensuring every venture we launch adds value to
            life, creates opportunities, and makes the world better.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='relative w-full h-[260px] sm:h-[360px] md:h-[480px] rounded-2xl overflow-hidden'
        >
          <Image
            src={aboutImg}
            alt='About us'
            fill
            className='object-cover'
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUs
