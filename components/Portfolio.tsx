'use client'

import { useRef } from 'react'
import PortfolioCard from './PortfolioCard'

// This data would typically come from a CMS
const portfolioItems = [
  {
    id: 1,
    image: '/assets/destro.png',
    category: 'Logo Design',
    title: 'Destro Solutions',
    description: 'Modern logo design for a technology startup, combining innovation with trust. The design features clean geometric shapes that represent connectivity and growth.'
  },
  {
    id: 2,
    image: '/assets/jippy.png',
    category: 'Logo Design',
    title: 'Jippy Mart',
    description: 'Modern logo design for a technology startup, combining innovation with trust. The design features clean geometric shapes that represent connectivity and growth.'
  },
  {
    id: 3,
    image: '/assets/pixora.png',
    category: 'Logo Design',
    title: 'Pixora',
    description: 'Modern logo design for a technology startup, combining innovation with trust. The design features clean geometric shapes that represent connectivity and growth.'
  },
  {
    id: 4,
    image: '/assets/TechBuds.png',
    category: 'Logo Design',
    title: 'Tech Buds',
    description: 'Modern logo design for a technology startup, combining innovation with trust. The design features clean geometric shapes that represent connectivity and growth.'
  },
  // Add more items as needed - these will come from CMS
]

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 375 // Card width (359px) + gap (16px)
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="portfolio" className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent leading-tight mb-12 lg:mb-16">
          Portfolio
        </h2>
        
        {/* Navigation Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 -ml-6"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 -mr-6"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Scrolling Cards - Hidden Scrollbar */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-visible pb-4 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 px-4 sm:px-6 md:px-8 lg:px-12 scrollbar-hide"
          >
            <div className="flex gap-6 w-max">
              {portfolioItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  image={item.image}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <button 
            onClick={(e) => {
              e.preventDefault()
              const targetElement = document.querySelector('#contact')
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="w-[296px] h-[63px] rounded-[14px] text-[#5776E5] font-bold text-[20px] leading-[30px] hover:bg-[#5776E5] hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
            style={{
              background: 'rgba(255, 255, 255, 0.07)',
              boxShadow: '0px 0px 4.8px rgba(0, 0, 0, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5776E5'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)'
            }}
          >
            <span>Lets Work Together</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <line
                x1="2"
                y1="12"
                x2="18"
                y2="12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M14 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        
        {/* Let's Create Together Section */}
        <div id="contact" className="mt-16 lg:mt-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5776E5] leading-tight mb-6 lg:mb-8 whitespace-nowrap">
            Let's Create Together
          </h2>
          <div className="max-w-[1145px] mx-auto mb-0 px-4 sm:px-6 md:px-8 lg:px-12">
            <p className="text-[26px] font-medium text-[#4E4E4E] leading-[177%] text-left">
              Ready to bring your vision to life? I'd love to hear about your project and discuss
            </p>
            <p className="text-[24px] font-medium text-[#4E4E4E] leading-[177%] text-center">
              how we can create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

