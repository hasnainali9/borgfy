'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import icon from '../../../public/assets/home/quoteIcon.svg'

const Quote = ({ quote, author, serial }) => {
  const [ready, setReady] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  // Video source based on serial
  const videoSrc =
    serial === 1
      ? '/assets/videos/quote1.mp4'
      : serial === 2
      ? '/assets/videos/quote2.mp4'
      : '/assets/videos/quote3.mp4'

  // Poster image (first frame)
  const posterSrc =
    serial === 1
      ? '/assets/videos/quote1-frame.png'
      : serial === 2
      ? '/assets/videos/quote2-frame.png'
      : '/assets/videos/quote3-frame.png'

  return (
    <div
      className='w-full sm:h-[200px] py-10 relative flex justify-center items-center overflow-hidden'
      ref={containerRef}
    >
      {/* Video is ALWAYS mounted (prevents reloads) */}
      {(!videoError || isInView) && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700`}
          src={videoSrc}
          loop
          muted
          autoPlay
          playsInline
          preload='metadata'
          onCanPlay={() => setReady(true)} // only once, keeps video alive
          onError={() => {
            setVideoError(true)
          }}
        />
      )}

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-black/60 sm:bg-transparent  ${
          serial === 2 && 'bg-black/60'
        }`}
      ></div>

      {/* Content */}
      <div className='custom-container flex items-start sm:items-center gap-4 sm:gap-6 lg:gap-[56px] relative z-10 w-full'>
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='w-[30px] h-[30px] sm:w-[80px] sm:h-[80px] aspect-square bg-[#EEEEEE] rounded-full p-2 shadow flex justify-center items-center'
        >
          <div className='w-full h-full flex items-center justify-center sm:p-3 sm:border-[0.5px] sm:border-[#171717] bg-[#EEEEEE] rounded-full'>
            <img
              src={icon.src}
              alt='Quote Icon'
              className='w-[12px] sm:w-[30px] sm:h-[24px]'
            />
          </div>
        </motion.div>

        {/* Quote text */}
        <motion.div
          className='text-white flex flex-col justify-start'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className='text-[14px] sm:text-[20px] md:text-[24px] font-normal md:leading-[40px]'>
            {quote}
          </h3>
          <p className='text-xs sm:text-sm italic mt-2'>- {author}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Quote
