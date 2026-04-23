"use client"

import { useEffect, useRef } from "react"

export function AbstractVisuals() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let connections: Connection[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      targetAlpha: number

      constructor(canvasWidth: number, canvasHeight: number) {
        // Concentrate particles toward the lower center
        this.x = canvasWidth / 2 + (Math.random() - 0.5) * canvasWidth * 0.6
        this.y = canvasHeight * 0.5 + Math.random() * canvasHeight * 0.4
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.2 - 0.1
        this.size = Math.random() * 2 + 0.5
        this.color = Math.random() > 0.5 ? "#00D4AA" : "#0099FF"
        this.alpha = 0
        this.targetAlpha = Math.random() * 0.4 + 0.1
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx
        this.y += this.vy

        // Soft boundaries - wrap around
        if (this.x < 0) this.x = canvasWidth
        if (this.x > canvasWidth) this.x = 0
        if (this.y < canvasHeight * 0.3) this.y = canvasHeight
        if (this.y > canvasHeight) this.y = canvasHeight * 0.3

        // Fade in
        if (this.alpha < this.targetAlpha) {
          this.alpha += 0.005
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace(")", `, ${this.alpha})`).replace("#", "rgba(").replace(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`)
        ctx.fill()
      }
    }

    interface Connection {
      from: number
      to: number
      alpha: number
      maxAlpha: number
      color: string
    }

    const init = () => {
      resize()
      particles = []
      connections = []

      const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000))
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }

      // Create some initial connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() > 0.95) {
            connections.push({
              from: i,
              to: j,
              alpha: 0,
              maxAlpha: Math.random() * 0.15 + 0.05,
              color: Math.random() > 0.5 ? "0, 212, 170" : "0, 153, 255"
            })
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)
      })

      // Draw connections
      connections.forEach((conn) => {
        const from = particles[conn.from]
        const to = particles[conn.to]
        const dist = Math.hypot(from.x - to.x, from.y - to.y)
        
        if (dist < 200) {
          const targetAlpha = conn.maxAlpha * (1 - dist / 200)
          conn.alpha += (targetAlpha - conn.alpha) * 0.05
          
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.strokeStyle = `rgba(${conn.color}, ${conn.alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener("resize", init)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Canvas for particle network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Abstract geometric shapes */}
      <div className="absolute inset-0">
        {/* Central ascending light beam - very subtle */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1px] h-[40vh]"
          style={{
            background: 'linear-gradient(to top, rgba(0,212,170,0.3) 0%, rgba(0,153,255,0.15) 50%, transparent 100%)',
          }}
        />
        
        {/* Horizontal accent line */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-[25%] w-[60%] max-w-[600px] h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.2) 30%, rgba(0,153,255,0.3) 50%, rgba(0,212,170,0.2) 70%, transparent 100%)',
          }}
        />

        {/* Floating orbs - abstract and atmospheric */}
        <div 
          className="absolute left-[15%] bottom-[30%] w-32 h-32 md:w-48 md:h-48 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0,212,170,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '0s',
          }}
        />
        <div 
          className="absolute right-[20%] bottom-[35%] w-40 h-40 md:w-56 md:h-56 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle at 70% 40%, rgba(0,153,255,0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '-2s',
          }}
        />
        <div 
          className="absolute left-[40%] bottom-[20%] w-24 h-24 md:w-32 md:h-32 rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0,212,170,0.1) 0%, transparent 60%)',
            filter: 'blur(30px)',
            animationDelay: '-4s',
          }}
        />

        {/* Diamond/rhombus shapes - geometric accent */}
        <div 
          className="absolute left-[25%] bottom-[40%] w-4 h-4 md:w-6 md:h-6 rotate-45 animate-pulse-glow"
          style={{
            border: '1px solid rgba(0,212,170,0.2)',
            background: 'rgba(0,212,170,0.02)',
          }}
        />
        <div 
          className="absolute right-[30%] bottom-[45%] w-3 h-3 md:w-4 md:h-4 rotate-45 animate-pulse-glow"
          style={{
            border: '1px solid rgba(0,153,255,0.2)',
            background: 'rgba(0,153,255,0.02)',
            animationDelay: '-1.5s',
          }}
        />
        <div 
          className="absolute left-[55%] bottom-[32%] w-2 h-2 md:w-3 md:h-3 rotate-45 animate-pulse-glow"
          style={{
            border: '1px solid rgba(0,212,170,0.15)',
            animationDelay: '-3s',
          }}
        />

        {/* Rising accent lines - upward energy */}
        <div 
          className="absolute left-[30%] bottom-0 w-[1px] h-[20vh] opacity-40"
          style={{
            background: 'linear-gradient(to top, rgba(0,212,170,0.3) 0%, transparent 100%)',
          }}
        />
        <div 
          className="absolute right-[35%] bottom-0 w-[1px] h-[15vh] opacity-30"
          style={{
            background: 'linear-gradient(to top, rgba(0,153,255,0.3) 0%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}
