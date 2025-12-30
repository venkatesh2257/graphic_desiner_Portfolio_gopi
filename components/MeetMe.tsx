export default function MeetMe() {
  return (
    <section id="about" className="relative bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Mobile Layout - Stack vertically */}
      <div className="md:hidden px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 leading-tight text-center">
            Meet Me
          </h2>
          <img
            src="/assets/Gopi_standing.png"
            alt="Gopi Standing"
            className="h-[350px] sm:h-[450px] w-auto object-contain"
          />
          <p className="text-lg sm:text-xl font-bold text-gray-500 leading-loose text-center px-2">
            I'm a creative graphic designer with a passion for turning concepts into visuals that inspire. From logos and brand identities to marketing collaterals and digital creatives, I design with the goal of helping businesses communicate their story with clarity and style. For me, design isn't just decoration—it's strategy, emotion, and impact combined.
          </p>
          <div className="mt-6">
            <img
              src="/assets/Group 13.png"
              alt="Software Icons"
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Tablet Layout - Stack vertically */}
      <div className="hidden md:block lg:hidden max-w-[1400px] mx-auto px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-5xl font-bold text-blue-600 leading-tight text-center">
            Meet Me
          </h2>
          <img
            src="/assets/Gopi_standing.png"
            alt="Gopi Standing"
            className="h-[550px] w-auto object-contain"
          />
          <p className="text-2xl font-bold text-gray-500 leading-loose text-center max-w-3xl">
            I'm a creative graphic designer with a passion for turning concepts into visuals that inspire. From logos and brand identities to marketing collaterals and digital creatives, I design with the goal of helping businesses communicate their story with clarity and style. For me, design isn't just decoration—it's strategy, emotion, and impact combined.
          </p>
          <div className="mt-8">
            <img
              src="/assets/Group 13.png"
              alt="Software Icons"
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Two columns: text left, image right */}
      <div className="hidden lg:block max-w-[1400px] mx-auto px-8 xl:px-12">
        <div className="grid grid-cols-2 gap-6 xl:gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6 pt-8 pl-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight">
              Meet Me
            </h2>
            <p className="text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-500 leading-loose">
              I'm a creative graphic designer with a passion for turning concepts into visuals that inspire. From logos and brand identities to marketing collaterals and digital creatives, I design with the goal of helping businesses communicate their story with clarity and style. For me, design isn't just decoration—it's strategy, emotion, and impact combined.
            </p>
            <div className="mt-8">
              <img
                src="/assets/Group 13.png"
                alt="Software Icons"
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column - Character Image */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/Gopi_standing.png"
              alt="Gopi Standing"
              className="h-[600px] lg:h-[700px] xl:h-[750px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

