export default function Footer() {
  return (
    <section id="footer" className="relative w-full bg-[#5776E5]">
      <div className="max-w-[1280px] mx-auto h-[766px] px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Brand Info */}
          <div className="space-y-6">
            {/* Name with Image */}
            <div className="flex items-center gap-4">
              <div className="w-[80px] h-[80px] flex-shrink-0 relative">
                <img
                  src="/assets/hero_image.png"
                  alt="Gopi Yallaturi"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ 
                    objectPosition: '50% 25%',
                    transform: 'scale(2.2)',
                    transformOrigin: 'center center'
                  }}
                />
              </div>
              <h2 className="text-[40px] font-bold text-white leading-[48px]">
                GOPI YALLATURI
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-[24px] font-semibold text-white leading-[177%] max-w-[542px]">
              Creating exceptional design experiences that drive results and connect with audiences. Let's bring your vision to life.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-12">
              <a 
                href="https://www.instagram.com/iam_chinna_0202/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[73px] h-[73px] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/icons/Group 3.png"
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/gopi-yallaturi-751b86352/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[73px] h-[73px] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="/icons/Vector (5).png"
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Services */}
          <div className="space-y-6">
            <h3 className="text-[40px] font-semibold text-white leading-[177%]">
              Services
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-[24px] font-semibold text-white leading-[177%] text-center">
                Logo design
              </p>
              <p className="text-[24px] font-semibold text-white leading-[177%] text-center">
                Brand Identity
              </p>
              <p className="text-[24px] font-semibold text-white leading-[177%] text-center">
                UI/UX design
              </p>
              <p className="text-[24px] font-semibold text-white leading-[177%] text-center">
                Print design
              </p>
              <p className="text-[24px] font-semibold text-white leading-[177%] text-center">
                Packaging
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Line and Copyright */}
        <div className="mt-16 lg:mt-20 space-y-6">
          {/* Divider Line */}
          <div className="w-full max-w-[1058px] mx-auto border-t border-white"></div>
          
          {/* Copyright */}
          <p className="text-[24px] font-semibold text-white leading-[177%] text-center max-w-[921px] mx-auto">
            © 2025 Gopi Yallaturi. All rights reserved. Designed with passion and creativity.
          </p>
        </div>
      </div>
    </section>
  )
}
