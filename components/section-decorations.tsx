export function SectionDivider() {
  return (
    <div className="relative h-32 md:h-48 overflow-hidden">
      {/* Center gradient line */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.3) 30%, rgba(0,153,255,0.3) 70%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Floating orbs */}
      <div 
        className="absolute left-[15%] top-1/4 w-2 h-2 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,170,0.6) 0%, transparent 70%)',
          boxShadow: '0 0 20px rgba(0,212,170,0.3)',
          animationDelay: '0s',
        }}
      />
      <div 
        className="absolute right-[20%] top-1/2 w-1.5 h-1.5 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(0,153,255,0.6) 0%, transparent 70%)',
          boxShadow: '0 0 15px rgba(0,153,255,0.3)',
          animationDelay: '1s',
        }}
      />
      <div 
        className="absolute left-[25%] bottom-1/4 w-1 h-1 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(0,153,255,0.5) 0%, transparent 70%)',
          boxShadow: '0 0 10px rgba(0,153,255,0.2)',
          animationDelay: '2s',
        }}
      />
      <div 
        className="absolute right-[15%] top-1/3 w-1 h-1 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,170,0.5) 0%, transparent 70%)',
          boxShadow: '0 0 10px rgba(0,212,170,0.2)',
          animationDelay: '1.5s',
        }}
      />
    </div>
  )
}

export function SideAccents() {
  return (
    <>
      {/* Left side accent */}
      <div className="fixed left-0 top-0 bottom-0 w-px pointer-events-none z-10 hidden lg:block">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.15) 30%, rgba(0,153,255,0.1) 50%, rgba(0,212,170,0.15) 70%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Right side accent */}
      <div className="fixed right-0 top-0 bottom-0 w-px pointer-events-none z-10 hidden lg:block">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,153,255,0.15) 30%, rgba(0,212,170,0.1) 50%, rgba(0,153,255,0.15) 70%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Left corner accents */}
      <div className="fixed left-4 top-1/4 pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-8 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(0,212,170,0.4) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-8 absolute top-0 left-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,212,170,0.4) 0%, transparent 100%)' }}
          />
        </div>
      </div>
      
      {/* Right corner accents */}
      <div className="fixed right-4 top-1/3 pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-8 h-px"
            style={{ background: 'linear-gradient(270deg, rgba(0,153,255,0.4) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-8 absolute top-0 right-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,153,255,0.4) 0%, transparent 100%)' }}
          />
        </div>
      </div>
      
      {/* Bottom left corner */}
      <div className="fixed left-4 bottom-1/4 pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-6 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(0,153,255,0.3) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-6 absolute bottom-0 left-0"
            style={{ background: 'linear-gradient(0deg, rgba(0,153,255,0.3) 0%, transparent 100%)' }}
          />
        </div>
      </div>
      
      {/* Bottom right corner */}
      <div className="fixed right-4 bottom-1/3 pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-6 h-px"
            style={{ background: 'linear-gradient(270deg, rgba(0,212,170,0.3) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-6 absolute bottom-0 right-0"
            style={{ background: 'linear-gradient(0deg, rgba(0,212,170,0.3) 0%, transparent 100%)' }}
          />
        </div>
      </div>
    </>
  )
}

export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Scattered floating dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-float"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(0,212,170,0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,153,255,0.4) 0%, transparent 70%)',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  )
}
