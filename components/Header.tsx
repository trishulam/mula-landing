"use client"

import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"

const navItems = [
  { label: "How we work", href: "#how-we-work" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-custom)] bg-[color:rgba(10,10,11,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-3 md:px-10 md:py-4">
        <a href="#" className="flex shrink-0 items-center">
          <Image
            src="/images/mula-logo.png"
            alt="Mula"
            width={220}
            height={68}
            className="h-12 w-auto md:h-14"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#0A0A0B] transition-all hover:bg-[var(--accentHover)] hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Discuss a workflow
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-[var(--border-custom)] bg-[var(--bg)] px-6 pb-6 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#0A0A0B] transition-colors hover:bg-[var(--accentHover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              onClick={() => setMobileOpen(false)}
            >
              Discuss a workflow
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
