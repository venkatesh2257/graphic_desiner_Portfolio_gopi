export default function Hero() {
  return (
    <section id="home" className="relative bg-white pt-16 sm:pt-20 overflow-hidden">
      {/* Mobile Layout - Stack vertically, center align */}
      <div className="md:hidden relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 leading-tight text-center">
            Hi, I am GOPI
          </h1>
          <div className="relative z-20">
            <img
              src="/assets/hero_image.png"
              alt="Gopi Character"
              className="h-[250px] sm:h-[300px] w-auto object-contain"
            />
          </div>
          <p className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight text-center px-2">
            Graphic Designer
          </p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden relative max-w-[1400px] mx-auto h-[700px] bg-white px-6">
        <div className="relative w-full h-full">
          {/* Layer 1: Background Text - "Hi, I am GOPI" */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[100px] z-10 w-fit">
            <h1 className="text-[80px] font-extrabold text-blue-600 leading-none whitespace-nowrap tracking-[-0.04em]">
              Hi, I am GOPI
            </h1>
          </div>

          {/* Layer 2: Character Image */}
          <div className="absolute left-1/2 top-[20px] -translate-x-1/2 z-20 w-fit">
            <img
              src="/assets/hero_image.png"
              alt="Gopi Character"
              className="h-[600px] w-auto object-contain"
            />
          </div>

          {/* Layer 3: Foreground Text - "Graphic Designer" */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[50px] z-30 w-fit">
            <p className="text-[70px] font-black text-gray-900 leading-[0.9] whitespace-nowrap tracking-[-0.04em]">
              Graphic Designer
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Hero Container - Large screens */}
      <div className="hidden lg:block relative max-w-[1400px] mx-auto h-[820px] bg-white">
        {/* Layer 1: Background Text - "Hi, I am GOPI" */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[100px] lg:top-[120px] xl:top-[120px] z-10 w-fit">
          <h1 className="text-[100px] lg:text-[130px] xl:text-[130px] font-extrabold text-blue-600 leading-none whitespace-nowrap tracking-[-0.04em]">
            Hi, I am GOPI
          </h1>
        </div>

        {/* Layer 2: Character Image - Centered horizontally */}
        <div className="absolute left-1/2 top-[20px] lg:top-[20px] xl:top-[20px] -translate-x-1/2 z-20 w-fit">
          <img
            src="/assets/hero_image.png"
            alt="Gopi Character"
            className="h-[700px] lg:h-[850px] xl:h-[918px] w-auto object-contain"
          />
        </div>

        {/* Layer 3: Foreground Text - "Graphic Designer" */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[50px] lg:bottom-[60px] xl:bottom-[60px] z-30 w-fit">
          <p className="text-[90px] lg:text-[120px] xl:text-[120px] font-black text-gray-900 leading-[0.9] whitespace-nowrap tracking-[-0.04em]">
            Graphic Designer
          </p>
        </div>
      </div>
    </section>
  )
}
