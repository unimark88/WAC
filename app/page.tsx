import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { RulesSection } from "@/components/sections/rules-section"
import { LeaderboardSection } from "@/components/sections/leaderboard-section"
import { PrizesSection } from "@/components/sections/prizes-section"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-decorations"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#050507]">
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <RulesSection />
      <SectionDivider />
      <LeaderboardSection />
      <SectionDivider />
      <PrizesSection />
      <Footer />
    </main>
  )
}
