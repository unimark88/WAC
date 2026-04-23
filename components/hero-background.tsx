export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#050507]" />
      
      {/* Subtle radial gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,153,255,0.03) 0%, transparent 70%)',
        }}
      />
      
      {/* World/network grid pattern - very subtle */}
      <div className="absolute inset-0 animate-grid-pulse">
        <svg className="w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Left edge trading chart atmosphere */}
      <div className="absolute left-0 top-1/4 w-[300px] h-[400px] opacity-[0.08] blur-sm">
        <svg viewBox="0 0 300 400" className="w-full h-full">
          {/* Candlestick-style chart lines */}
          <g stroke="#00D4AA" strokeWidth="1.5" fill="none" opacity="0.6">
            <line x1="20" y1="300" x2="20" y2="250" />
            <line x1="40" y1="260" x2="40" y2="200" />
            <line x1="60" y1="220" x2="60" y2="150" />
            <line x1="80" y1="180" x2="80" y2="120" />
            <line x1="100" y1="140" x2="100" y2="80" />
            <line x1="120" y1="100" x2="120" y2="60" />
          </g>
          <g stroke="#0099FF" strokeWidth="1.5" fill="none" opacity="0.5">
            <line x1="140" y1="90" x2="140" y2="130" />
            <line x1="160" y1="110" x2="160" y2="170" />
            <line x1="180" y1="150" x2="180" y2="200" />
          </g>
          {/* Horizontal support lines */}
          <g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="4,8">
            <line x1="0" y1="100" x2="200" y2="100" />
            <line x1="0" y1="200" x2="200" y2="200" />
            <line x1="0" y1="300" x2="200" y2="300" />
          </g>
        </svg>
      </div>
      
      {/* Right edge trading chart atmosphere */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[400px] opacity-[0.08] blur-sm">
        <svg viewBox="0 0 300 400" className="w-full h-full">
          {/* Candlestick-style chart lines */}
          <g stroke="#0099FF" strokeWidth="1.5" fill="none" opacity="0.5">
            <line x1="280" y1="300" x2="280" y2="240" />
            <line x1="260" y1="250" x2="260" y2="180" />
            <line x1="240" y1="190" x2="240" y2="130" />
            <line x1="220" y1="150" x2="220" y2="100" />
          </g>
          <g stroke="#00D4AA" strokeWidth="1.5" fill="none" opacity="0.6">
            <line x1="200" y1="120" x2="200" y2="80" />
            <line x1="180" y1="100" x2="180" y2="140" />
            <line x1="160" y1="130" x2="160" y2="190" />
            <line x1="140" y1="170" x2="140" y2="220" />
          </g>
          {/* Horizontal support lines */}
          <g stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="4,8">
            <line x1="100" y1="120" x2="300" y2="120" />
            <line x1="100" y1="200" x2="300" y2="200" />
          </g>
        </svg>
      </div>
      
      {/* Ambient glow spots */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,170,0.04) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(0,153,255,0.04) 0%, transparent 60%)',
          animationDelay: '2s',
        }}
      />
      
      {/* Bottom vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(5,5,7,0.9) 0%, transparent 40%)',
        }}
      />
      
      {/* Top vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,7,0.5) 0%, transparent 30%)',
        }}
      />
    </div>
  )
}
