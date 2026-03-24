import { Phone } from 'lucide-react'

export default function Header({ config }) {
  const { practice, branding } = config
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img 
          src={branding.logo} 
          alt={practice.name} 
          className="h-12 md:h-14"
        />
        <a 
          href={`tel:${practice.phoneLink}`}
          className="btn-primary text-sm md:text-base"
        >
          <Phone size={18} />
          {practice.phone}
        </a>
      </div>
    </header>
  )
}
