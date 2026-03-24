export default function Testimonials({ testimonials }) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-gray-800">Hundreds of Happy Patients</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
