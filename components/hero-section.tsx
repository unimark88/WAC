import { HeroBackground } from "./hero-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background layers */}
      <HeroBackground />
      
      {/* Main content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        {/* Headline */}
        <div className="text-center space-y-1 md:space-y-2">
          {/* WORLD */}
          <div 
            className="text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-[0.9] tracking-[0.35em] md:tracking-[0.5em] text-zinc-500"
            style={{
              fontFamily: 'var(--font-bebas), system-ui',
            }}
          >
            WORLD
          </div>
          
          {/* ALPHA - dominant */}
          <div 
            className="text-[6rem] md:text-[9rem] lg:text-[13rem] xl:text-[16rem] leading-[0.8] tracking-[0.03em] md:tracking-[0.08em]"
            style={{
              fontFamily: 'var(--font-bebas), system-ui',
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.5) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ALPHA
          </div>
          
          {/* CHAMPIONSHIP */}
          <div 
            className="text-[2.2rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[0.9] tracking-[0.25em] md:tracking-[0.5em] text-zinc-500"
            style={{
              fontFamily: 'var(--font-bebas), system-ui',
            }}
          >
            CHAMPIONSHIP
          </div>
        </div>
        
        {/* Coming Soon - understated */}
        <div className="mt-16 md:mt-24 lg:mt-32">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-zinc-600">
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  )
}
