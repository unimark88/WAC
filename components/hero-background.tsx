"use client"

import { useEffect, useRef } from "react"

interface Candle {
  x: number
  open: number
  close: number
  high: number
  low: number
  isGreen: boolean
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let candles: Candle[] = []
    let offset = 0

    const GREEN = "#00D4AA"
    const BLUE = "#0099FF"
    const RED = "#FF4466"

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateCandles()
    }

    const generateCandles = () => {
      candles = []
      const candleWidth = 12
      const candleGap = 6
      const totalWidth = candleWidth + candleGap
      const candleCount = Math.ceil(canvas.width / totalWidth) + 20
      
      let lastClose = canvas.height * 0.5
      
      for (let i = 0; i < candleCount; i++) {
        const volatility = Math.random() * 80 + 30
        const direction = Math.random() > 0.45 ? 1 : -1
        const movement = direction * (Math.random() * volatility)
        
        const open = lastClose
        const close = Math.max(canvas.height * 0.2, Math.min(canvas.height * 0.8, open + movement))
        const isGreen = close < open // In canvas, lower Y = higher price
        
        const wickExtension = Math.random() * 40 + 10
        const high = Math.min(open, close) - wickExtension
        const low = Math.max(open, close) + wickExtension
        
        candles.push({
          x: i * totalWidth,
          open,
          close,
          high,
          low,
          isGreen
        })
        
        lastClose = close
      }
    }

    const drawGridLines = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 1
      
      // Horizontal lines
      const hLineCount = 8
      for (let i = 0; i <= hLineCount; i++) {
        const y = (canvas.height / hLineCount) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Vertical lines
      const vLineCount = 12
      for (let i = 0; i <= vLineCount; i++) {
        const x = (canvas.width / vLineCount) * i
        ctx.beginPath()
        ctx.setLineDash([4, 8])
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      ctx.setLineDash([])
    }

    const drawMovingAverage = (period: number, color: string, lineOffset: number) => {
      if (candles.length < period) return
      
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = 1.5
      
      for (let i = period - 1; i < candles.length; i++) {
        let sum = 0
        for (let j = i - period + 1; j <= i; j++) {
          sum += (candles[j].open + candles[j].close) / 2
        }
        const avg = sum / period + lineOffset
        const x = candles[i].x - offset
        
        if (i === period - 1) {
          ctx.moveTo(x, avg)
        } else {
          ctx.lineTo(x, avg)
        }
      }
      ctx.stroke()
    }

    const drawCandles = () => {
      const candleWidth = 12
      
      candles.forEach((candle) => {
        const x = candle.x - offset
        
        // Skip if off screen
        if (x < -candleWidth || x > canvas.width + candleWidth) return
        
        const color = candle.isGreen ? GREEN : BLUE
        const alpha = 0.6
        
        // Draw wick
        ctx.beginPath()
        ctx.strokeStyle = color.replace(")", `, ${alpha * 0.7})`).replace("#", "rgba(").replace(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`)
        ctx.lineWidth = 1
        ctx.moveTo(x + candleWidth / 2, candle.high)
        ctx.lineTo(x + candleWidth / 2, candle.low)
        ctx.stroke()
        
        // Draw body
        const bodyTop = Math.min(candle.open, candle.close)
        const bodyHeight = Math.abs(candle.close - candle.open)
        
        ctx.fillStyle = color.replace(")", `, ${alpha})`).replace("#", "rgba(").replace(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`)
        ctx.fillRect(x, bodyTop, candleWidth, Math.max(bodyHeight, 2))
      })
    }

    const drawVolumeIndicator = () => {
      const barWidth = 18
      const maxHeight = canvas.height * 0.15
      const baseY = canvas.height
      
      candles.forEach((candle, i) => {
        const x = candle.x - offset
        if (x < -barWidth || x > canvas.width + barWidth) return
        
        const height = (Math.random() * 0.7 + 0.3) * maxHeight
        const color = candle.isGreen ? GREEN : BLUE
        
        ctx.fillStyle = color.replace(")", ", 0.15)").replace("#", "rgba(").replace(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i, (_, r, g, b) => `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`)
        ctx.fillRect(x, baseY - height, barWidth - 6, height)
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Dark background
      ctx.fillStyle = "#050507"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw elements
      drawGridLines()
      drawVolumeIndicator()
      drawCandles()
      
      // Moving averages with slight offsets for visual interest
      drawMovingAverage(7, `rgba(0, 212, 170, 0.4)`, -20)
      drawMovingAverage(21, `rgba(0, 153, 255, 0.35)`, 20)
      
      // Slow scroll effect
      offset += 0.3
      
      // Reset when scrolled too far
      if (offset > 18) {
        offset = 0
        // Shift candles and add new one
        candles.shift()
        const lastCandle = candles[candles.length - 1]
        const candleWidth = 12
        const candleGap = 6
        const totalWidth = candleWidth + candleGap
        
        const volatility = Math.random() * 80 + 30
        const direction = Math.random() > 0.45 ? 1 : -1
        const movement = direction * (Math.random() * volatility)
        
        const open = lastCandle.close
        const close = Math.max(canvas.height * 0.2, Math.min(canvas.height * 0.8, open + movement))
        const isGreen = close < open
        
        const wickExtension = Math.random() * 40 + 10
        const high = Math.min(open, close) - wickExtension
        const low = Math.max(open, close) + wickExtension
        
        candles.push({
          x: lastCandle.x + totalWidth,
          open,
          close,
          high,
          low,
          isGreen
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Canvas for MT4 chart */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
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
      
      {/* Bottom vignette for text readability */}
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
