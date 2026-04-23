import { SectionBackground } from "@/components/section-decorations"

export function PrizesSection() {
  const prizes = [
    {
      place: "1st",
      amount: "$100,000",
      extras: ["Championship Trophy", "Funded Account ($500K)", "VIP Mentorship Program"]
    },
    {
      place: "2nd", 
      amount: "$50,000",
      extras: ["Silver Medal", "Funded Account ($250K)", "1-Year Premium Signals"]
    },
    {
      place: "3rd",
      amount: "$25,000",
      extras: ["Bronze Medal", "Funded Account ($100K)", "Trading Course Bundle"]
    }
  ]

  const additionalPrizes = [
    { place: "4th - 10th", amount: "$5,000 each" },
    { place: "11th - 25th", amount: "$1,000 each" },
    { place: "Best Risk Management", amount: "$10,000" },
    { place: "Most Consistent", amount: "$10,000" },
  ]

  return (
    <section id="prizes" className="relative py-32 md:py-40 lg:py-48 bg-[#08080a]">
      {/* Decorative background */}
      <SectionBackground variant="alt" />
      
      {/* Abstract trophy/podium graphic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central trophy graphic */}
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] opacity-[0.12]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trophy cup */}
          <path d="M 250 150 L 250 120 L 350 120 L 350 150" stroke="#00D4AA" strokeWidth="2" fill="none"/>
          <path d="M 240 150 Q 240 280 300 320 Q 360 280 360 150" stroke="url(#trophyGradient)" strokeWidth="2" fill="none"/>
          
          {/* Trophy handles */}
          <path d="M 240 170 Q 180 170 180 220 Q 180 270 230 280" stroke="#0099FF" strokeWidth="1.5" fill="none"/>
          <path d="M 360 170 Q 420 170 420 220 Q 420 270 370 280" stroke="#0099FF" strokeWidth="1.5" fill="none"/>
          
          {/* Trophy stem */}
          <line x1="300" y1="320" x2="300" y2="380" stroke="#00D4AA" strokeWidth="2"/>
          <ellipse cx="300" cy="385" rx="30" ry="8" stroke="#00D4AA" strokeWidth="1.5" fill="none"/>
          
          {/* Trophy base */}
          <rect x="250" y="395" width="100" height="15" rx="2" stroke="#0099FF" strokeWidth="1.5" fill="none"/>
          <rect x="230" y="415" width="140" height="20" rx="3" stroke="#00D4AA" strokeWidth="2" fill="none"/>
          
          {/* Star burst behind trophy */}
          <line x1="300" y1="60" x2="300" y2="100" stroke="#00D4AA" strokeWidth="1" opacity="0.5"/>
          <line x1="250" y1="80" x2="270" y2="110" stroke="#0099FF" strokeWidth="1" opacity="0.5"/>
          <line x1="350" y1="80" x2="330" y2="110" stroke="#0099FF" strokeWidth="1" opacity="0.5"/>
          <line x1="220" y1="120" x2="245" y2="130" stroke="#00D4AA" strokeWidth="1" opacity="0.4"/>
          <line x1="380" y1="120" x2="355" y2="130" stroke="#00D4AA" strokeWidth="1" opacity="0.4"/>
          
          {/* Podium below */}
          {/* 1st place - center, tallest */}
          <rect x="260" y="480" width="80" height="100" stroke="#00D4AA" strokeWidth="2" fill="none"/>
          <text x="300" y="520" textAnchor="middle" fill="#00D4AA" fontSize="24" fontWeight="bold">1</text>
          
          {/* 2nd place - left */}
          <rect x="160" y="510" width="80" height="70" stroke="#0099FF" strokeWidth="1.5" fill="none"/>
          <text x="200" y="545" textAnchor="middle" fill="#0099FF" fontSize="20" fontWeight="bold">2</text>
          
          {/* 3rd place - right */}
          <rect x="360" y="530" width="80" height="50" stroke="#0099FF" strokeWidth="1.5" fill="none"/>
          <text x="400" y="560" textAnchor="middle" fill="#0099FF" fontSize="18" fontWeight="bold">3</text>
          
          {/* Decorative circles */}
          <circle cx="150" cy="200" r="40" stroke="#00D4AA" strokeWidth="0.5" fill="none" opacity="0.3"/>
          <circle cx="450" cy="200" r="40" stroke="#0099FF" strokeWidth="0.5" fill="none" opacity="0.3"/>
          <circle cx="150" cy="200" r="60" stroke="#00D4AA" strokeWidth="0.5" fill="none" opacity="0.2"/>
          <circle cx="450" cy="200" r="60" stroke="#0099FF" strokeWidth="0.5" fill="none" opacity="0.2"/>
          
          {/* Confetti lines */}
          <line x1="120" y1="150" x2="140" y2="170" stroke="#00D4AA" strokeWidth="2" opacity="0.4"/>
          <line x1="480" y1="150" x2="460" y2="170" stroke="#0099FF" strokeWidth="2" opacity="0.4"/>
          <line x1="100" y1="250" x2="130" y2="240" stroke="#0099FF" strokeWidth="2" opacity="0.3"/>
          <line x1="500" y1="250" x2="470" y2="240" stroke="#00D4AA" strokeWidth="2" opacity="0.3"/>
          <line x1="130" y1="320" x2="150" y2="300" stroke="#00D4AA" strokeWidth="2" opacity="0.3"/>
          <line x1="470" y1="320" x2="450" y2="300" stroke="#0099FF" strokeWidth="2" opacity="0.3"/>
          
          {/* Small diamonds */}
          <path d="M 80 180 L 90 190 L 80 200 L 70 190 Z" stroke="#00D4AA" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M 520 180 L 530 190 L 520 200 L 510 190 Z" stroke="#0099FF" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M 100 350 L 110 360 L 100 370 L 90 360 Z" stroke="#0099FF" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M 500 350 L 510 360 L 500 370 L 490 360 Z" stroke="#00D4AA" strokeWidth="1" fill="none" opacity="0.3"/>
          
          <defs>
            <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA"/>
              <stop offset="100%" stopColor="#0099FF"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glow accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D4AA]/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-[#0099FF]/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-[#00D4AA]/5 rounded-full blur-[100px] translate-x-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 md:mb-28 text-center">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#0099FF]">
            Rewards
          </span>
          <h2 
            className="mt-4 text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-[0.02em] text-white"
            style={{ fontFamily: 'var(--font-bebas), system-ui' }}
          >
            Prizes
          </h2>
          <p className="mt-6 text-zinc-400 text-sm max-w-md mx-auto">
            Over $250,000 in total prizes across all categories
          </p>
        </div>

        {/* Top 3 prizes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={prize.place}
              className={`relative p-8 md:p-10 border border-zinc-800/50 bg-zinc-900/20 ${index === 0 ? 'md:-mt-6 md:pb-12' : ''}`}
            >
              {/* Place badge */}
              <div className="mb-6">
                <span 
                  className="text-[4rem] md:text-[5rem] leading-none text-zinc-600"
                  style={{ fontFamily: 'var(--font-bebas), system-ui' }}
                >
                  {prize.place}
                </span>
              </div>
              
              {/* Amount */}
              <div 
                className={`text-[2.5rem] md:text-[3rem] leading-none mb-6 ${index === 0 ? 'text-[#00D4AA]' : 'text-white'}`}
                style={{ fontFamily: 'var(--font-bebas), system-ui' }}
              >
                {prize.amount}
              </div>
              
              {/* Extras */}
              <ul className="space-y-3">
                {prize.extras.map((extra) => (
                  <li key={extra} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-700 mt-2 shrink-0" />
                    {extra}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional prizes */}
        <div className="border-t border-zinc-800/50 pt-12">
          <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Additional Prizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPrizes.map((prize) => (
              <div key={prize.place}>
                <div className="text-sm text-zinc-300 mb-1">{prize.place}</div>
                <div className="text-xl text-white" style={{ fontFamily: 'var(--font-bebas), system-ui' }}>
                  {prize.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
