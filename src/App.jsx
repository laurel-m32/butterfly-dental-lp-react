import Header from './components/Header'
import Hero from './components/Hero'
import TeamSection from './components/TeamSection'
import DoctorSection from './components/DoctorSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

// Landing page config - easily customizable
const config = {
  practice: {
    name: "Butterfly Dental Care",
    phone: "(408) 255-2011",
    phoneLink: "+14082552011",
    address: "4302 Moorpark Ave, San Jose, CA 95129",
    hours: "Mon-Sat: 8:30 AM - 5:30 PM",
  },
  branding: {
    logo: "https://www.butterflydental.net/wp-content/uploads/2021/06/Butterfly-Dental-Care-B3-1-300x110.png",
    teamPhoto: "https://www.butterflydental.net/wp-content/uploads/2025/12/IMG_5145-1024x683.jpg",
    doctorPhoto: "https://www.butterflydental.net/wp-content/uploads/2025/11/30010825912_8310388d72_o-circle-fotor-20251113133653.png",
  },
  doctor: {
    name: "Dr. Jianye Chen",
    title: "Your San Jose Dentist",
    bio: "Dr. Jianye Chen is an experienced San Jose dentist with over 18 years in dentistry. She founded Butterfly Dental Care in 2010 and is a skilled cosmetic dentist, offering advanced procedures including dental implants, gum surgery, and bone grafting. She is a Fellow of the International Congress of Implantology (ICOI).",
  },
  offer: {
    headline: "First Visit Special: Exam & X-Rays for $99",
    subtext: "Claim your $99 exam & x-rays special",
  },
  form: {
    embedUrl: "https://api.leadconnectorhq.com/widget/form/zU542pK9NNySrFY5wj9s",
    embedId: "zU542pK9NNySrFY5wj9s",
  },
  trustBadges: [
    "⭐ 4.8 Stars (118+ Reviews)",
    "🏆 14+ Years in Business",
    "💳 We Maximize Insurance",
    "😌 Dental Anxiety Help",
  ],
  testimonials: [
    { text: "They have taken great care of my Dad, who is 92 years old. Wonderful, caring staff!" },
    { text: "Dr. Chen cares about her patients. I commute an hour to see her. Exceptional!" },
    { text: "I had an emergency the day before Thanksgiving. They accommodated me immediately!" },
    { text: "Excellent services! They accommodated my unscheduled emergency appointment." },
    { text: "Very competent and professional. Amazing bedside manner — they greet you by name!" },
    { text: "Dr. Chen is a very good dentist. The whole team makes you feel comfortable." },
  ],
}

function App() {
  return (
    <div className="min-h-screen">
      <Header config={config} />
      <Hero config={config} />
      <TeamSection config={config} />
      <DoctorSection config={config} />
      <Features />
      <Testimonials testimonials={config.testimonials} />
      <CTA config={config} />
      <Footer config={config} />
      <ChatWidget />
    </div>
  )
}

export default App
