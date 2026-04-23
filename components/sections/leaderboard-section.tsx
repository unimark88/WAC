export function LeaderboardSection() {
  const traders = [
    { rank: 1, name: "Alex Chen", country: "Singapore", profit: 48250 },
    { rank: 2, name: "Marcus Weber", country: "Germany", profit: 41780 },
    { rank: 3, name: "Yuki Tanaka", country: "Japan", profit: 38920 },
    { rank: 4, name: "Elena Rossi", country: "Italy", profit: 35410 },
    { rank: 5, name: "James Mitchell", country: "United Kingdom", profit: 31850 },
    { rank: 6, name: "Sofia Martinez", country: "Spain", profit: 28340 },
    { rank: 7, name: "David Kim", country: "South Korea", profit: 25680 },
    { rank: 8, name: "Anna Kowalski", country: "Poland", profit: 22150 },
    { rank: 9, name: "Lucas Silva", country: "Brazil", profit: 19820 },
    { rank: 10, name: "Nina Petrova", country: "Russia", profit: 17450 },
    { rank: 11, name: "Robert Thompson", country: "Australia", profit: 12340 },
    { rank: 12, name: "Marie Dupont", country: "France", profit: 8920 },
    { rank: 13, name: "Ahmed Hassan", country: "UAE", profit: 4560 },
    { rank: 14, name: "Chen Wei", country: "China", profit: -1250 },
    { rank: 15, name: "Michael Brown", country: "Canada", profit: -2350 },
    { rank: 16, name: "Lisa Anderson", country: "Sweden", profit: -4820 },
    { rank: 17, name: "Carlos Mendez", country: "Mexico", profit: -7150 },
    { rank: 18, name: "Tom Williams", country: "USA", profit: -9480 },
  ]

  const formatProfit = (profit: number) => {
    const formatted = Math.abs(profit).toLocaleString()
    return profit >= 0 ? `+$${formatted}` : `-$${formatted}`
  }

  return (
    <section id="leaderboard" className="relative py-32 md:py-40 lg:py-48">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-[#00D4AA]/3 rounded-full blur-[200px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 md:mb-28 text-center">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#00D4AA]">
            Live Rankings
          </span>
          <h2 
            className="mt-4 text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-[0.02em] text-white"
            style={{ fontFamily: 'var(--font-bebas), system-ui' }}
          >
            Leaderboard
          </h2>
          <p className="mt-6 text-zinc-500 text-sm">
            Rankings will be updated once the competition begins
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-800/50">
                <th className="pb-4 text-left text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-normal">Rank</th>
                <th className="pb-4 text-left text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-normal">Trader</th>
                <th className="pb-4 text-left text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-normal">Country</th>
                <th className="pb-4 text-right text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-normal">Profit</th>
              </tr>
            </thead>
            <tbody>
              {traders.map((trader, index) => (
                <tr 
                  key={trader.rank}
                  className="border-b border-zinc-800/30 hover:bg-zinc-900/30 transition-colors"
                >
                  <td className="py-5">
                    <span 
                      className={`text-2xl ${index < 3 ? 'text-white' : 'text-zinc-700'}`}
                      style={{ fontFamily: 'var(--font-bebas), system-ui' }}
                    >
                      {String(trader.rank).padStart(2, '0')}
                    </span>
                  </td>
                  <td className="py-5 text-zinc-400">{trader.name}</td>
                  <td className="py-5 text-zinc-500 text-sm">{trader.country}</td>
                  <td className={`py-5 text-right font-medium ${trader.profit >= 0 ? 'text-[#0099FF]' : 'text-[#FF4444]'}`}>
                    {formatProfit(trader.profit)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
