'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import arrowIcon from '../../../public/assets/home/ArrowRightIcon.svg'
import brainIcon from '../../../public/assets/home/BrainIcon2.svg'
import buildIcon from '../../../public/assets/home/ToolsIcon.svg'
import rocketIcon from '../../../public/assets/home/RocketIcon.svg'

const steps = [
  {
    id: 1,
    title: 'Brainstorm',
    description: 'The spark of an idea, the sleepless nights, the first pitch.',
    icon: brainIcon
  },
  {
    id: 2,
    title: 'Build',
    description: 'The grind—coding, marketing, failing, and trying again.',
    icon: buildIcon
  },
  {
    id: 3,
    title: 'Scale',
    description:
      'The breakthrough moment, the first customers, the unstoppable momentum',
    icon: rocketIcon
  }
]

// Card variants
const cardVariants = {
  initial: { scale: 1, backgroundColor: '#202121' },
  hover: {
    scale: 1.03,
    backgroundColor: '#2A2B2B',
    transition: { duration: 0.3 }
  }
}

// Arrow circle (background)
const arrowVariants = {
  initial: { scale: 1, backgroundColor: '#202121' },
  hover: {
    scale: 1.1,
    backgroundColor: '#ffffff', // circle becomes white
    transition: { duration: 0.3 }
  }
}

// Arrow icon color (SVG filter trick)
const arrowIconVariants = {
  initial: { filter: 'invert(1)' }, // white
  hover: {
    filter:
      'brightness(0) saturate(100%) invert(22%) sepia(99%) saturate(3767%) hue-rotate(213deg) brightness(97%) contrast(107%)' // #0049DA
  }
}

// Step icon animation
const stepIconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: 10,
    transition: { type: 'spring', stiffness: 300, damping: 10 }
  }
}

const WayBuildVentures = () => {
  return (
    <div className='w-full bg-[#0D0E0E] text-white py-10 sm:py-20'>
      <div className='custom-container flex flex-col items-center gap-6 sm:gap-10'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className='text-3xl md:text-[52px] font-light text-center'
        >
          The Way We{' '}
          <span className='italic font-normal font-[Times_New_Roman]'>
            Build Ventures
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-[#ffffffb2] text-center max-w-5xl'
        >
          The world doesn’t need more startups—it needs game-changers. We turn
          ideas into revolutions.
        </motion.p>

        {/* Steps */}
        <div className='relative flex flex-col md:flex-row items-stretch justify-center gap-4 lg:gap-6 lg:mt-8 w-full'>
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1

            return (
              <motion.div
                key={step.id}
                className='relative flex items-center w-full'
                initial='initial'
                whileHover='hover'
              >
                {/* Card */}
                <motion.div
                  variants={cardVariants}
                  className='rounded-xl px-6 lg:px-[40px] py-[32px] flex-1 flex flex-col gap-4 lg:justify-between md:h-[250px] lg:h-full cursor-pointer'
                >
                  <div className='flex justify-between items-start'>
                    {/* Title */}
                    <motion.h3 className='text-[24px] font-normal'>
                      {step.title}
                    </motion.h3>

                    {/* Step Icon */}
                    <motion.div variants={stepIconVariants}>
                      <Image
                        src={step.icon}
                        alt={step.title}
                        className='w-[40px] h-[40px]'
                      />
                    </motion.div>
                  </div>

                  <p className='text-[16px] text-[#E3E3E3] mt-6 leading-relaxed'>
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow Connector */}
                {!isLast && (
                  <div className='hidden lg:flex absolute right-[-36px] top-1/2 -translate-y-1/2 z-10 bg-[#0D0E0E] rounded-full p-2'>
                    <motion.div
                      variants={arrowVariants}
                      className='w-[36px] h-[36px] rounded-full flex items-center justify-center'
                    >
                      <motion.div variants={arrowIconVariants}>
                        <Image src={arrowIcon} alt='Next' className='w-5 h-5' />
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WayBuildVentures
