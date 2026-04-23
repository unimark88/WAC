"use client"

import { useEffect, useRef } from "react"

interface Candle {
  x: number
  open: number
  close: number
  high: number
  low: number
  isGreen: boolean
  volume: number
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const offsetRef = useRef<number>(0)
  const candlesRef = useRef<Candle[]>([])
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const CANDLE_WIDTH = 12
    const CANDLE_GAP = 6
    const TOTAL_WIDTH = CANDLE_WIDTH + CANDLE_GAP
    const SCROLL_SPEED = 0.015 // pixels per ms

    // Pre-computed colors
    const GREEN_BODY = "rgba(0, 212, 170, 0.6)"
    const GREEN_WICK = "rgba(0, 212, 170, 0.42)"
    const GREEN_VOLUME = "rgba(0, 212, 170, 0.15)"
    const GREEN_MA = "rgba(0, 212, 170, 0.4)"
    const BLUE_BODY = "rgba(0, 153, 255, 0.6)"
    const BLUE_WICK = "rgba(0, 153, 255, 0.42)"
    const BLUE_VOLUME = "rgba(0, 153, 255, 0.15)"
    const BLUE_MA = "rgba(0, 153, 255, 0.35)"

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      generateCandles()
    }

    const generateCandles = () => {
      const candles: Candle[] = []
      const candleCount = Math.ceil(window.innerWidth / TOTAL_WIDTH) + 25
      
      let lastClose = window.innerHeight * 0.5
      
      for (let i = 0; i < candleCount; i++) {
        const volatility = Math.random() * 80 + 30
        const direction = Math.random() > 0.45 ? 1 : -1
        const movement = direction * (Math.random() * volatility)
        
        const open = lastClose
        const close = Math.max(window.innerHeight * 0.2, Math.min(window.innerHeight * 0.8, open + movement))
        const isGreen = close < open
        
        const wickExtension = Math.random() * 40 + 10
        const high = Math.min(open, close) - wickExtension
        const low = Math.max(open, close) + wickExtension
        
        candles.push({
          x: i * TOTAL_WIDTH,
          open,
          close,
          high,
          low,
          isGreen,
          volume: Math.random() * 0.7 + 0.3
        })
        
        lastClose = close
      }
      candlesRef.current = candles
    }

    const addNewCandle = () => {
      const candles = candlesRef.current
      if (candles.length === 0) return
      
      const lastCandle = candles[candles.length - 1]
      
      const volatility = Math.random() * 80 + 30
      const direction = Math.random() > 0.45 ? 1 : -1
      const movement = direction * (Math.random() * volatility)
      
      const open = lastCandle.close
      const close = Math.max(window.innerHeight * 0.2, Math.min(window.innerHeight * 0.8, open + movement))
      const isGreen = close < open
      
      const wickExtension = Math.random() * 40 + 10
      const high = Math.min(open, close) - wickExtension
      const low = Math.max(open, close) + wickExtension
      
      candles.push({
        x: lastCandle.x + TOTAL_WIDTH,
        open,
        close,
        high,
        low,
        isGreen,
        volume: Math.random() * 0.7 + 0.3
      })
    }

    const draw = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const candles = candlesRef.current
      const offset = offsetRef.current

      // Clear and fill background
      ctx.fillStyle = "#050507"
      ctx.fillRect(0, 0, width, height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 1
      
      const hLineCount = 8
      for (let i = 0; i <= hLineCount; i++) {
        const y = (height / hLineCount) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      
      ctx.setLineDash([4, 8])
      const vLineCount = 12
      for (let i = 0; i <= vLineCount; i++) {
        const x = (width / vLineCount) * i
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      ctx.setLineDash([])

      // Draw volume bars
      const maxVolumeHeight = height * 0.15
      for (let i = 0; i < candles.length; i++) {
        const candle = candles[i]
        const x = candle.x - offset
        if (x < -TOTAL_WIDTH || x > width + TOTAL_WIDTH) continue
        
        const volHeight = candle.volume * maxVolumeHeight
        ctx.fillStyle = candle.isGreen ? GREEN_VOLUME : BLUE_VOLUME
        ctx.fillRect(x, height - volHeight, CANDLE_WIDTH, volHeight)
      }

      // Draw candles
      for (let i = 0; i < candles.length; i++) {
        const candle = candles[i]
        const x = candle.x - offset
        if (x < -CANDLE_WIDTH || x > width + CANDLE_WIDTH) continue

        // Wick
        ctx.strokeStyle = candle.isGreen ? GREEN_WICK : BLUE_WICK
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x + CANDLE_WIDTH / 2, candle.high)
        ctx.lineTo(x + CANDLE_WIDTH / 2, candle.low)
        ctx.stroke()
        
        // Body
        const bodyTop = Math.min(candle.open, candle.close)
        const bodyHeight = Math.abs(candle.close - candle.open)
        ctx.fillStyle = candle.isGreen ? GREEN_BODY : BLUE_BODY
        ctx.fillRect(x, bodyTop, CANDLE_WIDTH, Math.max(bodyHeight, 2))
      }

      // Draw moving averages
      const drawMA = (period: number, color: string, lineOffset: number) => {
        if (candles.length < period) return
        
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = 1.5
        
        let started = false
        for (let i = period - 1; i < candles.length; i++) {
          const x = candles[i].x - offset
          if (x < -50 || x > width + 50) continue
          
          let sum = 0
          for (let j = i - period + 1; j <= i; j++) {
            sum += (candles[j].open + candles[j].close) / 2
          }
          const avg = sum / period + lineOffset
          
          if (!started) {
            ctx.moveTo(x, avg)
            started = true
          } else {
            ctx.lineTo(x, avg)
          }
        }
        ctx.stroke()
      }
      
      drawMA(7, GREEN_MA, -20)
      drawMA(21, BLUE_MA, 20)
    }

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }
      
      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime
      
      // Smooth offset update based on delta time
      offsetRef.current += SCROLL_SPEED * deltaTime
      
      // When we've scrolled one candle width, shift and add new
      if (offsetRef.current >= TOTAL_WIDTH) {
        offsetRef.current -= TOTAL_WIDTH
        candlesRef.current.shift()
        addNewCandle()
      }
      
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animationRef.current = requestAnimationFrame(animate)

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
        style={{ willChange: 'transform' }}
      />
      
      {/* Ambient glow overlays */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(0,153,255,0.05) 0%, transparent 60%)',
          animationDelay: '2s',
        }}
      />
      
      {/* Center focus vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(5,5,7,0.7) 100%)',
        }}
      />
      
      {/* Bottom vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.5) 30%, transparent 60%)',
        }}
      />
      
      {/* Top vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,7,0.7) 0%, transparent 30%)',
        }}
      />
    </div>
  )
}
