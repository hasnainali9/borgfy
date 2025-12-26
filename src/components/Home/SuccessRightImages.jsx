'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import screen1 from '../../../public/assets/home/screens/screen1.svg'
import screen2 from '../../../public/assets/home/screens/screen2.svg'
import screen3 from '../../../public/assets/home/screens/screen3.svg'

import qoolScreen1 from '../../../public/assets/home/screens/qool1.webp'
import qoolScreen2 from '../../../public/assets/home/screens/qool2.webp'
import qoolScreen3 from '../../../public/assets/home/screens/qool3.webp'

import tazzaImg from '../../../public/assets/home/screens/cloudExpert.png'
import qoolQatarImg from '../../../public/assets/home/screens/qoolQatar.png'
import cloudExpertImg from '../../../public/assets/home/screens/tazza.webp'

// Floating animations for each screen
const floatAnimations = [
  {
    y: [0, -15, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
  },
  {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  },
  {
    y: [0, -18, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
  }
]

// Parent container stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const imgVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
}

// Child entrance animation
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const SuccessRightImages = ({ type }) => {
  return (
    <div className='z-10'>
      {type === 1 && (
        <motion.div
          className='bg-[#182C1A] flex justify-center items-center py-12 md:py-12 px-6 sm:px-10 lg:px-36 relative overflow-hidden rounded-[20px]'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className='flex flex-row items-center justify-center relative aspect-[4/3]'
            variants={containerVariants}
          >
            {[screen1, screen2, screen3].map((img, i) => (
              <motion.div
                key={i}
                className={`
              relative cursor-pointer 
              ${i === 1 ? 'z-20 scale-105' : 'z-10 scale-95'} 
              -mx-6
            `}
                variants={itemVariants}
                animate={floatAnimations[i]}
                whileHover={{
                  scale: 1.1,
                  rotate: i === 0 ? -6 : i === 2 ? 6 : 0,
                  boxShadow: '0px 20px 40px rgba(0,0,0,0.35)',
                  transition: { duration: 0.35 }
                }}
                initial={{
                  rotate: i === 0 ? -4 : i === 2 ? 4 : 0 // natural tilt for sides
                }}
              >
                <Image
                  src={img}
                  alt={`Screen ${i + 1}`}
                  className='w-[175px] h-[380px] rounded-2xl shadow-xl'
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
      {type === 2 && (
        <motion.div
          className='overflow-hidden rounded-[20px] border-[0.5px] border-[#b9b9b9]'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px] aspect-[4/3]'>
            <Image
              variants={imgVariants}
              src={cloudExpertImg}
              alt='Cloud Expert'
              fill
              className='object-cover rounded-[20px]'
              priority
              quality={100}
            />
          </div>
        </motion.div>
      )}
      {type === 3 && (
        <motion.div
          className='bg-[#009dff34] flex justify-center items-center py-12 md:py-12 px-6 sm:px-10 lg:px-36 relative overflow-hidden rounded-[20px]'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className='flex flex-row items-center justify-center relative aspect-[4/3]'
            variants={containerVariants}
          >
            {[qoolScreen1, qoolScreen2, qoolScreen3].map((img, i) => (
              <motion.div
                key={i}
                className={`
              relative cursor-pointer 
              ${i === 1 ? 'z-20 scale-105' : 'z-10 scale-95'} 
              -mx-6
            `}
                variants={itemVariants}
                animate={floatAnimations[i]}
                whileHover={{
                  scale: 1.1,
                  rotate: i === 0 ? -6 : i === 2 ? 6 : 0,
                  boxShadow: '0px 20px 40px rgba(0,0,0,0.35)',
                  transition: { duration: 0.35 }
                }}
                initial={{
                  rotate: i === 0 ? -4 : i === 2 ? 4 : 0 // natural tilt for sides
                }}
              >
                <Image
                  src={img}
                  alt={`Screen ${i + 1}`}
                  className='w-[175px] h-[380px] rounded-2xl shadow-xl'
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {type === 4 && (
        <motion.div
          className='overflow-hidden rounded-[20px] border-[0.5px] border-[#b9b9b9]'
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px] aspect-[4/3]'>
            <Image
              variants={imgVariants}
              src={tazzaImg}
              alt='cloud Expert'
              fill
              className='object-contain rounded-[20px]'
              priority
              quality={100}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default SuccessRightImages
