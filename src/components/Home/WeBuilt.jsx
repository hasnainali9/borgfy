'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import waynnaBg from '../../../public/assets/home/companies/waynnaBg.webp'
import jobsBg from '../../../public/assets/home/companies/jobsBg.webp'
import preneurBayBg from '../../../public/assets/home/companies/preneurBayBg.webp'
import religionTechBg from '../../../public/assets/home/companies/religionTechBg.webp'

import waynnaLogo from '../../../public/assets/home/companies/waynna.svg'
import jobsLogo from '../../../public/assets/home/companies/jobs.webp'
import preneurLogo from '../../../public/assets/home/companies/preneurBay.svg'
import religionTechLogo from '../../../public/assets/home/companies/religionTech.svg'

const companies = [
  {
    id: 1,
    name: 'Scowter',
    type: 'Recruitment Tech',
    year: '2025',
    logo: jobsLogo,
    bg: jobsBg,
    description: 'Simplifying the Job Hunt and Talent Discovery — Seamlessly.',
    link: 'https://scowter.com/',
  },
  {
    id: 2,
    name: 'PreneurBay',
    type: 'Digital Hospitality',
    year: '2025',
    logo: preneurLogo,
    bg: preneurBayBg,
    description:
      'Preneurbay: Modern co-living workspace for business travelers to live, work, connect, and stay inspired.',
    link: 'https://preneurbay.com/',
  },
  {
    id: 3,
    name: 'Masjid Nearby',
    type: 'Religion Tech',
    year: '2025',
    logo: religionTechLogo,
    bg: religionTechBg,
    description:
      'Masjid Nearby - Find Nearby Masjid & Salah Prayers Time Anywhere Anytime!',
    link: 'https://masjidnearby.in/',
  },
  {
    id: 4,
    name: 'Waynna',
    type: 'Digital Hospitality',
    year: '2025',
    logo: waynnaLogo,
    bg: waynnaBg,
    description:
        'Discover More. Live More. - Explore the most exciting places and experiences on the map—right around you.',
    link: 'https://waynna.com/',
  },
]

const bgVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
}

const cardArrowVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    backgroundColor: '#ffffff',
    color: '#000000'
  },
  hover: {
    scale: 1.1,
    rotate: 320,
    backgroundColor: '#0049DA',
    color: '#ffffff',
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
}

const controlButtonVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    backgroundColor: '#ffffff',
    color: '#000000',
    borderWidth: 2,
    borderColor: '#080705'
  },
  hover: {
    scale: 1.2,
    rotate: 320,
    backgroundColor: '#0049DA',
    color: '#ffffff',
    borderColor: 'transparent',
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  tap: { scale: 0.95, rotate: -2, transition: { duration: 0.2 } }
}

const WeBuilt = () => {
  const [isMounted, setIsMounted] = useState(false)

  // Embla Carousel with responsive breakpoints
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div
      id='companies'
      className='mx-auto max-w-[1600px] px-4 lg:px-0 py-10 sm:pt-20 sm:pb-12 overflow-hidden'
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className='text-center text-3xl md:text-5xl font-normal'
      >
        <span className='font-[Times_New_Roman] italic'>Companies</span> We've
        Built
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='mt-2 text-base md:text-lg max-w-3xl mx-auto text-center text-gray-600'
      >
        We've Founded and Funded Businesses Coast-to-Coast and Everywhere in
        Between
      </motion.p>

      {/* Slider */}
      <div className='relative mt-6 sm:mt-8 md:mt-10'>
        {!isMounted ? (
          // SSR-safe static grid layout (no JS, no transforms)
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8'>
            {companies.map((company, index) => (
              <div
                key={index}
                className='relative overflow-hidden shadow-lg group flex flex-col justify-end cursor-pointer rounded-lg min-h-[500px] sm:min-h-[520px] md:min-h-[550px]'
                onClick={() => window.open(company.link, '_blank')}
              >
                {/* Background */}
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-110'
                  style={{ backgroundImage: `url(${company.bg.src})` }}
                />

                {/* Tags */}
                <div className='absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-wrap gap-1.5 sm:gap-2 z-20 max-w-[calc(100%-24px)]'>
                  <span className='bg-[#0F1412] border border-white text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-[40px] whitespace-nowrap'>
                    {company.type}
                  </span>
                  <span className='bg-[#0F1412] border border-white text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-[40px]'>
                    {company.year}
                  </span>
                </div>

                {/* Content */}
                <div className='bg-gradient-to-b from-[#33333300] to-[#000000] pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-5 md:pb-6 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col z-20 relative'>
                  <div className='flex justify-between items-center px-3 sm:px-4 md:px-5 mb-2'>
                    <div className='flex justify-start items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0 pr-2'>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        className={`${
                          company.id === 4
                            ? 'w-[35px] sm:w-[45px] md:w-[55px]'
                            : 'w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]'
                        } flex-shrink-0`}
                        quality={75}
                      />
                      <h3 className='md:text-xl lg:text-2xl xl:text-3xl leading-tight font-normal text-white overflow-hidden text-ellipsis flex-1 min-w-0'>
                        {company.name}
                      </h3>

                      {/* Arrow */}
                      <div className='w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] flex-shrink-0 flex items-center justify-center rounded-full bg-white text-black transition-all duration-400 group-hover:bg-[#0049DA] group-hover:text-white group-hover:scale-110'>
                        <ArrowRight className='w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4' />
                      </div>
                    </div>
                  </div>
                  <hr className='border-t border-[#585654] mb-2 sm:mb-3' />
                  <p className='text-[16px] text-gray-200 px-3 sm:px-4 md:px-5 line-clamp-3 leading-relaxed'>
                    {company.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Embla Carousel (after mount)
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 lg:px-8'>
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  className='flex-shrink-0 relative overflow-hidden shadow-lg group flex flex-col justify-end cursor-pointer rounded-lg min-h-[500px] sm:min-h-[520px] md:min-h-[550px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] 2xl:w-[calc(25%-18px)]'
                  initial='initial'
                  whileHover='hover'
                  onClick={() => window.open(company.link, '_blank')}
                >
                  {/* Background */}
                  <motion.div
                    className='absolute inset-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${company.bg.src})` }}
                    variants={bgVariants}
                  />

                  {/* Tags */}
                  <div className='absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-wrap gap-1.5 sm:gap-2 z-20 max-w-[calc(100%-24px)]'>
                    <span className='bg-[#0F1412] border border-white text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-[40px] whitespace-nowrap'>
                      {company.type}
                    </span>
                    <span className='bg-[#0F1412] border border-white text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-[40px]'>
                      {company.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className='bg-gradient-to-b from-[#33333300] to-[#000000] pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-5 md:pb-6 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col z-20 relative'>
                    <div className='flex justify-between items-center px-3 sm:px-4 md:px-5 mb-2'>
                      <div className='flex justify-start items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0 pr-2'>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          className={`${
                            company.id === 4
                              ? 'w-[35px] sm:w-[45px] md:w-[55px]'
                              : 'w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]'
                          } flex-shrink-0`}
                        />
                        <h3 className=' md:text-xl lg:text-2xl xl:text-3xl leading-tight font-normal text-white overflow-hidden text-ellipsis flex-1 min-w-0'>
                          {company.name}
                        </h3>

                        {/* Arrow follows parent hover */}
                        <motion.div
                          className='w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] flex-shrink-0 flex items-center justify-center rounded-full'
                          variants={cardArrowVariants}
                        >
                          <ArrowRight className='w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-current' />
                        </motion.div>
                      </div>
                    </div>
                    <hr className='border-t border-[#585654] mb-2 sm:mb-3' />
                    <p className='text-[16px] text-gray-200 px-3 sm:px-4 md:px-5 line-clamp-3 leading-relaxed'>
                      {company.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        {isMounted && (
          <div className='flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 mb-6 sm:mb-8'>
            <motion.button
              onClick={scrollPrev}
              className='w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] flex items-center justify-center rounded-full cursor-pointer'
              variants={controlButtonVariants}
              initial='initial'
              whileHover='hover'
              whileTap='tap'
              aria-label='Previous slide'
            >
              <ArrowLeft className='w-4 h-4 sm:w-5 sm:h-5 text-current' />
            </motion.button>

            <motion.button
              onClick={scrollNext}
              className='w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] flex items-center justify-center rounded-full cursor-pointer'
              variants={controlButtonVariants}
              initial='initial'
              whileHover='hover'
              whileTap='tap'
              aria-label='Next slide'
            >
              <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 text-current' />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeBuilt

