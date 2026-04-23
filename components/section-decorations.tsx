export function SectionDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      {/* Horizontal gradient lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl px-8">
          <div className="relative h-px">
            {/* Main line */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.3) 20%, rgba(0,153,255,0.3) 50%, rgba(0,212,170,0.3) 80%, transparent 100%)',
              }}
            />
            {/* Center accent */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 -top-1 w-3 h-3 rotate-45 border border-zinc-700"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,170,0.2) 0%, rgba(0,153,255,0.2) 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SideAccents() {
  return (
    <>
      {/* Left side accent line */}
      <div className="fixed left-0 top-0 bottom-0 w-px pointer-events-none z-10 hidden lg:block">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.2) 30%, rgba(0,153,255,0.15) 50%, rgba(0,212,170,0.2) 70%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Right side accent line */}
      <div className="fixed right-0 top-0 bottom-0 w-px pointer-events-none z-10 hidden lg:block">
        <div 
          className="h-full w-full"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,153,255,0.2) 30%, rgba(0,212,170,0.15) 50%, rgba(0,153,255,0.2) 70%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Left corner brackets */}
      <div className="fixed left-6 top-[20%] pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-12 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(0,212,170,0.5) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-12 absolute top-0 left-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,212,170,0.5) 0%, transparent 100%)' }}
          />
        </div>
      </div>
      
      {/* Right corner brackets */}
      <div className="fixed right-6 top-[35%] pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-12 h-px ml-auto"
            style={{ background: 'linear-gradient(270deg, rgba(0,153,255,0.5) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-12 absolute top-0 right-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,153,255,0.5) 0%, transparent 100%)' }}
          />
        </div>
      </div>
      
      {/* Bottom left bracket */}
      <div className="fixed left-6 bottom-[30%] pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-8 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(0,153,255,0.4) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-8 absolute bottom-0 left-0"
            style={{ background: 'linear-gradient(0deg, rgba(0,153,255,0.4) 0%, transparent 100%)' }}
          />
        </div>
      </div>
      
      {/* Bottom right bracket */}
      <div className="fixed right-6 bottom-[25%] pointer-events-none z-10 hidden xl:block">
        <div className="relative">
          <div 
            className="w-8 h-px ml-auto"
            style={{ background: 'linear-gradient(270deg, rgba(0,212,170,0.4) 0%, transparent 100%)' }}
          />
          <div 
            className="w-px h-8 absolute bottom-0 right-0"
            style={{ background: 'linear-gradient(0deg, rgba(0,212,170,0.4) 0%, transparent 100%)' }}
          />
        </div>
      </div>
    </>
  )
}

// Background decoration for individual sections
export function SectionBackground({ variant = 'default' }: { variant?: 'default' | 'alt' }) {
  const isAlt = variant === 'alt'
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top left corner lines */}
      <div className="absolute top-0 left-0">
        <div 
          className="w-32 md:w-48 h-px"
          style={{ 
            background: isAlt 
              ? 'linear-gradient(90deg, rgba(0,153,255,0.2) 0%, transparent 100%)'
              : 'linear-gradient(90deg, rgba(0,212,170,0.2) 0%, transparent 100%)'
          }}
        />
        <div 
          className="w-px h-32 md:h-48"
          style={{ 
            background: isAlt
              ? 'linear-gradient(180deg, rgba(0,153,255,0.2) 0%, transparent 100%)'
              : 'linear-gradient(180deg, rgba(0,212,170,0.2) 0%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Bottom right corner lines */}
      <div className="absolute bottom-0 right-0">
        <div 
          className="w-32 md:w-48 h-px ml-auto"
          style={{ 
            background: isAlt
              ? 'linear-gradient(270deg, rgba(0,212,170,0.2) 0%, transparent 100%)'
              : 'linear-gradient(270deg, rgba(0,153,255,0.2) 0%, transparent 100%)'
          }}
        />
        <div 
          className="w-px h-32 md:h-48 ml-auto"
          style={{ 
            background: isAlt
              ? 'linear-gradient(0deg, rgba(0,212,170,0.2) 0%, transparent 100%)'
              : 'linear-gradient(0deg, rgba(0,153,255,0.2) 0%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

// Decorative border wrapper for sections
export function DecorativeBorder({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top border line */}
      <div className="absolute top-0 left-8 right-8 h-px hidden md:block">
        <div 
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.15) 30%, rgba(0,153,255,0.15) 70%, transparent 100%)',
          }}
        />
      </div>
      
      {children}
    </div>
  )
}
