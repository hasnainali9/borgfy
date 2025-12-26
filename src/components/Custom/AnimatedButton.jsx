'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const AnimatedButton = ({
  title,
  href,
  bgColor,
  textColor,
  arrowBg,
  arrowColor,
  moreStyle = '',
  type = ''
}) => {
  return (
    <motion.a
      type={type}
      href={href}
      className={`w-[163px] h-[44px] pl-[5px] pr-[4px]  py-[4px] rounded-full justify-between items-center relative overflow-hidden cursor-pointer ${
        moreStyle || 'inline-flex'
      }`}
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Button text */}
      <motion.span
        className={`pl-4 font-medium`}
        style={{ color: textColor }}
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {title}
      </motion.span>

      {/* Arrow container */}
      <motion.div
        className={`w-9 h-9 rounded-full flex justify-center items-center`}
        style={{ backgroundColor: arrowBg }}
        whileHover={{ x: 5, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <ArrowRight size={20} style={{ color: arrowColor }} />
      </motion.div>
    </motion.a>
  )
}

export default AnimatedButton
