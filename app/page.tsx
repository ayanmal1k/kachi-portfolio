import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import { PowBanner } from '@/components/pow-banner'
import { ServicesCards } from '@/components/services-cards'
import { ProofOfWork } from '@/components/proof-of-work'
import { FeedbackSections } from '@/components/feedback-sections'
import { SocialSection } from '@/components/social-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#f4f4f5]">
      <Navbar />
      <HeroSection />
      <PowBanner />
      <ServicesCards />
      <ProofOfWork />
      <FeedbackSections />
      <SocialSection />
    </main>
  )
}
