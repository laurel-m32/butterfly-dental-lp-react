export default function Hero({ config }) {
  const { offer, trustBadges, form } = config
  
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-8 items-start">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-block bg-white text-primary-dark px-5 py-3 rounded-lg font-semibold text-lg mb-6 shadow-lg">
            🎉 {offer.headline}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Best Dentist in Austin
          </h1>
          
          <p className="text-lg md:text-xl opacity-95 mb-6 max-w-xl">
            Expert dental care for the whole family. Gentle dentistry, modern technology, and a welcoming smile.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {trustBadges.map((badge, index) => (
              <span 
                key={index}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        
        {/* Form Card */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <h2 className="text-gray-800 text-xl font-bold text-center mb-1">
            Schedule Your Visit
          </h2>
          <p className="text-gray-500 text-center text-sm mb-4">
            {offer.subtext}
          </p>
          
          <iframe 
            src={form.embedUrl}
            className="w-full min-h-[500px] border-none"
            scrolling="no"
            id={form.embedId}
          />
        </div>
      </div>
    </section>
  )
}
