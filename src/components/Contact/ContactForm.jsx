'use client'

import Image from 'next/image'
import leftImg from '../../../public/assets/contact/contactHero.jpg'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FloatingInput = ({
  label,
  type = 'text',
  textarea = false,
  maxLength,
  value,
  onChange,
  required = false,
  name
}) => {
  // Generate unique ID for accessibility
  const inputId = `input-${name || label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className='relative w-full'>
      {textarea ? (
        <textarea
          id={inputId}
          name={name || label.toLowerCase().replace(/\s+/g, '-')}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          placeholder=' '
          rows={4}
          required={required}
          aria-label={label}
          aria-required={required}
          className='peer w-full border-b border-gray-300 focus:border-black focus:ring-0 outline-none pt-6 pb-2 text-base sm:text-lg resize-none bg-transparent transition-colors duration-200'
        />
      ) : (
        <input
          id={inputId}
          name={name || label.toLowerCase().replace(/\s+/g, '-')}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=' '
          required={required}
          aria-label={label}
          aria-required={required}
          className='peer w-full border-b border-gray-300 focus:border-black focus:ring-0 outline-none pt-4 pb-2 text-base sm:text-lg md:text-xl lg:text-[24px] text-[#080705] bg-transparent transition-colors duration-200'
        />
      )}
      <label
        htmlFor={inputId}
        className='absolute left-0 -top-2 text-[#6B6A69] text-base sm:text-lg transition-all cursor-text
        peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg sm:peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-[22px] lg:peer-placeholder-shown:text-[24px] peer-placeholder-shown:text-[#6B6A69]
        peer-focus:-top-2 peer-focus:text-base sm:peer-focus:text-lg peer-focus:text-[#6B6A69] peer-focus:font-medium'
      >
        {label}
      </label>
      {maxLength && (
        <div className='text-right text-xs sm:text-sm text-gray-400 mt-1'>
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  )
}

const headingContainer = {
  hidden: { opacity: 0 },
  visible: isMobile => ({
    opacity: 1,
    transition: { staggerChildren: isMobile ? 0.015 : 0.01 }
  })
}
const headingLetter = {
  hidden: { opacity: 0, y: 20 },
  visible: isMobile => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      duration: isMobile ? 0.25 : 0.45
    }
  })
}
const formContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const formItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
}

const ContactForm = () => {
  const headingText =
    "Ready to build the next big thing? Drop your query below, and let's build it together."
  const [isMobile, setIsMobile] = useState(false)

  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [contactValue, setContactValue] = useState('')
  const [messageValue, setMessageValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    // ✅ Validation
    if (!nameValue || !emailValue || !messageValue) {
      setError('Please fill in all required fields.')
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailValue)) {
      setError('Please enter a valid email address.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('https://contact.borgfy.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          contact: contactValue,
          message: messageValue
        })
      })

      const data = await res.json()

      // ✅ Handle success response: { success: true, message: "...", data: {...} }
      if (res.ok && data.success) {
        setSuccess(true)
        setNameValue('')
        setEmailValue('')
        setContactValue('')
        setMessageValue('')
      } else {
        // ❌ Handle error response: { error: "...", details: {...} }
        setError(
          data.error ||
            data.message ||
            'Something went wrong. Please try again.'
        )
      }
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='custom-container pb-10 md:py-16 flex flex-col gap-6 sm:gap-8'>
      {/* Heading */}
      <motion.p
        className='text-[#080705] text-lg md:text-2xl lg:text-4xl leading-snug md:leading-tight font-normal mt-6 tracking-tight break-words whitespace-normal'
        variants={headingContainer}
        custom={isMobile}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
      >
        {headingText.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={headingLetter}
            custom={isMobile}
            className='inline-block'
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.p>

      <hr className='w-full h-[0.5px] bg-[#0F14124D]' />

      <div className='grid md:grid-cols-2 gap-6 items-start'>
        {/* Left Image */}
        <div>
          <Image
            src={leftImg}
            alt='Contact'
            className='w-full md:w-[547px] md:h-[543px] object-cover rounded-[16px]'
          />
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={formContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='flex flex-col gap-6 sm:gap-8 w-full'
          noValidate
        >
          <motion.div variants={formItem}>
            <FloatingInput
              label='Full Name'
              name='full-name'
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={formItem}>
            <FloatingInput
              label='Email'
              name='email'
              type='email'
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={formItem}>
            <FloatingInput
              label='Contact Number'
              name='contact-number'
              type='tel'
              value={contactValue}
              onChange={e => setContactValue(e.target.value)}
            />
          </motion.div>
          <motion.div variants={formItem}>
            <FloatingInput
              label='Your Idea / Query'
              name='message'
              textarea
              maxLength={250}
              value={messageValue}
              onChange={e => setMessageValue(e.target.value)}
              required
            />
          </motion.div>

          {/* Button */}
          <motion.div variants={formItem} className='flex flex-col gap-2 sm:gap-3'>
            <motion.button
              type='submit'
              disabled={loading}
              className='group w-[160px] sm:w-[170px] md:w-[180px] h-[42px] sm:h-[44px] pl-1 pr-1 py-1 rounded-full inline-flex justify-between items-center relative overflow-hidden cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300'
              style={{ backgroundColor: '#0049DA' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              aria-label={loading ? 'Sending message' : 'Submit contact form'}
            >
              <motion.span
                className='pl-3 sm:pl-4 font-medium text-sm sm:text-base text-white'
                whileHover={!loading ? { x: 5 } : {}}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {loading ? 'Sending...' : "Let's Build It"}
              </motion.span>
              <motion.div
                className='w-8 h-8 sm:w-9 sm:h-9 rounded-full flex justify-center items-center bg-[#022A78]'
                whileHover={!loading ? { x: 5, scale: 1.1, rotate: 45 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <ArrowRight size={18} className='sm:w-5 sm:h-5 text-white' />
              </motion.div>
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-green-600 text-sm sm:text-base font-medium'
                role='status'
                aria-live='polite'
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-red-600 text-sm sm:text-base font-medium'
                role='alert'
                aria-live='assertive'
              >
                ✗ {error}
              </motion.p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}

export default ContactForm
