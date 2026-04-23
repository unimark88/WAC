export function ScheduleSection() {
  const phases = [
    {
      phase: "Registration",
      date: "June 1 - June 30, 2026",
      status: "upcoming",
      description: "Open enrollment period for all eligible participants"
    },
    {
      phase: "Qualification Round",
      date: "July 15 - August 15, 2026", 
      status: "upcoming",
      description: "Initial trading period to qualify for the main championship"
    },
    {
      phase: "Quarter Finals",
      date: "September 1 - September 21, 2026",
      status: "upcoming",
      description: "Top 500 traders compete for semi-final placement"
    },
    {
      phase: "Semi Finals",
      date: "October 1 - October 14, 2026",
      status: "upcoming",
      description: "Top 100 traders advance to the final round"
    },
    {
      phase: "Grand Finals",
      date: "November 1 - November 30, 2026",
      status: "upcoming",
      description: "Top 25 traders compete for the championship title"
    },
    {
      phase: "Awards Ceremony",
      date: "December 15, 2026",
      status: "upcoming",
      description: "Live virtual ceremony announcing winners and prize distribution"
    }
  ]

  return (
    <section id="schedule" className="relative py-32 md:py-40 lg:py-48 bg-[#08080a]">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0099FF]/5 rounded-full blur-[180px] translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 md:mb-28 text-right">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#0099FF]">
            Key Dates
          </span>
          <h2 
            className="mt-4 text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-[0.02em] text-white"
            style={{ fontFamily: 'var(--font-bebas), system-ui' }}
          >
            Schedule
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, index) => (
              <div 
                key={phase.phase}
                className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:py-10`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-[#050507] md:-translate-x-1/2 md:-translate-y-1/2" />
                
                {/* Content */}
                <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    {phase.date}
                  </span>
                  <h3 className="mt-2 text-xl md:text-2xl font-medium text-white">
                    {phase.phase}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
