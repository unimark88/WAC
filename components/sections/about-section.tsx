export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[300px] bg-[#0099FF]/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[300px] bg-[#00D4AA]/3 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#00D4AA]">
            About The Championship
          </span>
          <h2 
            className="mt-4 text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[0.9] tracking-[0.02em] text-white"
            style={{ fontFamily: 'var(--font-bebas), system-ui' }}
          >
            World Alpha Championship
          </h2>
        </div>

        {/* SEO Content */}
        <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
          <p>
            The World Alpha Championship (WAC) is the premier global forex trading competition, bringing together the most skilled traders from around the world to compete for prestigious titles and substantial prize pools. Our championship provides a transparent, fair, and professional platform where traders can demonstrate their expertise in the foreign exchange markets.
          </p>
          
          <p>
            Participants trade on the MetaTrader 4 (MT4) platform, the industry-standard trading software trusted by millions of forex traders worldwide. Whether you specialize in technical analysis, fundamental trading, scalping, or swing trading strategies, the World Alpha Championship offers you the opportunity to prove your skills against elite competition from over 50 countries.
          </p>
          
          <p>
            Our competition features real-time leaderboard tracking, professional risk management guidelines, and a structured evaluation system that rewards consistent profitability and disciplined trading. From experienced hedge fund managers to independent retail traders, the WAC welcomes all skill levels to participate and compete for recognition in the global forex trading community.
          </p>

          <p>
            Join thousands of ambitious traders who have already registered for what promises to be the most exciting forex trading championship of the year. With substantial cash prizes, industry recognition, and the chance to network with fellow trading professionals, the World Alpha Championship is your gateway to establishing yourself among the world&apos;s top forex traders.
          </p>
        </div>

        {/* Key highlights */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div 
              className="text-[2.5rem] md:text-[3.5rem] text-white leading-none"
              style={{ fontFamily: 'var(--font-bebas), system-ui' }}
            >
              50+
            </div>
            <div className="mt-2 text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
              Countries
            </div>
          </div>
          <div className="text-center">
            <div 
              className="text-[2.5rem] md:text-[3.5rem] text-white leading-none"
              style={{ fontFamily: 'var(--font-bebas), system-ui' }}
            >
              $500K
            </div>
            <div className="mt-2 text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
              Prize Pool
            </div>
          </div>
          <div className="text-center">
            <div 
              className="text-[2.5rem] md:text-[3.5rem] text-white leading-none"
              style={{ fontFamily: 'var(--font-bebas), system-ui' }}
            >
              MT4
            </div>
            <div className="mt-2 text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
              Platform
            </div>
          </div>
          <div className="text-center">
            <div 
              className="text-[2.5rem] md:text-[3.5rem] text-white leading-none"
              style={{ fontFamily: 'var(--font-bebas), system-ui' }}
            >
              Live
            </div>
            <div className="mt-2 text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
              Rankings
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
