'use client'

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, ChevronDown } from 'lucide-react'

const options = [
  { id: 1, value: '', label: 'Select here' },
  {
    id: 2,
    value: 'Businessman',
    label: 'AI | App/Website Development | UI/UX'
  },
  { id: 3, value: 'Freelancer', label: 'Brainstorming session' },
  { id: 4, value: 'Retired', label: 'Startup Consulting' },
  { id: 5, value: 'Other', label: 'Other' }
]

export default function CustomDropdown ({ value, onChange }) {
  return (
    <div className='w-full'>
      <Listbox value={value} onChange={onChange}>
        <div className='relative'>
          {/* Button */}
          <Listbox.Button className='relative w-full cursor-pointer rounded-[12px] text-[#6B6A69] border-[1px] border-[#E2DFDA] bg-[#FFFBF5] py-3 pl-4 pr-10 text-left text-base  focus:outline-none'>
            <span>
              {options.find(o => o.value === value)?.label ?? 'Select here'}
            </span>
            <span className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
              <ChevronDown className='h-5 w-5 text-[#6B6A69]' />
            </span>
          </Listbox.Button>

          {/* Options */}
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[12px] bg-[#FFFBF5] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none'>
              {options.map(option => (
                <Listbox.Option
                  key={option.id}
                  value={option.value}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-4 pr-10 ${
                      active ? 'bg-[#F2EADF] text-[#2A2A28]' : 'text-[#2A2A28]'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 right-3 flex items-center'>
                          <Check className='h-5 w-5 text-[#0049DA]' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
