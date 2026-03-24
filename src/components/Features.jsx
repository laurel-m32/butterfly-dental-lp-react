const features = [
  { icon: "🔍", title: "Thorough Dental Exams", description: "Comprehensive exams that detect issues early." },
  { icon: "📷", title: "Digital X-Rays", description: "Safe, precise diagnostics with modern technology." },
  { icon: "😌", title: "Sedation Options", description: "Stress-free, painless visits for anxious patients." },
  { icon: "🚨", title: "Emergency Care", description: "Prompt treatment for toothaches & broken teeth." },
  { icon: "✨", title: "Cosmetic Dentistry", description: "Whitening, veneers, and smile makeovers." },
  { icon: "🦷", title: "Dental Implants", description: "Natural-looking, permanent tooth replacement." },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-white">Expert Care for Every Smile</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
