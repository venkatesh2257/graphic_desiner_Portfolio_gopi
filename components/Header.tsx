'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const menuItems = ['Home', 'About', 'Portfolio', 'Contact']

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Offset for header height
      
      // Check footer first (it's the last part of contact section)
      const footer = document.querySelector('#footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY
        const footerBottom = footerTop + footer.offsetHeight
        
        // If we're in or past the footer, stay on Contact
        if (scrollPosition >= footerTop - 200) {
          setActiveMenu('Contact')
          return
        }
      }
      
      // Check contact form section (it's part of contact section)
      const contactForm = document.querySelector('#contact-form')
      if (contactForm) {
        const contactFormTop = contactForm.getBoundingClientRect().top + window.scrollY
        const contactFormBottom = contactFormTop + contactForm.offsetHeight
        
        // If we're in the contact form section, stay on Contact
        if (scrollPosition >= contactFormTop - 150) {
          setActiveMenu('Contact')
          return
        }
      }
      
      // Check contact section (Let's Create Together)
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        const contactTop = contactSection.getBoundingClientRect().top + window.scrollY
        
        // If we're past the contact section start, check if we're before footer
        if (scrollPosition >= contactTop - 150) {
          // Only set to Contact if we haven't reached footer yet, or if footer doesn't exist
          if (!footer || scrollPosition < footer.getBoundingClientRect().top + window.scrollY - 200) {
            setActiveMenu('Contact')
            return
          }
        }
      }
      
      // Check other sections
      const sections = [
        { id: 'portfolio', menu: 'Portfolio' },
        { id: 'about', menu: 'About' },
        { id: 'home', menu: 'Home' }
      ]

      for (const section of sections) {
        const element = document.querySelector(`#${section.id}`)
        if (element) {
          const sectionTop = element.getBoundingClientRect().top + window.scrollY
          const sectionBottom = sectionTop + element.offsetHeight

          if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionBottom) {
            setActiveMenu(section.menu)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <img
              src="/assets/logo.png"
              alt="Pixora Logo"
              className="h-20 w-auto"
            />
          </motion.div>

          {/* Menu - Right Side */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const href = item === 'Home' ? '#home' : item === 'About' ? '#about' : item === 'Portfolio' ? '#portfolio' : '#contact'
              return (
                <motion.a
                  key={item}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveMenu(item)
                    const targetElement = document.querySelector(href)
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeMenu === item
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeMenu === item && (
                    <motion.div
                      layoutId="activeMenu"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}


