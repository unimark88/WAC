import { SectionBackground } from "@/components/section-decorations"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40">
      {/* Decorative background */}
      <SectionBackground variant="default" />
      
      {/* Abstract chart graphic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
        
        {/* Abstract candlestick chart lines - left side */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[400px] opacity-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Uptrend line */}
          <path d="M 0 350 Q 100 300 150 280 T 250 200 T 350 120 T 400 80" stroke="#00D4AA" strokeWidth="2" fill="none"/>
          {/* Candlestick wicks */}
          <line x1="50" y1="320" x2="50" y2="280" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="45" y="290" width="10" height="20" fill="#00D4AA"/>
          <line x1="100" y1="290" x2="100" y2="250" stroke="#0099FF" strokeWidth="2"/>
          <rect x="95" y="260" width="10" height="20" fill="#0099FF"/>
          <line x1="150" y1="270" x2="150" y2="220" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="145" y="230" width="10" height="30" fill="#00D4AA"/>
          <line x1="200" y1="230" x2="200" y2="180" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="195" y="190" width="10" height="25" fill="#00D4AA"/>
          <line x1="250" y1="200" x2="250" y2="150" stroke="#0099FF" strokeWidth="2"/>
          <rect x="245" y="160" width="10" height="25" fill="#0099FF"/>
          <line x1="300" y1="160" x2="300" y2="110" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="295" y="120" width="10" height="30" fill="#00D4AA"/>
        </svg>
        
        {/* Abstract candlestick chart lines - right side */}
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[400px] opacity-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Moving average line */}
          <path d="M 0 200 Q 80 180 150 220 T 280 160 T 400 180" stroke="#0099FF" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
          {/* Candlestick wicks */}
          <line x1="100" y1="220" x2="100" y2="170" stroke="#0099FF" strokeWidth="2"/>
          <rect x="95" y="185" width="10" height="25" fill="#0099FF"/>
          <line x1="150" y1="240" x2="150" y2="190" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="145" y="200" width="10" height="30" fill="#00D4AA"/>
          <line x1="200" y1="200" x2="200" y2="150" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="195" y="160" width="10" height="25" fill="#00D4AA"/>
          <line x1="250" y1="180" x2="250" y2="130" stroke="#0099FF" strokeWidth="2"/>
          <rect x="245" y="145" width="10" height="20" fill="#0099FF"/>
          <line x1="300" y1="190" x2="300" y2="140" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="295" y="150" width="10" height="30" fill="#00D4AA"/>
          <line x1="350" y1="170" x2="350" y2="130" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="345" y="140" width="10" height="20" fill="#00D4AA"/>
        </svg>
        
        {/* Glow accents */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[300px] bg-[#0099FF]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[300px] bg-[#00D4AA]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
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
