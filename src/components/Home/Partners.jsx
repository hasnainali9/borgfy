'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform
} from 'framer-motion'
import { wrap } from '@motionone/utils'

import collab1 from '../../../public/assets/home/partners/collab1.webp'
import collab2 from '../../../public/assets/home/partners/collab2.webp'
import collab3 from '../../../public/assets/home/partners/collab3.webp'
import collab4 from '../../../public/assets/home/partners/collab4.webp'
import collab5 from '../../../public/assets/home/partners/collab5.webp'
import collab6 from '../../../public/assets/home/partners/collab6.webp'
import collab7 from '../../../public/assets/home/partners/collab7.webp'
import collab8 from '../../../public/assets/home/partners/collab8.webp'

const logos = [
  collab1,
  collab2,
  collab3,
  collab4,
  collab5,
  collab6,
  collab7,
  collab8
]

function ParallaxLogos ({ baseVelocity = -150 }) {
  const baseX = useMotionValue(0)
  const directionFactor = useRef(1)
  const [isMounted, setIsMounted] = useState(false)
  const [logoSize, setLogoSize] = useState({ width: 150, gap: 100 })

  useEffect(() => {
    setIsMounted(true)

    const updateSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setLogoSize({ width: 100, gap: 60 }) // Mobile
      } else if (width < 1024) {
        setLogoSize({ width: 120, gap: 80 }) // Tablet
      } else {
        setLogoSize({ width: 150, gap: 100 }) // Desktop
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Repeat logos multiple times for seamless loop
  const repeated = [...logos, ...logos, ...logos, ...logos]

  const singleSetWidth = logos.length * (logoSize.width + logoSize.gap)

  // Use single set width for seamless wrapping
  const x = useTransform(baseX, v => `${wrap(-singleSetWidth, 0, v)}px`)

  useAnimationFrame((_, delta) => {
    if (!isMounted) return // Don't animate during SSR
    const moveBy = (directionFactor.current * baseVelocity * delta) / 1000
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className='overflow-hidden whitespace-nowrap flex flex-nowrap'>
      {!isMounted ? (
        // SSR-safe static grid
        <div className='flex flex-nowrap items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 animate-pulse'>
          {logos.map((logo, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-[100px] sm:w-[120px] md:w-[150px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center'
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                className='object-contain filter grayscale max-h-full w-auto'
                loading='lazy'
                quality={75}
              />
            </div>
          ))}
        </div>
      ) : (
        // Animated parallax after mount
        <motion.div className='flex flex-nowrap items-center' style={{ x }}>
          {repeated.map((logo, index) => (
            <div
              key={index}
              className='flex-shrink-0 flex items-center justify-center group'
              style={{
                width: `${logoSize.width}px`,
                marginRight: `${logoSize.gap}px`,
                height: `${logoSize.width * 0.6}px` // Maintain aspect ratio
              }}
            >
              <Image
                src={logo}
                alt={`Partner ${(index % logos.length) + 1}`}
                className='object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 max-h-full w-auto'
                loading='lazy'
                quality={75}
              />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default function Partners () {
  return (
    <section className='py-8 sm:py-10 md:py-12 bg-gray-50'>
      <div className='mx-auto max-w-[1600px]'>
        <ParallaxLogos baseVelocity={-150} />
      </div>
    </section>
  )
}
