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
    <section id="prizes" className="relative py-12 md:py-16 lg:py-20 bg-[#08080a]">
      {/* Decorative background */}
      <SectionBackground variant="alt" />
      
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0099FF]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00D4AA]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
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
