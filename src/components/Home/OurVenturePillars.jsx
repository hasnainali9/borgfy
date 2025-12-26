'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import pillar4Img from '../../../public/assets/videos/pillarImg4.jpg'

const pillars = [
  {
    id: 1,
    title: 'Tech-Driven',
    description: 'Future-proof, scalable, and built for efficiency.'
  },
  {
    id: 2,
    title: 'Philosophically Rooted',
    description: 'Designed with deep insights into human behavior.'
  },
  {
    id: 3,
    title: 'Economically Viable',
    description: 'Profitable, sustainable, and market-driven.'
  },
  {
    id: 4,
    title: 'Psychology-Centric',
    description: 'Built to influence, engage, and retain users.'
  }
]

const videos = [
  '/assets/videos/pillar1.mp4',
  '/assets/videos/pillar2.mp4',
  '/assets/videos/pillar3.mp4',
  null // last one will be an image
]

const placeholders = [null, null, null, pillar4Img]

const OurVenturePillars = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <div className='w-full py-10 sm:py-20 bg-[#FFFBF5]'>
      <div className='custom-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden xl:!ml-[160px] 2xl:!ml-auto 2xl:!mx-auto'>
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex flex-col gap-4 md:gap-10 sm:w-[90%]'
        >
          <h2 className='text-3xl md:text-[52px] font-normal text-[#0F1412]'>
            Our Venture’s{' '}
            <span className='italic font-[Times_New_Roman]'>Pillars</span>
          </h2>
          <p className='text-[#292e2cb2] text-lg leading-relaxed font-[300]'>
            Before we bring an idea to life, we first align with the fundamental
            truths that give it purpose.
          </p>

          <div className='flex flex-col'>
            {pillars.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut'
                }}
                className='py-4 border-b border-[#bec0c071] space-y-[8px]'
              >
                <h4 className='text-[24px] font-normal sm:leading-[36px] text-[#0F1412]'>
                  {item.title}
                </h4>
                <p className='text-[16px] font-[300] text-[#292e2cb2]'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - VIDEOS GRID */}
        <motion.div
          ref={containerRef}
          className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-5 w-full justify-center'
        >
          {videos.map((vid, index) => {
            const isLast = index === videos.length - 1
            const placeholder = placeholders[index]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeOut'
                }}
                className='relative aspect-[3/4] w-full lg:w-[275px] lg:h-[320px] overflow-hidden rounded-[20px]'
              >
                {!isLast && (
                  <div className='absolute inset-0 w-full h-full overflow-hidden'>
                    <video
                      src={vid}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload='metadata'
                      className='w-full h-[105%] object-cover absolute top-0'
                    />
                  </div>
                )}

                {isLast && placeholder && (
                  <motion.img
                    src={placeholder.src}
                    alt='pillar'
                    className='absolute inset-0 w-full h-full object-cover'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default OurVenturePillars
