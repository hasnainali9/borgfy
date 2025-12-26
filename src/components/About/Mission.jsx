'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import targetIcon from '../../../public/assets/about/icons/target.svg'
import rocketIcon from '../../../public/assets/about/icons/rocket.svg'
import plantIcon from '../../../public/assets/about/icons/plant.svg'

const missions = [
  {
    id: 1,
    icon: targetIcon,
    title: 'What We Solve',
    desc: 'Real human and market needs.'
  },
  {
    id: 2,
    icon: rocketIcon,
    title: 'What We Build',
    desc: 'Scalable, revenue-generating or employment-creating ventures.'
  },
  {
    id: 3,
    icon: plantIcon,
    title: 'What We Deliver',
    desc: 'Sustainable growth and real-world impact.'
  }
]

const Mission = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start gap-10 xl:gap-14 px-4 sm:px-6 lg:px-0 lg:pr-6 xl:pr-[8%] 2xl:pr-0 2xl:max-w-[1280px] 2xl:mx-auto pb-12 lg:pb-20 mt-6 lg:mt-0'>
      {/* image - static, no motion for responsiveness */}
      <div className='w-full lg:max-w-[500px] h-[400px] sm:h-[450px] md:h-[500px] xl:max-w-[504px] xl:h-[533px]'>
        <video
          src={'/assets/about/videos/missionVideo.mp4'}
          muted
          loop
          autoPlay
          playsInline
          preload='auto'
          className={`w-full h-full object-cover rounded-2xl lg:rounded-tl-none lg:rounded-bl-none`}
        />
      </div>

      {/* content */}
      <div className='w-full lg:w-[60%] flex flex-col items-center lg:items-start justify-center'>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-[40px] lg:text-[52px] italic font-['Times_New_Roman'] text-[#080705] mb-4"
        >
          Mission
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className='h-[1px] bg-[#DFDFDF] w-[100px] sm:w-[130px] mb-6 origin-left'
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-[#080705] text-base sm:text-lg leading-[28px] sm:leading-[32px] md:leading-[36px] mb-8 sm:mb-10 text-center font-[var(--font-switzer)]'
          style={{ fontWeight: '100!important' }}
        >
          We build ventures that solve real problems, generate business, and
          create jobs.
        </motion.p>

        {/* cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 w-full'>
          {missions.map((item, i) => {
            let animation = {
              hidden: { opacity: 0, rotateY: 90 },
              visible: {
                opacity: 1,
                rotateY: 0,
                transition: { duration: 0.7, delay: 0.2 }
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
      </div>
    </div>
  )
}

export default Mission
