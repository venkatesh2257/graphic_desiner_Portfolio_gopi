interface PortfolioCardProps {
  image: string
  category: string
  title: string
  description: string
}

export default function PortfolioCard({ image, category, title, description }: PortfolioCardProps) {
  return (
    <div className="flex-shrink-0 w-[359px] h-[559px] rounded-[45px] bg-white overflow-hidden shadow-lg flex flex-col transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Image Section - 55% height (307px) */}
      <div className="relative h-[307px] w-full overflow-hidden rounded-t-[45px]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Text Section - 45% height (252px) */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-2">{category}</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

