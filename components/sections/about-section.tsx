import { SectionBackground } from "@/components/section-decorations"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40">
      {/* Decorative background */}
      <SectionBackground variant="default" />
      
      {/* Abstract Earth/Globe graphic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central abstract globe */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]">
          {/* Globe glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4AA]/10 via-transparent to-[#0099FF]/10 blur-[60px]" />
          
          {/* Globe SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle cx="200" cy="200" r="180" stroke="url(#globeGradient)" strokeWidth="1.5" fill="none"/>
            
            {/* Latitude lines */}
            <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#00D4AA" strokeWidth="0.8" fill="none" opacity="0.6"/>
            <ellipse cx="200" cy="200" rx="180" ry="120" stroke="#00D4AA" strokeWidth="0.8" fill="none" opacity="0.4"/>
            <ellipse cx="200" cy="200" rx="180" ry="160" stroke="#00D4AA" strokeWidth="0.8" fill="none" opacity="0.3"/>
            
            {/* Longitude lines */}
            <ellipse cx="200" cy="200" rx="60" ry="180" stroke="#0099FF" strokeWidth="0.8" fill="none" opacity="0.6"/>
            <ellipse cx="200" cy="200" rx="120" ry="180" stroke="#0099FF" strokeWidth="0.8" fill="none" opacity="0.4"/>
            <ellipse cx="200" cy="200" rx="160" ry="180" stroke="#0099FF" strokeWidth="0.8" fill="none" opacity="0.3"/>
            
            {/* Tilted longitude for 3D effect */}
            <ellipse cx="200" cy="200" rx="90" ry="180" stroke="#00D4AA" strokeWidth="0.8" fill="none" opacity="0.5" transform="rotate(30 200 200)"/>
            <ellipse cx="200" cy="200" rx="90" ry="180" stroke="#0099FF" strokeWidth="0.8" fill="none" opacity="0.5" transform="rotate(-30 200 200)"/>
            <ellipse cx="200" cy="200" rx="140" ry="180" stroke="#00D4AA" strokeWidth="0.8" fill="none" opacity="0.3" transform="rotate(60 200 200)"/>
            <ellipse cx="200" cy="200" rx="140" ry="180" stroke="#0099FF" strokeWidth="0.8" fill="none" opacity="0.3" transform="rotate(-60 200 200)"/>
            
            {/* Connection points / nodes representing global traders */}
            <circle cx="120" cy="140" r="4" fill="#00D4AA"/>
            <circle cx="280" cy="160" r="4" fill="#0099FF"/>
            <circle cx="200" cy="80" r="4" fill="#00D4AA"/>
            <circle cx="150" cy="260" r="4" fill="#0099FF"/>
            <circle cx="260" cy="280" r="4" fill="#00D4AA"/>
            <circle cx="100" cy="200" r="3" fill="#0099FF"/>
            <circle cx="300" cy="220" r="3" fill="#00D4AA"/>
            <circle cx="180" cy="320" r="3" fill="#0099FF"/>
            <circle cx="240" cy="100" r="3" fill="#00D4AA"/>
            
            {/* Connection lines between nodes */}
            <line x1="120" y1="140" x2="200" y2="80" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4"/>
            <line x1="200" y1="80" x2="280" y2="160" stroke="#0099FF" strokeWidth="0.5" opacity="0.4"/>
            <line x1="280" y1="160" x2="260" y2="280" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4"/>
            <line x1="120" y1="140" x2="150" y2="260" stroke="#0099FF" strokeWidth="0.5" opacity="0.4"/>
            <line x1="150" y1="260" x2="260" y2="280" stroke="#00D4AA" strokeWidth="0.5" opacity="0.4"/>
            <line x1="100" y1="200" x2="120" y2="140" stroke="#0099FF" strokeWidth="0.5" opacity="0.3"/>
            <line x1="300" y1="220" x2="280" y2="160" stroke="#00D4AA" strokeWidth="0.5" opacity="0.3"/>
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4AA"/>
                <stop offset="50%" stopColor="#0099FF"/>
                <stop offset="100%" stopColor="#00D4AA"/>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Orbiting ring */}
          <div className="absolute inset-[-20px] md:inset-[-30px]">
            <svg className="w-full h-full opacity-15" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="220" cy="220" rx="210" ry="70" stroke="url(#orbitGradient)" strokeWidth="1" fill="none" transform="rotate(-20 220 220)"/>
              <defs>
                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D4AA" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#0099FF"/>
                  <stop offset="100%" stopColor="#00D4AA" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Additional glow accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00D4AA]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0099FF]/6 rounded-full blur-[80px]" />
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
        <div className="space-y-5 text-zinc-300 text-sm md:text-base leading-relaxed">
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
            <div className="mt-2 text-xs md:text-sm text-zinc-400 uppercase tracking-wider">
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
            <div className="mt-2 text-xs md:text-sm text-zinc-400 uppercase tracking-wider">
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
            <div className="mt-2 text-xs md:text-sm text-zinc-400 uppercase tracking-wider">
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
            <div className="mt-2 text-xs md:text-sm text-zinc-400 uppercase tracking-wider">
              Rankings
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
