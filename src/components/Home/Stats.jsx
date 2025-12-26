'use client'

import {
  motion,
  useMotionValue,
  animate,
  useMotionValueEvent
} from 'framer-motion'
import { useEffect, useState } from 'react'

const all = [
  { title: 'Ventures Launched', count: 6, bg: '#02523B' },
  { title: 'Ideas Evaluated', count: 40, bg: '#0049DA' },
  { title: 'Projects Delivered', count: 30, bg: '#9922A4' },
  { title: 'Countries Served', count: 10, bg: '#9B6629' }
]

const Stats = () => {
  return (
    <div className='w-full pt-10 custom-container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
        {all.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col justify-between items-start p-6 text-white w-full h-[240px]
              ${
                index === 0 &&
                'rounded-t-xl sm:rounded-tl-xl md:rounded-tr-none lg:rounded-l-xl lg:rounded-tr-none'
              } 
              ${index === 1 && 'sm:rounded-tr-xl lg:rounded-none'} 
              ${index === 2 && 'sm:rounded-bl-xl lg:rounded-none'} 
              ${
                index === all.length - 1 &&
                'rounded-b-xl sm:rounded-br-xl md:rounded-bl-none lg:rounded-r-xl lg:rounded-bl-none'
              }`}
            style={{ backgroundColor: item.bg }}
            initial={{ rotateY: 90, scale: 0.8, opacity: 0 }}
            whileInView={{ rotateY: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: index * 0.2
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className='mt-2 text-lg font-normal w-full'>{item.title}</p>
            <CountUp end={item.count} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ✨ CountUp (starts only when in view)
const CountUp = ({ end }) => {
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (started) {
      const controls = animate(count, end, {
        duration: 2,
        ease: 'easeOut'
      })
      return controls.stop
    }
  }, [end, count, started])

  useMotionValueEvent(count, 'change', latest => {
    setDisplay(Math.floor(latest))
  })

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='text-[72px] xl:text-[90px] font-[300] tracking-tighter'
    >
      {display}+
    </motion.span>
  )
}

export default Stats
