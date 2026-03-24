export default function DoctorSection({ config }) {
  const { branding, doctor } = config
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[250px_1fr] gap-10 items-center">
        <img 
          src={branding.doctorPhoto} 
          alt={doctor.name}
          className="w-60 h-60 rounded-full object-cover shadow-xl border-4 border-primary-light mx-auto"
        />
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            {doctor.name}
          </h2>
          <h3 className="text-lg text-primary font-medium mb-4">
            {doctor.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {doctor.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
