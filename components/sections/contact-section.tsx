"use client"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-32 md:py-40 lg:py-48">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#00D4AA]/3 rounded-full blur-[180px] translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#00D4AA]">
              Get In Touch
            </span>
            <h2 
              className="mt-4 text-[3rem] md:text-[4.5rem] lg:text-[5rem] leading-[0.9] tracking-[0.02em] text-white"
              style={{ fontFamily: 'var(--font-bebas), system-ui' }}
            >
              Contact Us
            </h2>
            <p className="mt-6 text-zinc-500 text-sm leading-relaxed max-w-md">
              Have questions about the championship? Our team is here to help. 
              Reach out and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-2">Email</div>
                <a href="mailto:support@worldalpha.com" className="text-white hover:text-[#00D4AA] transition-colors">
                  support@worldalpha.com
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-2">Social</div>
                <div className="flex gap-4">
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Discord</a>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Telegram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 pb-3 text-white text-sm focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 pb-3 text-white text-sm focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 text-white text-sm focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 text-white text-sm focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 px-8 py-3 bg-white text-[#050507] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-zinc-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-32 pt-8 border-t border-zinc-800/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-zinc-600">
              World Alpha Championship 2026. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors">Terms</a>
              <a href="#" className="text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
