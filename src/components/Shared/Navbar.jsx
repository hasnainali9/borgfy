'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../../public/assets/logo.svg'
import logoWhite from '../../../public/assets/logoWhite.svg'
import AnimatedButton from '../Custom/AnimatedButton'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const links = [
    { name: 'About', href: '/about-us' },
    { name: 'Companies', href: '/#companies' },
    { name: 'Work', href: '/#work' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = href => e => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      router.push(href)
      setIsOpen(false)
    } else {
      router.push(href)
      setIsOpen(false)
    }
  }

  const isTransparentPage =
    pathname === '/contact-us' || pathname === '/about-us'

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
        isTransparentPage
          ? scrolled
            ? 'bg-white border-b border-[#F0F0F0]'
            : 'bg-transparent  border-b border-[#302F2E]'
          : 'bg-white border-b border-[#F0F0F0]'
      }`}
    >
      <div className='custom-container flex justify-between items-center h-[72px]'>
        {/* Logo */}
        <div className='flex items-center gap-[41px]'>
          <Link href={'/'}>
            <Image
              src={isTransparentPage && !scrolled ? logoWhite : logo}
              alt='Logo'
              className='w-[86px] h-[32px]'
              priority
              quality={90}
            />
          </Link>
          <div className='hidden md:flex justify-between items-center gap-[50px]'>
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className={`${
                  isTransparentPage && !scrolled
                    ? 'text-[#FFFFFF]'
                    : 'text-[#2A2A28]'
                }  hover:text-blue-600 transition font-[400] text-sm leading-[20px] cursor-pointer`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Button */}
        <AnimatedButton
          title={'Connect Us'}
          href={'/contact-us'}
          bgColor={'#0049DA'}
          textColor={'white'}
          arrowBg={'#022A78'}
          arrowColor={'#ffffff'}
          moreStyle='hidden md:flex'
        />

        {/* Mobile Hamburger */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-700 focus:outline-none'
            aria-label="Menu Button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='md:hidden bg-white shadow-md overflow-hidden'
          >
            <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className='px-4 pt-4 pb-6 space-y-4'
            >
              {links.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className='block text-[#2A2A28] hover:text-blue-600 transition'
                >
                  {link.name}
                </motion.a>
              ))}

              <AnimatedButton
                title={'Get Connect'}
                href={'/contact-us'}
                bgColor={'#0049DA'}
                textColor={'white'}
                arrowBg={'#022A78'}
                arrowColor={'white'}
                moreStyle='flex md:hidden'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
