export default function Footer({ config }) {
  const { practice } = config
  
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 text-center">
      <div className="mb-4">
        <strong className="text-lg">{practice.name}</strong>
        <p className="text-gray-300 mt-1">{practice.address}</p>
        <p className="text-gray-300">{practice.hours}</p>
      </div>
      
      <div className="text-sm text-gray-400">
        <a href="#" className="hover:text-white mx-2">Privacy Policy</a>
        |
        <a href="#" className="hover:text-white mx-2">Terms of Service</a>
        <p className="mt-2">© {new Date().getFullYear()} {practice.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
