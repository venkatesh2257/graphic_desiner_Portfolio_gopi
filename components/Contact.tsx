'use client'

export default function Contact() {
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
            <form className="space-y-4">
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
                  className="w-full h-[50px] px-4 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all border-0"
                />
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-[18px] font-medium text-black leading-[22px] mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  className="w-full h-[124px] px-4 py-3 bg-white/85 rounded-[7px] shadow-[0px_0px_5.5px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-[#5776E5] focus:border-transparent outline-none transition-all resize-none border-0"
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full h-[56px] bg-[#5776E5]/85 text-white font-bold text-[20px] leading-[24px] rounded-[7px] hover:bg-[#5776E5] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <img
                  src="/icons/Vector (4).png"
                  alt="Send icon"
                  className="w-5 h-5 brightness-0 invert"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

