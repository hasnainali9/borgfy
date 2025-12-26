'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// Assets
import aiIcon from '../../../public/assets/home/tech-stack/AiIcon.svg'
import aiImg from '../../../public/assets/home/tech-stack/AI.png'
import saasIcon from '../../../public/assets/home/tech-stack/SaaSIcon.svg'
import saasImg from '../../../public/assets/home/tech-stack/SaaS.png'
import mobileIcon from '../../../public/assets/home/tech-stack/MobileIcon.svg'
import mobileImg from '../../../public/assets/home/tech-stack/Mobile.png'
import premiumIcon from '../../../public/assets/home/tech-stack/PremiumIcon.svg'
import premiumImg from '../../../public/assets/home/tech-stack/Premium.png'

const techStack = [
  {
    id: 1,
    icon: aiIcon,
    img: aiImg,
    name: 'AI/ML',
    desc: 'AI isn’t just about automation; it’s about unlocking possibilities beyond human limits.',
    gradient: 'from-[#02523B] to-[#024531]'
  },
  {
    id: 2,
    icon: saasIcon,
    img: saasImg,
    name: 'SaaS & Web Platforms',
    desc: 'A great product isn’t just software; it’s an ecosystem that scales, evolves, and powers digital industries.',
    gradient: 'from-[#0049DA] to-[#002774]'
  },
  {
    id: 3,
    icon: mobileIcon,
    img: mobileImg,
    name: 'Mobile Apps (iOS, Android, Cross-Platform)',
    desc: 'Bringing app ideas to users—anytime, anywhere',
    gradient: 'from-[#9922A4] to-[#390D3E]'
  },
  {
    id: 4,
    icon: premiumIcon,
    img: premiumImg,
    name: 'Premium UI/UX for High-Impact Products',
    desc: 'Technology should feel like second nature—seamless, intuitive, invisible. The best design isn’t noticed; it’s felt.',
    gradient: 'from-[#9B2929] to-[#4F1515]'
  }
]

// Motion Variants
const cardVariants = {
  initial: {},
  hover: { transition: { staggerChildren: 0.1 } }
}

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.5, ease: 'easeInOut' } }
}

const titleVariants = {
  initial: { y: 0, opacity: 1 },
  hover: { y: -5, opacity: 1, transition: { duration: 0.3 } }
}

const descVariants = {
  initial: { y: 0, opacity: 0.9 },
  hover: { y: -5, opacity: 1, transition: { duration: 0.3, delay: 0.05 } }
}

const BorgfyTechStack = () => {
  return (
    <section className='custom-container pt-4 pb-10 sm:pt-16 sm:pb-20'>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center text-3xl md:text-5xl text-[#0F1412]'
      >
        <span className='font-[Times_New_Roman] italic'>The Borgfy </span>Tech
        Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className='mt-4 text-base md:text-lg mx-auto text-center text-[#302D2B]'
      >
        Every breakthrough startup is built on the right technology. We don’t
        just develop products—we engineer the future.
      </motion.p>

      {/* Stack Items */}
      <div className='mt-6 sm:mt-12 flex flex-col gap-4 sm:gap-6 lg:px-16'>
        {techStack.map(item => (
          <motion.div
            key={item.id}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden cursor-pointer'
            variants={cardVariants}
            initial='initial'
            whileHover='hover'
          >
            {/* Left (Gradient Info Box) */}
            <motion.div
              className={`py-16 px-8 flex flex-col gap-4 justify-center text-white bg-gradient-to-br ${item.gradient} lg:col-span-2`}
            >
              <motion.div variants={titleVariants}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  className='w-[56px] h-[56px]'
                />
              </motion.div>

              <motion.h3 className='text-2xl md:text-[40px] font-normal max-w-md relative'>
                {item.name}
                {/* Underline */}
                <motion.span
                  className='absolute left-0 -bottom-1 h-[2px] bg-white w-0'
                  variants={{
                    initial: { width: 0 },
                    hover: {
                      width: '90%',
                      transition: { duration: 0.3, ease: 'easeInOut' }
                    }
                  }}
                />
              </motion.h3>

              <motion.p className='text-sm md:text-base max-w-md text-[#E3E3E3]'>
                {item.desc}
              </motion.p>
            </motion.div>

            {/* Right (Image) */}
            <motion.div className='relative w-full overflow-hidden'>
              <motion.img
                src={item.img.src}
                alt={item.name}
                className='w-full h-full object-cover'
                variants={imageVariants}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BorgfyTechStack
