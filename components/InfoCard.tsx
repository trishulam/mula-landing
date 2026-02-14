import { Workflow, Brain, Zap } from "lucide-react"

interface InfoCardProps {
  icon?: string
  title: string
  body: string
}

const iconMap: Record<string, React.ElementType> = {
  workflow: Workflow,
  brain: Brain,
  zap: Zap,
}

export default function InfoCard({ icon, title, body }: InfoCardProps) {
  const Icon = icon ? iconMap[icon] : null

  return (
    <div className="card-hover-glow group rounded-2xl border border-[var(--border-custom)] bg-[var(--surface)] p-8 motion-reduce:transform-none motion-reduce:transition-none">
      {Icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-custom)] bg-[var(--bg)] transition-all group-hover:border-[color:rgba(245,158,11,0.2)] group-hover:shadow-[0_0_12px_rgba(245,158,11,0.08)]">
          <Icon className="h-5 w-5 text-[var(--accent)]" />
        </div>
      )}
      <h3 className="mb-3 text-lg font-semibold tracking-tight text-[var(--text)]">{title}</h3>
      <p className="text-base leading-relaxed text-[var(--muted)]">{body}</p>
    </div>
  )
}
