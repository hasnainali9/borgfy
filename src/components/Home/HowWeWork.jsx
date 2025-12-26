'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ventureImg from '../../../public/assets/home/ventureStudio.svg'
import technologyImg from '../../../public/assets/home/technologyPartner.svg'
import AnimatedButton from '../Custom/AnimatedButton'
import Stats from './Stats'

const cards = [
  {
    id: 1,
    title: 'Venture Studio',
    description: (
      <span className='font-[400]'>
        We co-found and build companies from{' '}
        <span className='!font-[600]'>zero to launch</span>, working hands-on
        with team to turn ambitious ideas into scalable businesses.
      </span>
    ),
    img: ventureImg
  },
  {
    id: 2,
    title: 'Technology Partner',
    description: (
      <>
        We help ambitious founders launch with innovative{' '}
        <span className='!font-[600]'>
          SaaS, mobile apps, AI, stunning UI/UX
        </span>
        , and expert guidance from MVP to scale.
      </>
    ),
    img: technologyImg
  }
]

// Container variants for staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
}

const HowWeWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const heading = 'How we Work'

  // Split heading for bold text
  const headingSegments = [
    { text: 'How we ', bold: false },
    { text: 'Work', bold: true }
  ]

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 }
    })
  }

  return (
    <motion.div className='bg-[#FFF7EB80] flex flex-col items-center pb-10 sm:pb-20'>
      <motion.div className='custom-container pt-10 sm:pt-20' ref={ref}>
        {/* Heading animation */}
        <h2 className='text-center text-4xl md:text-[52px] text-[#0F1412]'>
          <span className='italic font-[Times_New_Roman]'>
            {'How we '.split('').map((char, i) => (
              <motion.span
                key={`italic-${i}`}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
                variants={letterVariant}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <span className='normal-case'>
            {'Work'.split('').map((char, i) => (
              <motion.span
                key={`normal-${i}`}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                custom={i + 20} // stagger after the first part
                variants={letterVariant}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Cards container animation */}
        <motion.div
          className='mt-8 flex flex-col md:flex-row  bg-white border-[1px] border-[#0F14121A] rounded-xl p-4 md:p-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((item, index) => {
            const [isHovered, setIsHovered] = useState(false)

            return (
              <div key={item.id} className='flex flex-col md:flex-row w-full'>
                <motion.div
                  className={`flex flex-col justify-start gap-6 p-6 md:p-8 cursor-pointer w-full`}
                  variants={cardVariants}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{
                    scale: 1.05, // keep scaling
                    boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
                    borderRadius: '12px'
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                >
                  {/* Icon */}
                  <motion.div
                    className='w-16 h-16'
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'linear'
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      className='w-full h-full object-contain'
                    />
                  </motion.div>

                  {/* Title */}
                  <p className='text-3xl lg:text-[40px] text-[#2A2A28] font-[400]'>
                    {item.title}
                  </p>

                  {/* Description */}
                  <p className='text-[20px] text-[#2A2A28] sm:leading-[36px]'>
                    {item.description}
                  </p>
                </motion.div>

                {/* Divider between cards, only for desktop */}
                {index === 0 && (
                  <div className='hidden md:block w-px bg-[#0F14121A] mx-4'></div>
                )}
              </div>
            )
          })}
        </motion.div>
      </motion.div>
      <Stats />
    </motion.div>
  )
}

export default HowWeWork
