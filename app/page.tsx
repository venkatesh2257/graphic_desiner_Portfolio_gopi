import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MeetMe from '@/components/MeetMe'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <Header />
      <Hero />
      <MeetMe />
      <Portfolio />
    </main>
  )
}


