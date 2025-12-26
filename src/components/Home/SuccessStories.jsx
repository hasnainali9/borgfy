'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import founderLoctour from '../../../public/assets/home/brandings/loctourFounder.jpeg'
import founderTazza from '../../../public/assets/home/brandings/tazzaFounder.jpeg'
import founderQool from '../../../public/assets/home/brandings/qoolFounder.jpeg'
import founderCloud from '../../../public/assets/home/brandings/cloudFounder.png'

// Branding logos
import loctourImg from '../../../public/assets/home/brandings/loctour.svg'
import tazzaImg from '../../../public/assets/home/brandings/tazza.svg'
import cloudImg from '../../../public/assets/home/brandings/cloudExpert.svg'
import qoolImg from '../../../public/assets/home/brandings/qool.svg'
import SuccessRightImages from './SuccessRightImages'

// All brand data
const brandsData = [
  {
    name: 'Loctour',
    logo: loctourImg,
    title: 'UI/UX - App & Website Development',
    subtitle: 'Discover trending hotspots and share experiences.',
    review:
      'They truly helped me bring my dream idea to life. I really appreciate the effort they put into my project, Loctour.',
    person: 'Fahad Al Hasson, Riyadh',
    role: 'Founder',
    founderImg: founderLoctour,
    websiteLink: '',
    androidLink: '',
    iosLink: ''
  },
  {
    name: 'Tazza',
    logo: tazzaImg,
    title: 'UIUX | App Development',
    subtitle: 'A Social Coffee Networking App',
    review:
      'Abdullah is excellent at brainstorming innovative ideas. We collaborated to design and build the UX flow for Tazza, a social coffee networking app.',
    person: 'Nick, Philadelphia',
    role: 'Founder',
    founderImg: founderTazza,
    websiteLink: '',
    androidLink: '',
    iosLink: ''
  },
  {
    name: 'Qool Qatar',
    logo: qoolImg,
    title: 'Digital Branding & App Strategy',
    subtitle: 'Qool Qatar – Travel Exploring & Events Booking App',
    review:
      'Borgfy Venture has an amazing team with great talent. They helped me build my travel-tech app, Qool Qatar, during the Qatar World Cup.',
    person: 'Riyaz Doha, Qatar',
    role: 'Founder',
    founderImg: founderQool,
    websiteLink: '',
    androidLink: '',
    iosLink: ''
  },
  {
    name: 'Cloud Expert',
    logo: cloudImg,
    title: 'Ecommerce Website | UIUX Development',
    subtitle: 'Equipment Rental & E-Commerce Platform',
    review:
      'They helped me build a complex full-stack e-commerce platform from scratch to launch, handling everything end-to-end with great execution.',
    person: 'Mohammad Aboud, Riyadh',
    role: 'Co-Founder',
    founderImg: founderCloud,
    websiteLink: '',
    androidLink: '',
    iosLink: ''
  }
]

// Motion variants for fade/slide
const fadeVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.5 } }
}

const SuccessStories = () => {
  const [activeBrand, setActiveBrand] = useState(0)

  return (
    <section id='work' className='custom-container py-10 sm:py-16'>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center text-3xl md:text-5xl font-normal text-[#0F1412]'
      >
        <span className='font-[Times_New_Roman] italic'>Success </span>Stories
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className='mt-4 text-base md:text-lg text-center text-[#302D2B]'
      >
        We’ve helped over 50+ businesses deliver extraordinary customer
        experiences while cutting costs.
      </motion.p>

      {/* Content */}
      <div className='mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 lg:gap-10'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeBrand}
            variants={fadeVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='flex flex-col justify-start gap-6 lg:gap-8 w-full md:w-1/2'
          >
            <p className='text-base font-light text-[#718595]'>
              {brandsData[activeBrand].title}
            </p>

            <h3 className='text-[#0F1412] font-normal text-[24px] lg:text-[28px] leading-snug max-w-md'>
              {brandsData[activeBrand].subtitle}
            </h3>

            <div className='flex justify-start items-start gap-6'>
              <Image
                src={brandsData[activeBrand].founderImg}
                alt='Story teller'
                className='w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full object-cover'
                loading="lazy"
                quality={75}
              />
              <div className='flex flex-col justify-start gap-4'>
                <p className='text-[#0F1412] font-normal font-[Times_New_Roman] text-lg lg:text-xl italic max-w-[350px]'>
                  {brandsData[activeBrand].review}
                </p>
                <p className='text-[#302D2B] text-sm'>
                  {brandsData[activeBrand].person} &nbsp;
                  <span className='text-[#302D2BCC] text-xs'>
                    {brandsData[activeBrand].role}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeBrand}
            variants={fadeVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.6 }}
            className='relative w-full md:w-4/6 flex justify-center'
          >
            <SuccessRightImages type={activeBrand + 1} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Branding Section */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 mt-8 items-center cursor-pointer'>
        {brandsData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setActiveBrand(idx)}
            className={`flex justify-center items-center border-b-[2px] py-3 ${
              idx === activeBrand ? 'border-[#00261F]' : 'border-[#00261F33]'
            }`}
          >
            <Image
              src={item.logo}
              alt={item.name}
              className={`h-[28px] sm:h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition ${
                idx === activeBrand ? 'opacity-100' : ''
              }`}
              loading="lazy"
              quality={75}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SuccessStories
