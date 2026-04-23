import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { RulesSection } from "@/components/sections/rules-section"
import { ScheduleSection } from "@/components/sections/schedule-section"
import { LeaderboardSection } from "@/components/sections/leaderboard-section"
import { PrizesSection } from "@/components/sections/prizes-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#050507]">
      <Navigation />
      <HeroSection />
      <RulesSection />
      <ScheduleSection />
      <LeaderboardSection />
      <PrizesSection />
      <ContactSection />
    </main>
  )
}
