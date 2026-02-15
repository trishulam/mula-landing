import { Mail } from "lucide-react"
import Image from "next/image"

const footerNav = [
  { label: "How we work", href: "#how-we-work" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-[var(--border-custom)] bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col items-center gap-2.5 md:items-start">
            <Image
              src="/images/mula-logo.png"
              alt="Mula"
              width={220}
              height={68}
              className="h-12 w-auto md:h-14"
            />
            <p className="text-xs text-[var(--muted)]">Production-grade AI systems</p>
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8" aria-label="Footer navigation">
              {footerNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="mailto:ps27@seas.upenn.edu,nkvk@seas.upenn.edu"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-custom)] text-[var(--muted)] transition-all hover:border-[color:rgba(245,158,11,0.3)] hover:text-[var(--accent)]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
