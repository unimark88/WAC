export function LeaderboardSection() {
  const traders = [
    { rank: 1, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 2, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 3, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 4, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 5, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 6, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 7, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 8, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 9, name: "—", country: "—", profit: "—", drawdown: "—" },
    { rank: 10, name: "—", country: "—", profit: "—", drawdown: "—" },
  ]

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
                <th className="pb-4 text-right text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-normal">Profit %</th>
                <th className="pb-4 text-right text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-normal">Max DD</th>
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
                  <td className="py-5 text-right text-zinc-400">{trader.profit}</td>
                  <td className="py-5 text-right text-zinc-500 text-sm">{trader.drawdown}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
