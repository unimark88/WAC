import { SectionBackground } from "@/components/section-decorations"

export function RulesSection() {
  const rules = [
    {
      number: "01",
      title: "Eligibility",
      description: "Open to all traders worldwide aged 18 and above. Participants must have a verified trading account and agree to the competition terms."
    },
    {
      number: "02", 
      title: "Trading Period",
      description: "The championship runs for 30 consecutive trading days. All positions must be closed by the final day. Weekend and holiday periods are excluded."
    },
    {
      number: "03",
      title: "Starting Capital",
      description: "Each participant begins with a standardized virtual capital of $100,000. No additional deposits or withdrawals are permitted during the competition."
    },
    {
      number: "04",
      title: "Instruments",
      description: "Trading is limited to major and minor forex pairs, gold (XAU/USD), and major indices. Cryptocurrency pairs are excluded from this championship."
    },
    {
      number: "05",
      title: "Risk Management",
      description: "Maximum leverage is capped at 1:100. No single position may exceed 10% of account equity. Hedging within the same instrument is prohibited."
    },
    {
      number: "06",
      title: "Scoring",
      description: "Rankings are determined by net profit percentage. In case of a tie, the trader with lower maximum drawdown takes precedence."
    }
  ]

  return (
    <section id="rules" className="relative py-32 md:py-40 lg:py-48">
      {/* Decorative background */}
      <SectionBackground variant="alt" />
      
      {/* Abstract trading interface graphic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side - abstract trading terminal */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[400px] md:w-[500px] h-[600px] opacity-15" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Terminal frame */}
          <rect x="20" y="50" width="360" height="500" rx="8" stroke="#00D4AA" strokeWidth="1" fill="none"/>
          
          {/* Header bar */}
          <rect x="20" y="50" width="360" height="40" fill="#00D4AA" fillOpacity="0.1"/>
          <circle cx="45" cy="70" r="6" fill="#00D4AA" fillOpacity="0.5"/>
          <circle cx="65" cy="70" r="6" fill="#0099FF" fillOpacity="0.5"/>
          <circle cx="85" cy="70" r="6" fill="#00D4AA" fillOpacity="0.3"/>
          
          {/* Chart area lines */}
          <line x1="40" y1="120" x2="360" y2="120" stroke="#00D4AA" strokeWidth="0.5" opacity="0.3"/>
          <line x1="40" y1="180" x2="360" y2="180" stroke="#00D4AA" strokeWidth="0.5" opacity="0.3"/>
          <line x1="40" y1="240" x2="360" y2="240" stroke="#00D4AA" strokeWidth="0.5" opacity="0.3"/>
          <line x1="40" y1="300" x2="360" y2="300" stroke="#00D4AA" strokeWidth="0.5" opacity="0.3"/>
          
          {/* Candlestick pattern */}
          <rect x="60" y="200" width="8" height="60" fill="#00D4AA"/>
          <line x1="64" y1="180" x2="64" y2="280" stroke="#00D4AA" strokeWidth="1"/>
          <rect x="90" y="180" width="8" height="40" fill="#0099FF"/>
          <line x1="94" y1="160" x2="94" y2="240" stroke="#0099FF" strokeWidth="1"/>
          <rect x="120" y="150" width="8" height="50" fill="#00D4AA"/>
          <line x1="124" y1="130" x2="124" y2="220" stroke="#00D4AA" strokeWidth="1"/>
          <rect x="150" y="170" width="8" height="30" fill="#00D4AA"/>
          <line x1="154" y1="150" x2="154" y2="220" stroke="#00D4AA" strokeWidth="1"/>
          <rect x="180" y="190" width="8" height="40" fill="#0099FF"/>
          <line x1="184" y1="170" x2="184" y2="250" stroke="#0099FF" strokeWidth="1"/>
          <rect x="210" y="160" width="8" height="50" fill="#00D4AA"/>
          <line x1="214" y1="140" x2="214" y2="230" stroke="#00D4AA" strokeWidth="1"/>
          
          {/* Data rows */}
          <rect x="40" y="340" width="320" height="30" fill="#00D4AA" fillOpacity="0.05"/>
          <rect x="40" y="380" width="320" height="30" fill="#0099FF" fillOpacity="0.05"/>
          <rect x="40" y="420" width="320" height="30" fill="#00D4AA" fillOpacity="0.05"/>
          <rect x="40" y="460" width="320" height="30" fill="#0099FF" fillOpacity="0.05"/>
        </svg>
        
        {/* Right side - abstract checklist/rules graphic */}
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[350px] md:w-[450px] h-[500px] opacity-15" viewBox="0 0 350 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document frame */}
          <rect x="30" y="30" width="290" height="440" rx="4" stroke="#0099FF" strokeWidth="1" fill="none"/>
          
          {/* Header */}
          <rect x="50" y="60" width="120" height="8" fill="#0099FF" fillOpacity="0.4"/>
          <rect x="50" y="80" width="200" height="4" fill="#0099FF" fillOpacity="0.2"/>
          
          {/* Checklist items */}
          <rect x="50" y="120" width="20" height="20" rx="4" stroke="#00D4AA" strokeWidth="1.5"/>
          <path d="M 55 130 L 60 135 L 68 125" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="85" y="125" width="180" height="6" fill="#00D4AA" fillOpacity="0.3"/>
          
          <rect x="50" y="170" width="20" height="20" rx="4" stroke="#00D4AA" strokeWidth="1.5"/>
          <path d="M 55 180 L 60 185 L 68 175" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="85" y="175" width="160" height="6" fill="#00D4AA" fillOpacity="0.3"/>
          
          <rect x="50" y="220" width="20" height="20" rx="4" stroke="#0099FF" strokeWidth="1.5"/>
          <path d="M 55 230 L 60 235 L 68 225" stroke="#0099FF" strokeWidth="2"/>
          <rect x="85" y="225" width="200" height="6" fill="#0099FF" fillOpacity="0.3"/>
          
          <rect x="50" y="270" width="20" height="20" rx="4" stroke="#00D4AA" strokeWidth="1.5"/>
          <path d="M 55 280 L 60 285 L 68 275" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="85" y="275" width="140" height="6" fill="#00D4AA" fillOpacity="0.3"/>
          
          <rect x="50" y="320" width="20" height="20" rx="4" stroke="#0099FF" strokeWidth="1.5"/>
          <path d="M 55 330 L 60 335 L 68 325" stroke="#0099FF" strokeWidth="2"/>
          <rect x="85" y="325" width="180" height="6" fill="#0099FF" fillOpacity="0.3"/>
          
          <rect x="50" y="370" width="20" height="20" rx="4" stroke="#00D4AA" strokeWidth="1.5"/>
          <path d="M 55 380 L 60 385 L 68 375" stroke="#00D4AA" strokeWidth="2"/>
          <rect x="85" y="375" width="150" height="6" fill="#00D4AA" fillOpacity="0.3"/>
          
          {/* Footer line */}
          <line x1="50" y1="430" x2="300" y2="430" stroke="#0099FF" strokeWidth="0.5" opacity="0.5"/>
        </svg>
        
        {/* Glow accents */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00D4AA]/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0099FF]/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 md:mb-28">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#00D4AA]">
            Competition Guidelines
          </span>
          <h2 
            className="mt-4 text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-[0.02em] text-white"
            style={{ fontFamily: 'var(--font-bebas), system-ui' }}
          >
            Rules
          </h2>
        </div>

        {/* Rules grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
          {rules.map((rule) => (
            <div key={rule.number} className="group">
              <div className="flex items-start gap-6">
                <span className="text-[2.5rem] md:text-[3rem] leading-none tracking-tight text-zinc-600 group-hover:text-zinc-500 transition-colors" style={{ fontFamily: 'var(--font-bebas), system-ui' }}>
                  {rule.number}
                </span>
                <div className="pt-2">
                  <h3 className="text-lg md:text-xl font-medium text-white mb-3">
                    {rule.title}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-zinc-400">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
