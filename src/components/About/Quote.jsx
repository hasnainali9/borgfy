'use client'

import { motion } from 'framer-motion'
import personImg from '../../../public/assets/about/quotePerson.png'
import Image from 'next/image'

const Quote = () => {
  return (
    <div className='w-full sm:h-[200px] py-16 relative flex justify-center items-center overflow-hidden bg-gradient-to-r from-[#0049DA] to-[#011F5C]'>
      {/* Content */}
      <div className='custom-container flex flex-col sm:flex-row items-center sm:items-center gap-6 lg:gap-[56px] relative z-10 w-full'>
        {/* Person Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='w-[120px] sm:w-[140px] md:w-[160px] aspect-square rounded-full shadow overflow-hidden flex justify-center items-center'
        >
          <Image
            src={personImg}
            alt='Quote person'
            className='w-full h-full object-top object-cover scale-150'
          />
        </motion.div>

        {/* Quote text */}
        <motion.div
          className='text-white flex flex-col justify-start text-center sm:text-left'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className='md:text-[24px] font-normal md:leading-[40px] font-[Times_New_Roman] italic'>
            "Be the viewer or be the changer — it’s your choice. Selling peace
            of mind is the new future."
          </h3>
          <p className='text-sm leading-[20px] italic mt-2'>
            — Founder’s Thought
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Quote
