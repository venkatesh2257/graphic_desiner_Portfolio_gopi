'use client'

import { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [budgetError, setBudgetError] = useState<string>('')

  // Validate budget format
  const validateBudget = (value: string): boolean => {
    if (!value || value.trim() === '') return true // Empty is valid (optional field)
    
    // Currency pattern: allows currency symbols, numbers, commas, dashes, spaces, and k/m/b suffixes
    // Examples: $5,000, ₹50k, $5k-$10k, 5000-10000, €5,000 - €10,000
    const currencyPattern = /^[\$€£¥₹]?\s*[\d,]+[kKmMbB]?(\s*[-–—]\s*[\$€£¥₹]?\s*[\d,]+[kKmMbB]?)?$|^[\d,]+(\s*[-–—]\s*[\d,]+)?[kKmMbB]?$/
    
    // Check if it contains only valid currency characters
    const validChars = /^[\$€£¥₹\s,\d\-–—kKmMbB]+$/
    
    if (!validChars.test(value)) {
      return false
    }
    
    // Check if it matches currency pattern
    return currencyPattern.test(value.trim())
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setBudgetError('')

    const form = e.currentTarget
    const formDataObj = new FormData(form)
    const firstName = formDataObj.get('firstName') as string
    const lastName = formDataObj.get('lastName') as string
    const budget = formDataObj.get('budget') as string

    // Validate budget if provided
    if (budget && budget.trim() !== '') {
      if (!validateBudget(budget)) {
        setBudgetError('Please enter a valid budget format (e.g., $5,000, ₹50k, $5k-$10k)')
        setIsSubmitting(false)
        return
      }
    }

    // Create FormData with FormSubmit format
    const submitData = new FormData()
    submitData.append('_to', 'vinodjc007@gmail.com')
    submitData.append('_template', 'table')
    submitData.append('_captcha', 'false')
    submitData.append('_subject', `🎨 New Portfolio Inquiry from ${firstName} ${lastName}`)
    submitData.append('Name', `${firstName} ${lastName}`)
    submitData.append('Email', formDataObj.get('email') as string)
    submitData.append('Project Type', formDataObj.get('projectType') as string || 'Not specified')
    submitData.append('Budget', formDataObj.get('budget') as string || 'Not specified')
    submitData.append('Message', formDataObj.get('projectDetails') as string)

    try {

      const response = await fetch('https://formsubmit.co/ajax/vinodjc007@gmail.com', {
        method: 'POST',
        body: submitData,
      })

      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="relative pt-0 pb-20 sm:pb-24 md:pb-28 lg:pb-32 overflow-hidden bg-white -mt-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Two Column Layout: Left - Contact Info & Services, Right - Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Contact Info & Services */}
          <div className="space-y-12">
            {/* Get IN Touch Section */}
            <div>
              <h2 className="text-[30px] font-semibold text-black leading-[36px] mb-8">
                Get IN Touch
              </h2>
              
              {/* Contact Details */}
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-[10px]">
                  <div className="w-[52px] h-[52px] bg-[#5776E5] rounded-[11px] flex items-center justify-center flex-shrink-0 p-3">
                    <img
                      src="/icons/Layer 2.png"
                      alt="Email icon"
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[20px] font-semibold text-black leading-[24px] mb-1">Email</p>
                    <a href="mailto:pixora.art24@gmail.com" className="text-[18px] font-normal text-black leading-[22px] hover:text-[#5776E5] transition-colors block">
                      pixora.art24@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-[10px]">
                  <div className="w-[52px] h-[52px] bg-[#5776E5] rounded-[11px] flex items-center justify-center flex-shrink-0 p-3">
                    <img
                      src="/icons/Vector.png"
                      alt="Phone icon"
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[20px] font-semibold text-black leading-[24px] mb-1">Phone</p>
                    <a href="tel:+919550590174" className="text-[18px] font-normal text-black leading-[22px] hover:text-[#5776E5] transition-colors block">
                      +91 9550590174
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-[10px]">
                  <div className="w-[52px] h-[52px] bg-[#5776E5] rounded-[11px] flex items-center justify-center flex-shrink-0 p-3">
                    <img
                      src="/icons/Icons.png"
                      alt="Location icon"
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <p className="text-[20px] font-semibold text-black leading-[24px] mb-1">Location</p>
                    <p className="text-[18px] font-normal text-black leading-[22px]">Ongole, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {/* Brand Identity */}
                <div className="w-[240px] h-[90px] bg-white/11 rounded-[10px] p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.15)] hover:bg-[#5776E5] hover:text-white transition-all duration-300 cursor-pointer group relative">
                  <img
                    src="/icons/Vector (2).png"
                    alt="Brand Identity icon"
                    className="w-6 h-6 mb-2 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                  <h3 className="text-[12px] font-semibold text-black leading-[15px] mb-1 group-hover:text-white transition-colors">Brand Identity</h3>
                  <p className="text-[11px] font-normal text-black leading-[13px] group-hover:text-white transition-colors">Logo design, brand guidelines</p>
                </div>

                {/* Digital Design */}
                <div className="w-[240px] h-[90px] bg-white/11 rounded-[10px] p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.15)] hover:bg-[#5776E5] hover:text-white transition-all duration-300 cursor-pointer group relative">
                  <img
                    src="/icons/Vector (3).png"
                    alt="Digital Design icon"
                    className="w-6 h-6 mb-2 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                  <h3 className="text-[12px] font-semibold text-black leading-[15px] mb-1 group-hover:text-white transition-colors">Digital Design</h3>
                  <p className="text-[11px] font-normal text-black leading-[13px] group-hover:text-white transition-colors">Web graphics, UI elements</p>
                </div>

                {/* Print Design */}
                <div className="w-[240px] h-[90px] bg-white/11 rounded-[10px] p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.15)] hover:bg-[#5776E5] hover:text-white transition-all duration-300 cursor-pointer group relative">
                  <img
                    src="/icons/Vector (1).png"
                    alt="Print Design icon"
                    className="w-6 h-6 mb-2 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                  <h3 className="text-[12px] font-semibold text-black leading-[15px] mb-1 group-hover:text-white transition-colors">Print Design</h3>
                  <p className="text-[11px] font-normal text-black leading-[13px] group-hover:text-white transition-colors">Brochures, posters, reports</p>
                </div>

                {/* Packaging */}
                <div className="w-[240px] h-[90px] bg-white/11 rounded-[10px] p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.15)] hover:bg-[#5776E5] hover:text-white transition-all duration-300 cursor-pointer group relative">
                  <img
                    src="/icons/Group 2.png"
                    alt="Packaging icon"
                    className="w-6 h-6 mb-2 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                  <h3 className="text-[12px] font-semibold text-black leading-[15px] mb-1 group-hover:text-white transition-colors">Packaging</h3>
                  <p className="text-[11px] font-normal text-black leading-[13px] group-hover:text-white transition-colors">Product packaging design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/11 rounded-[18px] p-8 shadow-[0px_0px_2px_rgba(0,0,0,0.15)]">
            <form onSubmit={handleSubmit} className="space-y-4" action="https://formsubmit.co/vinodjc007@gmail.com" method="POST">
              {/* Hidden FormSubmit configuration for table template */}
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full h-[50px] px-4 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all border-0"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full h-[50px] px-4 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all border-0"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full h-[50px] px-4 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all border-0"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                  Project Type
                </label>
                <input
                  type="text"
                  id="projectType"
                  name="projectType"
                  className="w-full h-[50px] px-4 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all border-0"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                  Budget Range
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="e.g., $5,000 - $10,000 or ₹50k - ₹1L or 5000-10000"
                  className={`w-full h-[50px] px-4 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all border-0 ${
                    budgetError ? 'ring-2 ring-red-500' : ''
                  }`}
                  onInput={(e) => {
                    // Allow currency symbols, numbers, commas, dashes, spaces, and k/m/b suffixes
                    const input = e.currentTarget
                    const value = input.value
                    // Allow: currency symbols ($€£¥₹), numbers, commas, dashes, spaces, k/m/b/K/M/B
                    const validPattern = /^[\$€£¥₹\s,\d\-–—kKmMbB]+$/
                    if (value && !validPattern.test(value)) {
                      // Remove invalid characters
                      input.value = value.replace(/[^\$€£¥₹\s,\d\-–—kKmMbB]/g, '')
                    }
                    // Clear error on input
                    if (budgetError) {
                      setBudgetError('')
                    }
                  }}
                  onBlur={(e) => {
                    const value = e.currentTarget.value
                    if (value && value.trim() !== '') {
                      if (!validateBudget(value)) {
                        setBudgetError('Please enter a valid budget format (e.g., $5,000, ₹50k, $5k-$10k)')
                      } else {
                        setBudgetError('')
                      }
                    } else {
                      setBudgetError('')
                    }
                  }}
                />
                {budgetError ? (
                  <p className="text-[14px] text-red-600 mt-1 font-medium">{budgetError}</p>
                ) : (
                  <p className="text-[12px] text-gray-500 mt-1">Accepts: $, €, £, ¥, ₹ and formats like 5k, 10k-20k, $5,000-$10,000</p>
                )}
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  className="w-full h-[124px] px-4 py-3 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all resize-none border-0"
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[56px] bg-[#5776E5]/85 text-white font-bold text-[20px] leading-[24px] rounded-[7px] hover:bg-[#5776E5] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <img
                  src="/icons/Vector (4).png"
                  alt="Send icon"
                  className="w-5 h-5 brightness-0 invert"
                />
              </button>
              
              {/* Status Message */}
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm text-center mt-2">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

