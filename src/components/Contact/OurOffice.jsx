'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import indiaOfficeImg from '../../../public/assets/contact/HeadOffice.jpg'
import usaOffice1 from '../../../public/assets/contact/RegionalOffice1.jpg'
import usaOffice2 from '../../../public/assets/contact/RegionalOffice2.jpg'

const offices = [
  {
    img: indiaOfficeImg,
    title: 'Head office - India',
    address:
      '75/9, Aruna Asaf Ali Marg Sector B, Vasant Kunj, New Delhi, 110070'
  },
  {
    img: usaOffice1,
    title: 'Regional Office – USA',
    address: 'Philadeplhia,USA'
  },
  {
    img: usaOffice2,
    title: 'Regional Office – USA',
    address:
      'Al-Narjis District, Abu Bakr Al-Siddiq Road, Riyadh 13327, Saudi Arabia'
  }
]

// Heading variants
const headingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
}

const headingLetter = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 18 }
  }
}

// Info + cards animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 }
  }
}

const OurOffice = () => {
  const heading = 'Our Offices'

  return (
    <section className='w-full bg-[#030405] text-white py-14 md:py-24'>
      <div className='custom-container relative'>
        {/* Heading with letter animation */}
        <motion.h2
          variants={headingContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='text-4xl md:text-[52px] font-light leading-[110%]'
        >
          {heading.split('').map((char, i) => (
            <motion.span key={i} variants={headingLetter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>

        <div className='grid lg:grid-cols-[1fr_3fr] gap-12 items-start mt-12'>
          {/* Info box */}
          <motion.div
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            className='flex flex-col sticky top-6 bg-[#030405]'
          >
            <h3 className='text-2xl md:text-[36px] font-medium'>
              General Inquiries:
            </h3>
            <p className='text-base mt-2'>info@borgfy.com</p>
            <p className='text-base mt-4'>Phone:</p>
            <ul className='space-y-1 text-base'>
              <li>USA: +1 818 854 0594</li>
              <li>Saudi Arabia: +966 554 004 811</li>
              <li>India: +91 813 093 7887</li>
            </ul>
          </motion.div>

          {/* Office cards with staggered animation */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className='relative group overflow-hidden bg-[#111]'
              >
                <Image
                  src={office.img}
                  alt={office.title}
                  className='w-full h-[360px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5'>
                  <h4 className='text-xl font-medium mb-2'>{office.title}</h4>
                  <p className='text-[13px] text-gray-300'>{office.address}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurOffice
