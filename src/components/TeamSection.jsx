export default function TeamSection({ config }) {
  const { branding } = config
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img 
          src={branding.teamPhoto} 
          alt="Butterfly Dental Care Team"
          className="rounded-2xl shadow-xl w-full"
        />
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Amazing Team
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            At Butterfly Dental Care, we believe in taking customer care to new heights. From your first interaction, we do all we can to make you feel relaxed and informed about your dental care.
          </p>
          <p className="text-gray-600 text-lg">
            With the best dental and customer care staff in the San Jose area, we are ready and happy to help you through your dental care needs.
          </p>
        </div>
      </div>
    </section>
  )
}
