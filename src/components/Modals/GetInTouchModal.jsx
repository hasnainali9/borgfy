'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from '../../../public/assets/modals/img2.jpg'
import person from '../../../public/assets/modals/person.png'

const GetInTouchModal = ({ onClose }) => {
  const modalRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    project: '',
    timeline: 'ASAP',
    budget: '',
    help: []
  })

  // form change handler
  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => {
        const updated = checked
          ? [...prev.help, value]
          : prev.help.filter(item => item !== value)
        return { ...prev, help: updated }
      })
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  // disable background scroll
  useEffect(() => {
    setMounted(true)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    // Simple validation: check required fields
    const { fullName, email, project } = formData
    if (!fullName.trim() || !email.trim() || !project.trim()) {
      alert(
        'Please fill in all required fields: Full Name, Email, and Project.'
      )
      return
    }

    console.log('Form submitted:', formData)
    onClose()
  }

  if (!mounted) return null

  return createPortal(
    <div
      className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4'
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='w-full max-w-6xl bg-[#FFFBF5] rounded-[40px] flex flex-col sm:flex-row overflow-hidden max-h-[95vh]'
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
                className='w-full h-full object-top object-cover scale-150 rounded-full'
              />
            </div>
            <div className='flex flex-col items-start gap-2'>
              <p className='text-sm md:text-base italic max-w-xs font-[Times_New_Roman]'>
                Success isn’t about building what you love— it’s about building
                what people can’t live without.
              </p>
              <span className='text-sm'>
                James Smith{' '}
                <span className='text-xs text-[#C5C5C5]'>&nbsp;Co-Founder</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className='w-full lg:w-1/2 py-[32px] px-[32px] lg:pl-0 overflow-y-auto'>
          <h2 className='text-xl sm:text-2xl md:text-[32px] font-normal text-[#0F1412] text-center'>
            Turn Your Vision Into a Product
          </h2>
          <p className='text-[#6B6A69] text-sm sm:text-base text-center'>
            We bring expert teams to design, develop, and launch your idea
          </p>

          <form className='space-y-4 mt-8' onSubmit={handleSubmit}>
            {/* Full name */}
            <div className='flex flex-col'>
              <label className='text-lg text-[#2A2A28] mb-1'>Full name</label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Enter your Full Name'
                className='w-full border border-[#E2DFDA] rounded-[12px] px-4 py-3 text-base text-[#6B6A69]'
              />
            </div>

            {/* Email */}
            <div className='flex flex-col'>
              <label className='text-lg text-[#2A2A28] mb-1'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='yourmail@example.com'
                className='w-full border border-[#E2DFDA] rounded-[12px] px-4 py-3 text-base text-[#6B6A69]'
              />
            </div>

            {/* What are you building */}
            <div className='flex flex-col'>
              <label className='text-lg text-[#2A2A28] mb-1'>
                What are you building?
              </label>
              <textarea
                name='project'
                value={formData.project}
                onChange={handleChange}
                placeholder='How can I help you!'
                rows={3}
                maxLength={500}
                className='w-full border border-[#E2DFDA] rounded-[12px] px-4 py-3 text-base text-[#6B6A69]'
              />
            </div>

            {/* Timeline */}
            <div>
              <label className='text-lg text-[#2A2A28] mb-2 block'>
                Desired timeline
              </label>
              <div className='flex gap-4 flex-wrap'>
                {['ASAP', '1-3 months', '3-6 months'].map(option => (
                  <label
                    key={option}
                    className='flex items-center gap-2 text-[#6B6A69]'
                  >
                    <input
                      type='radio'
                      name='timeline'
                      value={option}
                      checked={formData.timeline === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className='flex flex-col'>
              <label className='text-lg text-[#2A2A28] mb-1'>
                Budget Range (optional)
              </label>
              <select
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                className='w-full border border-[#E2DFDA] rounded-[12px] px-4 py-3 text-base text-[#6B6A69]'
              >
                <option value=''>Select your Budget</option>
                <option value='$5k-$10k'>$5k - $10k</option>
                <option value='$10k-$50k'>$10k - $50k</option>
                <option value='$50k+'>$50k+</option>
              </select>
            </div>

            {/* Help options */}
            <div>
              <label className='text-lg text-[#2A2A28] mb-2 block'>
                What do you need help with? (multi-select)
              </label>
              <div className='flex flex-wrap gap-3'>
                {[
                  'UX/UI Design',
                  'Full-stack Development',
                  'AI / ML Integration',
                  'Mobile App',
                  'Web App'
                ].map(option => (
                  <label
                    key={option}
                    className='flex items-center gap-2 border border-[#E2DFDA] px-3 py-2 rounded-lg cursor-pointer text-sm text-[#6B6A69]'
                  >
                    <input
                      type='checkbox'
                      name='help'
                      value={option}
                      checked={formData.help.includes(option)}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type='submit'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className='w-full py-3 bg-[#0049DA] text-white rounded-full text-base font-medium'
            >
              Send My Idea
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>,
    document.body
  )
}

export default GetInTouchModal
