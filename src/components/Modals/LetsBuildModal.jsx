'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from '../../../public/assets/modals/img1.jpg'
import person from '../../../public/assets/modals/person.jpeg'
import { useEffect, useRef, useState } from 'react'
import Portal from './Portal'
import CustomDropdown from './CustomDropdown'

const LetsBuildModal = ({ onClose }) => {
  const modalRef = useRef < HTMLDivElement > null
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    type: '',
    paragraph: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    // Clear global error and success messages
    if (error) setError('')
    if (success) setSuccess(false)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { fullName, email, role, type, paragraph } = formData

    // Validate all fields
    const newErrors = {}
    if (!fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!role.trim()) newErrors.role = 'Please tell us who you are'
    if (!type) newErrors.type = 'Please select what you are looking for'
    if (!paragraph.trim()) newErrors.paragraph = 'Please tell us more about your needs'

    // If there are errors, set them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('https://contact.borgfy.com/api/business-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          type,
          role,
          paragraph
        })
      })

      const data = await res.json()

      // ✅ Handle success response: { success: true, message: "...", data: {...} }
      if (res.ok && data.success) {
        setSuccess(true)
        setFormData({
          fullName: '',
          email: '',
          role: '',
          type: '',
          paragraph: ''
        })
        // Auto-close modal after 2 seconds on success
        setTimeout(() => {
          onClose()
        }, 2000)
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
    <Portal>
      <div
        className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4'
        onClick={e => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='w-full max-w-5xl bg-[#FFFBF5] rounded-[40px] flex flex-col sm:flex-row overflow-hidden max-h-[95vh]'
        >
          {/* Left image */}
          <div className='relative w-full lg:w-[40%] sm:h-auto hidden lg:block m-[32px]'>
            <Image src={img1} alt='city' fill className='object-cover' />
            <div className='absolute inset-0 bg-black/30' />
            <div className='absolute flex items-center gap-4 bottom-6 left-6 text-white pr-4 sm:pr-8'>
              <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                <Image
                  src={person}
                  alt='person'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div className='flex flex-col items-start gap-2'>
                <p className='text-sm md:text-base italic max-w-xs font-[Times_New_Roman]'>
                  Its been great pleasure working with Borgfy venture studio in
                  launching my dream startup.
                </p>
                <span className='text-sm'>
                  Fahad Al Hasson
                  <span className='text-xs text-[#C5C5C5]'>&nbsp;Founder</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className='w-full lg:w-1/2 py-[32px] pr-[32px] pl-[32px] lg:pl-0 flex flex-col max-h-[95vh]'>
            <div className='flex-shrink-0'>
              <h2 className='text-xl sm:text-2xl md:text-[32px] font-normal text-[#0F1412] text-nowrap text-center'>
                Let's Build Bold Ventures Together
              </h2>
              <p className='text-[#6B6A69] text-sm sm:text-base text-center'>
                Partner with us to co-found, fund, and scale your startup
              </p>
            </div>

            <form
              className='flex flex-col flex-1 mt-8 2xl:mt-10 overflow-hidden'
              onSubmit={handleSubmit}
            >
              <div className='flex-1 overflow-y-auto pr-2 space-y-3 2xl:space-y-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'>
              {/* Full Name */}
              <div className='flex flex-col'>
                <label className='text-lg leading-[28px] text-[#2A2A28] mb-1'>
                  Full Name
                </label>
                <input
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='Enter your Full Name'
                  className={`w-full text-[#6B6A69] border-[1px] ${errors.fullName ? 'border-red-500' : 'border-[#E2DFDA]'} rounded-[12px] px-4 py-3 text-base`}
                />
                {errors.fullName && (
                  <span className='text-red-500 text-sm mt-1'>{errors.fullName}</span>
                )}
              </div>

              {/* Email */}
              <div className='flex flex-col'>
                <label className='text-lg leading-[28px] text-[#2A2A28] mb-1'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='yourmail@example.com'
                  className={`w-full text-[#6B6A69] border-[1px] ${errors.email ? 'border-red-500' : 'border-[#E2DFDA]'} rounded-[12px] px-4 py-3 text-base`}
                />
                {errors.email && (
                  <span className='text-red-500 text-sm mt-1'>{errors.email}</span>
                )}
              </div>

              {/* Role */}
              <div className='flex flex-col'>
                <label className='text-lg leading-[28px] text-[#2A2A28] mb-1'>
                  Who are you?
                </label>
                <input
                  type='text'
                  name='role'
                  value={formData.role}
                  onChange={handleChange}
                  placeholder='eg. Investor, Founder, Business'
                  className={`w-full text-[#6B6A69] border-[1px] ${errors.role ? 'border-red-500' : 'border-[#E2DFDA]'} rounded-[12px] px-4 py-3 text-base`}
                />
                {errors.role && (
                  <span className='text-red-500 text-sm mt-1'>{errors.role}</span>
                )}
              </div>

              {/* Select */}
              {/* Custom Dropdown */}
              <div className='flex flex-col'>
                <label className='text-lg leading-[28px] text-[#2A2A28] mb-1'>
                  What are you Looking for?
                </label>
                <CustomDropdown
                  value={formData.type}
                  onChange={val => {
                    setFormData(prev => ({ ...prev, type: val }))
                    // Clear error for type field when user selects
                    if (errors.type) {
                      setErrors(prev => ({ ...prev, type: '' }))
                    }
                    // Clear global error and success messages
                    if (error) setError('')
                    if (success) setSuccess(false)
                  }}
                  error={errors.type}
                />
                {errors.type && (
                  <span className='text-red-500 text-sm mt-1'>{errors.type}</span>
                )}
              </div>

              {/* Paragraph */}
              <div className='flex flex-col'>
                <label className='text-lg leading-[28px] text-[#2A2A28] mb-1'>
                  Tell us more
                </label>
                <textarea
                  name='paragraph'
                  value={formData.paragraph}
                  onChange={handleChange}
                  placeholder='a short paragraph...'
                  maxLength={250}
                  rows={3}
                  className={`w-full text-[#6B6A69] border-[1px] ${errors.paragraph ? 'border-red-500' : 'border-[#E2DFDA]'} rounded-[12px] px-4 py-3 text-base`}
                ></textarea>
                {errors.paragraph && (
                  <span className='text-red-500 text-sm mt-1'>{errors.paragraph}</span>
                )}
              </div>
              </div>

              {/* Success Message */}
              {success && (
                <div className='text-green-600 text-sm mt-2 text-center flex-shrink-0'>
                  ✓ Form submitted successfully! Closing modal...
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className='text-red-500 text-sm mt-2 text-center flex-shrink-0'>
                  {error}
                </div>
              )}

              {/* Button - Outside scrollable area, always visible */}
              <motion.button
                type='submit'
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full py-3 ${loading ? 'bg-gray-400' : 'bg-[#0049DA]'} text-white rounded-full text-base font-medium mt-4 flex-shrink-0 transition-colors`}
              >
                {loading ? 'Submitting...' : "Let's build it"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </Portal>
  )
}

export default LetsBuildModal
