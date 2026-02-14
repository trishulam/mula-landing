import Image from "next/image"
import { Linkedin, ArrowRight, Zap, Brain, Workflow, Sparkles } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LogoStrip from "@/components/LogoStrip"
import InfoCard from "@/components/InfoCard"
import FitFilter from "@/components/FitFilter"
import ContactForm from "@/components/ContactForm"

const helpCards = [
  {
    icon: "workflow",
    title: "Workflow automation",
    body: "Reduce manual steps, routing, triage, and handoffs in core ops flows.",
  },
  {
    icon: "brain",
    title: "Decision support",
    body: "Surface evidence, recommend actions, and keep humans in control.",
  },
  {
    icon: "zap",
    title: "Agentic systems in production",
    body: "Tool-using agents integrated into real processes with reliability in mind.",
  },
]

const steps = [
  {
    number: "01",
    title: "Discover",
    body: "Clarify workflow, owner, metric, constraints, and path to production.",
  },
  {
    number: "02",
    title: "Build",
    body: "Design and deploy a production-grade AI system around the use case.",
  },
  {
    number: "03",
    title: "Operate",
    body: "Monitor, evaluate, and iterate as the system becomes part of operations.",
  },
]

const povStatements = [
  "Most companies don't need more AI features. They need fewer manual decisions.",
  "AI systems should be designed like infrastructure\u2014owned, measured, and monitored.",
  "If AI can't be tied to an operational metric, it's not ready for production.",
]

export default function Page() {
  return (
    <div className="noise-bg flex min-h-screen flex-col">
      <Header />

      <main className="relative z-10">
        {/* ─── Hero ─── */}
        <section className="hero-glow relative px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="animate-fade-in mb-1 flex justify-center">
                <Image
                  src="/images/mula-logo.png"
                  alt="Mula"
                  width={400}
                  height={400}
                  className="h-32 w-auto md:h-40 lg:h-44"
                  priority
                />
              </div>
              <h1 className="animate-fade-in-delay-1 m-0 max-w-4xl text-5xl font-bold tracking-tight leading-[1.08] text-[var(--text)] md:text-7xl lg:text-8xl text-balance">
                {"AI that "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[var(--accent)]">survives</span>
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[var(--accent)] opacity-30" />
                </span>
                {" production."}
              </h1>
              <p className="animate-fade-in-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                We help product and operations teams identify high-leverage workflows, then design
                and deploy agentic systems that reduce manual work and decision overhead in real
                environments.
              </p>
              <div className="animate-fade-in-delay-3 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                <a
                  href="#contact"
                  className="animate-pulse-glow group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-7 py-4 text-sm font-semibold text-[#0A0A0B] transition-all hover:bg-[var(--accentHover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  Discuss a workflow
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how-we-work"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-custom)] bg-[var(--surface)] px-7 py-4 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--border-hover)] hover:text-[var(--text)]"
                >
                  See how we work
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>


          </div>
        </section>

        {/* ─── What We Help With ─── */}
        <section className="border-t border-[var(--border-custom)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Capabilities</p>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-[var(--text)] md:mb-12 md:text-4xl">
              What we help with
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {helpCards.map((card) => (
                <InfoCard key={card.title} icon={card.icon} title={card.title} body={card.body} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── How We Work ─── */}
        <section id="how-we-work" className="section-glow border-t border-[var(--border-custom)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Process</p>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-[var(--text)] md:mb-12 md:text-4xl">
              How we work
            </h2>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border-custom)] bg-[var(--border-custom)] md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col bg-[var(--surface)] p-6">
                  <span className="mb-3 text-xs font-bold tracking-wider text-[var(--accent)]">{step.number}</span>
                  <h3 className="mb-1.5 text-base font-semibold text-[var(--text)]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-[var(--muted)] italic">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--accent)] opacity-50" />
              {"Systems that survive production\u2014not prototypes that stall."}
            </p>
          </div>
        </section>

        {/* ─── Point of View ─── */}
        <section className="border-t border-[var(--border-custom)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Philosophy</p>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-[var(--text)] md:mb-12 md:text-4xl">
              Our point of view
            </h2>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border-custom)] bg-[var(--border-custom)] md:grid-cols-3">
              {povStatements.map((statement, i) => (
                <div key={i} className="flex gap-4 bg-[var(--surface)] p-6">
                  <span className="shrink-0 text-sm font-bold text-[var(--accent)] opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{statement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Founders ─── */}
        <section id="founders" className="section-glow border-t border-[var(--border-custom)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Team</p>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-[var(--text)] md:mb-12 md:text-4xl">
              Founders
            </h2>
            <div className="rounded-2xl border border-[var(--border-custom)] bg-[var(--surface)] p-6 md:p-8">
              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                Prithvi Seshadri and Vamsi Krishna are UPenn-trained in data science and systems
                engineering, with upcoming work across Google (YouTube Trust & Safety) and Amazon
                AGI focused on applied AI and agentic systems.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-custom)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--accent)] transition-all hover:border-[color:rgba(245,158,11,0.3)]"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  Prithvi
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-custom)] bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--accent)] transition-all hover:border-[color:rgba(245,158,11,0.3)]"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  Vamsi
                </a>
                <span className="text-[var(--border-custom)]">{"\u00B7"}</span>
                <a href="mailto:ps27@seas.upenn.edu" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                  ps27@seas.upenn.edu
                </a>
                <a href="mailto:nkvk@seas.upenn.edu" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
                  nkvk@seas.upenn.edu
                </a>
              </div>
              <div className="mt-5">
                <LogoStrip size="small" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Fit Filter ─── */}
        <section className="border-t border-[var(--border-custom)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Alignment</p>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-[var(--text)] md:mb-12 md:text-4xl">
              Is this a fit?
            </h2>
            <FitFilter />
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="section-glow border-t border-[var(--border-custom)] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Get started</p>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
              Bring us a workflow
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-[var(--muted)]">
              {"Share what breaks and what \u201Cbetter\u201D looks like. We respond within 24 hours."}
            </p>
            <ContactForm />
            <p className="mt-5 text-center text-xs text-[var(--muted)]">
              {"Or email directly: "}
              <a href="mailto:ps27@seas.upenn.edu" className="text-[var(--accent)] transition-colors hover:text-[var(--text)]">ps27@seas.upenn.edu</a>
              {" \u00B7 "}
              <a href="mailto:nkvk@seas.upenn.edu" className="text-[var(--accent)] transition-colors hover:text-[var(--text)]">nkvk@seas.upenn.edu</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
