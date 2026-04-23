import { Instagram, Twitter, Youtube, Send } from "lucide-react"

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Telegram", href: "#", icon: Send },
]

export function Footer() {
  return (
    <footer className="relative bg-[#050507] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div 
            className="text-2xl md:text-3xl tracking-[0.15em] text-white/90"
            style={{ fontFamily: 'var(--font-bebas), system-ui' }}
          >
            WORLD ALPHA CHAMPIONSHIP
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group relative p-3 rounded-full border border-white/10 hover:border-[#00D4AA]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-full bg-[#00D4AA]/0 group-hover:bg-[#00D4AA]/10 transition-colors duration-300" />
                <social.icon className="relative w-5 h-5 text-zinc-500 group-hover:text-[#00D4AA] transition-colors duration-300" />
              </a>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Copyright */}
          <p className="text-xs text-zinc-600 tracking-wide">
            &copy; {new Date().getFullYear()} World Alpha Championship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
