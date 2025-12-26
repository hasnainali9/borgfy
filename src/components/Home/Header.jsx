'use client'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import underlineImg from '../../../public/assets/home/underline.svg'
import heroImg from '../../../public/assets/videos/heroImg.jpg'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import LetsBuildModal from '../Modals/LetsBuildModal'

const Header = () => {
  const containerRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // 🔑 modal state
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  // Wait for page to fully load before triggering animations
  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setIsMounted(true)
    } else {
      // Wait for window load event (all resources loaded)
      const handleLoad = () => setIsMounted(true)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoother animation
      }
    })
  }

  const paragraphSegments = [
    { text: 'Big thinking, Bold venture building', bold: true },
    { text: '—shaping ', bold: false },
    { text: 'visionary ideas', bold: true },
    { text: ' with great people, using ', bold: false },
    { text: 'tech', bold: true },
    { text: ' and emotions as the core for a ', bold: false },
    { text: 'better tomorrow', bold: true },
    { text: '.', bold: false }
  ]

  return (
    <div
      ref={containerRef}
      className='mt-20 sm:mt-24 md:mt-28 lg:mt-[111.64px] flex flex-col lg:flex-row justify-between lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 custom-container px-4 sm:px-6 lg:px-8'
    >
      {/* Left content */}
      <div className='space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-[64px] flex-1'>
        {/* Title */}
        <h2 className='text-[#2A2A28] text-5xl lg:text-[56px] xl:text-[64px] font-normal leading-tight sm:leading-tighter md:leading-[1.1] flex flex-col gap-1 sm:gap-2'>
          <span className='flex flex-wrap'>
            {"We Don't Just".split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariant}
                initial='hidden'
                animate={isMounted ? 'visible' : 'hidden'}
                custom={i}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <span className='flex flex-wrap'>
            {'Build Startups.'.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariant}
                initial='hidden'
                animate={isMounted ? 'visible' : 'hidden'}
                custom={i + 13}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </h2>

        {/* Subheading + paragraph */}
        <div className='max-w-xl space-y-4 sm:space-y-5 md:space-y-6'>
          <motion.h3
            initial={{ opacity: 1, x: 0 }}
            animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='font-normal text-[#2A2A28] text-3xl lg:text-[34px] xl:text-[38px] relative inline-block leading-tight'
          >
            We Build{' '}
            <span className='font-medium relative inline-block z-10'>
              Visionary Ones.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isMounted ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='absolute left-0 bottom-0 sm:bottom-[2px] md:bottom-[4px] w-full h-[6px] sm:h-[7px] md:h-[8px] origin-left -z-10'
              >
                <Image
                  src={underlineImg}
                  alt='underline'
                  className='w-full h-full object-cover'
                />
              </motion.span>
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className='text-base sm:text-lg md:text-xl lg:text-[20px] leading-relaxed sm:leading-[1.7] md:leading-[1.8] text-[#2A2A28]'
          >
            {paragraphSegments.map((seg, i) => (
              <span
                key={i}
                className={
                  seg.bold ? 'font-semibold text-[#2A2A28]' : 'font-normal'
                }
              >
                {seg.text}
              </span>
            ))}
          </motion.p>
        </div>

        {/* Button */}
        <motion.button
          onClick={handleClick}
          className='group relative w-[160px] sm:w-[180px] md:w-[187px] h-[44px] sm:h-[46px] md:h-[48px] pl-1 pr-1 py-1 bg-[#0049DA] rounded-full flex justify-between items-center overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30'
          initial={{ opacity: 1, y: 0 }}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label='Open contact form'
        >
          <motion.span
            className='pl-3 sm:pl-4 font-normal leading-tight text-base sm:text-lg md:text-[20px] text-white'
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Let's Build It
          </motion.span>
          <motion.div
            className='w-8 h-8 sm:w-9 sm:h-9 rounded-full flex justify-center items-center bg-white'
            whileHover={{ x: 5, scale: 1.1, rotate: 45 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <ArrowRight size={18} className='sm:w-5 sm:h-5 text-black' />
          </motion.div>
        </motion.button>
      </div>

      {/* Right media */}
      <div className='relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[600px] xl:h-[650px] w-full lg:w-[500px] xl:w-[600px] 2xl:w-[620px] rounded-xl sm:rounded-2xl lg:rounded-[20px] overflow-hidden shadow-2xl flex-shrink-0'>
        {!isMounted ? (
          // SSR-safe static image
          <Image
            src={heroImg}
            alt='Hero background'
            className='w-full h-full object-cover'
            priority
            quality={85}
            placeholder='blur'
          />
        ) : (
          <>
            {/* Show image while video loads */}
            {!videoLoaded && (
              <Image
                src={heroImg}
                alt='Hero fallback'
                className='absolute inset-0 w-full h-full object-cover'
                priority
                quality={85}
                placeholder='blur'
              />
            )}

            {/* Video with smooth transition */}
            <video
              preload='metadata'
              src='/assets/videos/heroVideo.mp4'
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 scale-120 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transform: 'scale(1.05)' }}
            />
          </>
        )}
      </div>

      {/* Modal */}
      {showModal && <LetsBuildModal onClose={handleClose} />}
    </div>
  )
}

export default Header

