'use client'

import img1 from '../../../public/assets/footer1.jpg'
import img2 from '../../../public/assets/footer2.jpg'
import img3 from '../../../public/assets/footer3.jpg'
import img4 from '../../../public/assets/footer4.jpg'
import Image from 'next/image'
import AnimatedButton from '../Custom/AnimatedButton'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LetsBuildModal from '../Modals/LetsBuildModal'

const ReadyToLaunch = () => {
  const [showModal, setShowModal] = useState(false)

  const images = [
    { src: img1, alt: 'startup image 1' },
    { src: img2, alt: 'startup image 2' },
    { src: img3, alt: 'startup image 3' },
    { src: img4, alt: 'startup image 4' }
  ]

  return (
    <>
      <div
        className='rounded-[24px] p-6 sm:px-[80px] sm:py-[32px] flex flex-col lg:flex-row justify-center xl:justify-between items-center gap-6 xl:gap-10'
        style={{
          background: 'linear-gradient(135deg, #0149DA 0%, #012161 100%)'
        }}
      >
        {/* Left Section */}
        <div className='max-w-2xl flex flex-col justify-start gap-3'>
          <motion.h2
            className='text-white font-normal text-2xl md:text-[48px] md:leading-[60px]'
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            Ready to launch <br /> your next venture?
          </motion.h2>

          <motion.p
            className='text-[18px] md:leading-[36px] font-[300] max-w-md text-white'
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
          >
            Join us in shaping the next wave of disruptive startups.
          </motion.p>

          <motion.div
            className='sm:mt-6'
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
            onClick={() => setShowModal(true)}
          >
            <AnimatedButton
              title={'Get in Touch'}
              bgColor={'#0F1412'}
              textColor={'#ffffff'}
              arrowBg={'#FFFFFF'}
              arrowColor={'#000000'}
            />
          </motion.div>
        </div>

        {/* Right Section - Images */}
        <motion.div
          className='grid grid-cols-2 sm:grid-cols-2 gap-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='overflow-hidden rounded-xl sm:rounded-[20px] w-full sm:w-[200px] h-[150px]'
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 120, damping: 18 }
                }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className='w-full h-full object-cover'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && <LetsBuildModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default ReadyToLaunch
