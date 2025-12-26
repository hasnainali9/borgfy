'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ideaIcon from '../../../public/assets/about/icons/ideaBulb.svg'
import compassIcon from '../../../public/assets/about/icons/compass.svg'
import flagIcon from '../../../public/assets/about/icons/flag.svg'

const visions = [
  {
    id: 1,
    icon: ideaIcon,
    title: 'Why It Matters',
    desc: 'Aligned with real human needs and meaningful values. Every product starts with purpose.'
  },
  {
    id: 2,
    icon: compassIcon,
    title: 'How It Feels',
    desc: 'Intuitive, engaging, and psychologically designed to influence and retain users.'
  },
  {
    id: 3,
    icon: flagIcon,
    title: 'Where It Goes',
    desc: 'Market-ready, profitable, scalable — and capable of creating jobs and long-term business value.'
  }
]

const Vision = () => {
  return (
    <div className='flex flex-col lg:flex-row items-start gap-10 xl:gap-14 px-4 sm:px-6 lg:px-0 lg:pl-6 xl:pl-[8%] 2xl:pl-0 2xl:pr-0 2xl:max-w-[1280px] 2xl:mx-auto pt-12 pb-8 lg:py-20'>
      {/* content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='w-full lg:w-[60%] flex flex-col items-center lg:items-start justify-center'
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-[40px] lg:text-[52px] italic font-['Times_New_Roman'] text-[#080705] mb-4"
        >
          Vision
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className='h-[1px] bg-[#DFDFDF] w-[100px] sm:w-[130px] mb-6 origin-left'
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className='text-[#080705] text-base sm:text-lg leading-[28px] sm:leading-[32px] md:leading-[36px] mb-8 sm:mb-10 text-center font-[var(--font-switzer)]'
          style={{ fontWeight: '100!important' }}
        >
          We envision a future where every venture we build is
        </motion.p>

        {/* Vision cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 w-full'>
          {visions.map((item, i) => {
            let animation = {}

            if (i === 0) {
              // flip animation
              animation = {
                hidden: { opacity: 0, rotateY: 90 },
                visible: {
                  opacity: 1,
                  rotateY: 0,
                  transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
                }
              }
            } else if (i === 1) {
              // bounce scale
              animation = {
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.4
                  }
                }
              }
            } else if (i === 2) {
              // spring from bottom
              animation = {
                hidden: { opacity: 0, y: 80 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 12,
                    delay: 0.6
                  }
                }
              }
            }

            return (
              <motion.div
                key={item.id}
                variants={animation}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='text-center sm:text-left'
              >
                <motion.img
                  src={item.icon.src}
                  alt={item.title}
                  className='mx-auto sm:mx-0 mb-3 sm:mb-4 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]'
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                  }}
                />
                <h3 className='font-normal leading-[28px] sm:leading-[32px] xl:leading-[36px] text-lg sm:text-xl xl:text-[24px] text-[#080705] mb-1 sm:mb-2'>
                  {item.title}
                </h3>
                <span className='text-sm sm:text-base font-light leading-[20px] sm:leading-[24px] text-[#6B6A69]'>
                  {item.desc}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* image */}
      <motion.div className='w-full lg:max-w-[500px] h-[400px] sm:h-[450px] md:h-[500px] xl:max-w-[504px] xl:h-[533px]'>
        <video
          src={'/assets/about/videos/visionVideo.mp4'}
          muted
          loop
          autoPlay
          playsInline
          preload='auto'
          className={`w-full h-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-none`}
        />
      </motion.div>
    </div>
  )
}

export default Vision
