import { Check, X } from "lucide-react"

const goodFit = [
  "You have a workflow with measurable operational impact",
  "You want production outcomes, not a demo",
  "You can assign an owner for the system internally",
]

const notFit = [
  "You want a generic chatbot wrapper",
  "You want hourly staff augmentation",
  "You're exploring without a path to production",
]

export default function FitFilter() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--border-custom)] bg-[var(--border-custom)] md:grid-cols-2">
      {/* Good fit */}
      <div className="flex flex-col bg-[var(--surface)] p-6">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--accent-soft)] px-3 py-1.5">
          <Check className="h-3 w-3 text-[var(--accent)]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">Good fit</span>
        </div>
        <ul className="flex flex-col gap-3" role="list">
          {goodFit.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
              <span className="text-sm leading-relaxed text-[var(--text-secondary)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not a fit */}
      <div className="flex flex-col bg-[var(--surface)] p-6">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[color:rgba(161,161,170,0.06)] px-3 py-1.5">
          <X className="h-3 w-3 text-[var(--muted)]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Not a fit</span>
        </div>
        <ul className="flex flex-col gap-3" role="list">
          {notFit.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--muted)]" />
              <span className="text-sm leading-relaxed text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
