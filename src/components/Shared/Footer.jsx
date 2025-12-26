'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Dribbble } from 'lucide-react'
import ReadyToLaunch from './ReadyToLaunch'

const Footer = () => {
  const viewport = useViewportDimensions()
  const gradientX = useMotionValue(0.5)
  const gradientY = useMotionValue(0.5)

  // Conic gradient pointer (using your theme colors)
  const conicBackground = useTransform([gradientX, gradientY], ([x, y]) => {
    return `conic-gradient(
      from 0deg at ${x * 100}% ${y * 100}%,
      #0049DA,
      #0D0E0E,
      #030405,
      #0049DA
    )`
  })

  return (
    <footer
      onPointerMove={e => {
        gradientX.set(e.clientX / viewport.width)
        gradientY.set(e.clientY / viewport.height)
      }}
      className='relative py-10 sm:pb-16 text-white overflow-hidden w-full
        bg-[radial-gradient(ellipse_230%_80%_at_center_150%,_#0049DA_70%,_#0D0E0E_90%,_#030405_350%)]
        sm:bg-[radial-gradient(ellipse_130%_90%_at_center_150%,_#0049DA_60%,_#0D0E0E_100%,_#030405_300%)] 
        bg-no-repeat'
    >
      {/* Conic pointer overlay */}
      <motion.div
        className='absolute inset-0 z-0 opacity-50 mix-blend-overlay'
        style={{ background: conicBackground }}
      />

      {/* Content */}
      <div className='custom-container relative z-10'>
        <ReadyToLaunch />

        {/* Top Section */}
        <div className='relative z-10'>
          <div className='py-12 grid grid-cols-1 md:grid-cols-5 gap-10'>
            {/* Left Tagline */}
            <div className='col-span-2 -mt-3'>
              <p className='text-[40px] italic font-[Times_New_Roman]'>
                Be the viewer <br />
                <span className='text-[20px]'>OR</span> <br />
                <span className='text-[40px] italic font-[Times_New_Roman]'>
                  Be the changer
                </span>
              </p>
              <p className='mt-4 font-medium text-lg text-center tracking-widest'>
                it’s your choice
              </p>
            </div>

            {/* Right Section */}
            <div className='col-span-3 flex flex-wrap gap-16 sm:gap-0 sm:flex-nowrap justify-start sm:justify-between items-start mt-6 sm:mt-0'>
              {/* Quick Links */}
              <div className='text-white'>
                <h4 className='font-medium mb-4 text-gray-400 text-sm'>
                  QUICK LINKS
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='/about-us'>About</a>
                  </li>
                  <li>
                    <a href='#work'>Works</a>
                  </li>
                  <li>
                    <a href='/contact-us'>Connect Us</a>
                  </li>
                </ul>
              </div>

              {/* Our Ventures */}
              <div className='text-white'>
                <h4 className='font-medium mb-4 text-gray-400 text-sm'>
                  OUR VENTURES
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <a href='https://scowter.com/' target='_blank'>
                      Scowter
                    </a>
                  </li>
                  <li>
                    <a href='https://masjidnearby.in/' target='_blank'>Masjid Nearby</a>
                  </li>
                  <li>
                    <a href='https://waynaa.com/' target='_blank'>
                      Waynaa
                    </a>
                  </li>
                  <li>
                    <a href='https://preneurbay.com/' target='_blank'>
                      Preneurbay
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect With Us */}
              <div>
                <h4 className='font-medium mb-4 text-gray-400 text-sm'>
                  CONNECT WITH US
                </h4>
                <ul className='space-y-3 text-white'>
                  <li>
                  <a
                    href='https://www.linkedin.com/company/borgfy'
                    target='_blank'
                    className='flex items-center gap-2'
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a></li>
                  <li> <a
                    href='instagram.com/borgfy/'
                    target='_blank'
                    className='flex items-center gap-2'
                  >
                    <Instagram size={18} /> Instagram
                  </a></li>
                  <li><a
                    href='https://www.facebook.com/borgfy'
                    target='_blank'
                    className='flex items-center gap-2'
                  >
                    <Facebook size={18} /> Facebook
                  </a></li>
                  <li> <a
                    href='https://x.com/borgfy'
                    target='_blank'
                    className='flex items-center gap-2'
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" className={'w-5 h-5'} shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799">
                      <path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" fill={'currentColor'}/>
                    </svg> X (Twitter)
                  </a></li>
                  <li><a
                    href='https://dribbble.com/borgfy'
                    target='_blank'
                    className='flex items-center gap-2'
                  >
                    <Dribbble size={18} /> Dribbble
                  </a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='flex flex-col md:flex-row items-center justify-between pb-10 sm:pb-20 text-sm text-[#8A8A8A]'>
            <p>© 2025 Borgfy</p>
            <div className='flex gap-6 mt-4 md:mt-0 text-[#FFFFFF]'>
              <a href='/privacy-policy'>Privacy Policy</a>
              <a href='/terms'>Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className='absolute bottom-[-70px] lg:bottom-[-180px] left-0 w-full text-center text-[5rem] sm:text-[10rem] lg:text-[17rem] font-extrabold text-[#FFFFFF66] select-none pointer-events-none leading-none z-0 tracking-widest'>
          BORGFY
        </div>
      </div>
    </footer>
  )
}

export default Footer

// Hook for viewport tracking
function useViewportDimensions () {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const update = () => {
      dimensions.current.width = window.innerWidth
      dimensions.current.height = window.innerHeight
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return dimensions.current
}
