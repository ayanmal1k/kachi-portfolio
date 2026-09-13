import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import { PowBanner } from '@/components/pow-banner'
import { ServicesCards } from '@/components/services-cards'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#f4f4f5]">
      <Navbar />
      <HeroSection />
      <PowBanner />
      <ServicesCards />
    </main>
  )
}
