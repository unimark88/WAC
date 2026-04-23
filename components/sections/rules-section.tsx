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
    <section id="rules" className="relative py-16 md:py-24 lg:py-28">
      {/* Decorative background */}
      <SectionBackground variant="alt" />
      
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00D4AA]/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
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
