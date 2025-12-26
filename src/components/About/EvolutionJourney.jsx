'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import impactInActionBg from '../../../public/assets/about/journeybg1.png'
import serviceToVenturesBg from '../../../public/assets/about/journeybg2.png'
import theBeginningBg from '../../../public/assets/about/journeybg3.png'
import Stats from '../Home/Stats'

const evolutions = [
  {
    id: 1,
    bg: impactInActionBg,
    title: 'Today',
    subTitle1: 'Impact in',
    subTitle2: 'Action',
    initialText: 'Launched 3+ startups across diverse verticals',
    desc: 'Launched 3+ startups across diverse verticals and empowered 40+ clients with tailored tech and product solutions.'
  },
  {
    id: 2,
    bg: serviceToVenturesBg,
    title: '2024',
    subTitle1: 'From Services to',
    subTitle2: 'Ventures',
    initialText: 'From Services to Ventures studio',
    desc: 'Evolved into a venture builder — crafting high-impact products and startups from the ground up.'
  },
  {
    id: 3,
    bg: theBeginningBg,
    title: '2021',
    subTitle1: 'The',
    subTitle2: 'Beginning',
    initialText: 'The Beginning',
    desc: 'Started as a tech software house, delivering innovative solutions across web, mobile, and AI.'
  }
]

const EvolutionJourney = () => {
  const [active, setActive] = useState(2)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div className='bg-[#FFFBF5] sm:h-full py-12 md:py-20'>
      <div className='custom-container flex flex-col items-center'>
        {/* Heading */}
        <h2 className='font-normal text-3xl md:text-[52px] md:leading-[100%] text-[#0F1412] text-center mb-16'>
          Evolution{' '}
          <span className='font-[Times_New_Roman] italic'>Journey</span>
        </h2>

        {/* Cards */}
        <div className='flex flex-col md:flex-row w-full h-[422px]'>
          {evolutions.map(item => {
            const isActive = active === item.id
            return (
              <motion.div
                key={item.id}
                onClick={() => setActive(item.id)}
                {...(!isMobile && { onMouseEnter: () => setActive(item.id) })}
                animate={{ flex: active === item.id ? 5 : 3 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className='relative flex items-center justify-start cursor-pointer'
              >
                {/* Border + Wrapper */}
                <div
                  className={`w-full h-full overflow-hidden
    ${isActive ? 'border-none' : 'border border-[#0049DA]'}
    ${
      item.id === 1
        ? 'border border-[#0049DA] sm:last:border-r-[#FFFBF5] sm:border-y-1'
        : item.id === 3
        ? 'border border-[#0049DA] sm:first:border-l-[#FFFBF5] sm:border-y-1'
        : 'border border-[#0049DA] border-y-0 sm:border-y-1'
    }`}
                >
                  <div className='relative w-full h-full  overflow-hidden bg-[#FFFBF5]'>
                    {/* Only show gradient + image if active */}
                    {isActive && (
                      <>
                        {/* Gradient Overlay */}
                        <motion.div
                          className='absolute inset-0'
                          animate={{
                            background:
                              'linear-gradient(to bottom, #080705, #083EA0)'
                          }}
                          transition={{ duration: 0.6 }}
                        />

                        {/* Image */}
                        <motion.div
                          className='absolute inset-0'
                          initial={{ x: '0%', y: '0%', scale: 1 }}
                          animate={{ x: '20%', y: '-20%', scale: 1.2 }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                          <Image
                            src={item.bg}
                            alt={item.title}
                            fill
                            className='object-cover opacity-60'
                          />
                        </motion.div>
                      </>
                    )}

                    {/* Content */}
                    <div
                      className={`relative z-10 p-6 max-w-md sm:top-1/6 ${
                        isActive
                          ? 'text-[#FFFFFF] space-y-10'
                          : 'text-[#080705] space-y-24'
                      }`}
                    >
                      <h3 className='text-3xl lg:text-[52px] font-[700] leading-[100%]'>
                        {item.title}
                      </h3>

                      {isActive ? (
                        <div>
                          <h4 className='text-xl lg:text-[40px] font-[400]'>
                            {item.subTitle1}{' '}
                            <span className='italic font-[Times_New_Roman]'>
                              {item.subTitle2}
                            </span>
                          </h4>
                          <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='mt-4 text-sm md:text-lg font-[400]'
                          >
                            {item.desc}
                          </motion.p>
                        </div>
                      ) : (
                        <p className='mt-2 text-base md:text-[24px] leading-[36px] text-[#080705]'>
                          {item.initialText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className='mt-72 sm:mt-0'>
        <Stats />
      </div>
    </div>
  )
}

export default EvolutionJourney
