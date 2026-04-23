"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#" },
  { label: "Rules", href: "#rules" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Prizes", href: "#prizes" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 lg:p-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Gradient border frame */}
        <div 
          className="absolute -inset-[1px] rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,170,0.5) 0%, rgba(0,153,255,0.3) 50%, rgba(0,212,170,0.5) 100%)',
          }}
        />
        
        {/* Inner background */}
        <div className="absolute inset-0 rounded-xl bg-[#050507]/90 backdrop-blur-md" />
        
        <div className="relative px-6 lg:px-8">
          <div className="flex items-center justify-end lg:justify-center h-14 lg:h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-5xl mx-auto">
          <div 
            className="absolute -inset-[1px] rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,170,0.5) 0%, rgba(0,153,255,0.3) 50%, rgba(0,212,170,0.5) 100%)',
            }}
          />
          <div className="relative bg-[#050507]/95 backdrop-blur-xl rounded-xl">
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
