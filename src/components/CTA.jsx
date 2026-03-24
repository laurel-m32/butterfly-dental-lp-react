import { Phone } from 'lucide-react'

export default function CTA({ config }) {
  const { practice, offer } = config
  
  return (
    <section className="py-14 px-4 bg-accent text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Ready to Claim Your First Visit Special?
      </h2>
      <p className="text-lg opacity-90 mb-6">
        {offer.headline} — Limited time offer!
      </p>
      <a 
        href={`tel:${practice.phoneLink}`}
        className="btn-primary bg-primary text-lg"
      >
        <Phone size={22} />
        Call {practice.phone}
      </a>
    </section>
  )
}
