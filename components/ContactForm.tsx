"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, Check } from "lucide-react"

interface FormData {
  name: string
  company: string
  email: string
  workflow: string
  systems: string
  timeline: string
  _honeypot: string
}

const initialState: FormData = {
  name: "",
  company: "",
  email: "",
  workflow: "",
  systems: "",
  timeline: "",
  _honeypot: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (form._honeypot) return

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setStatus("error")
      return
    }

    setStatus("sending")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setForm(initialState)
    } catch {
      setStatus("error")
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-[var(--border-custom)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[color:rgba(161,161,170,0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] hover:border-[var(--border-hover)]"

  if (status === "success") {
    return (
      <div className="gradient-border flex flex-col items-center justify-center rounded-2xl border border-[color:rgba(245,158,11,0.2)] bg-[var(--surface)] p-12 text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]">
          <Check className="h-6 w-6 text-[#0A0A0B]" />
        </div>
        <p className="text-xl font-semibold text-[var(--text)]">
          {"Thanks \u2014 we'll get back to you shortly."}
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Usually within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--text)]"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 rounded-2xl border border-[var(--border-custom)] p-8" noValidate>
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-honeypot">Do not fill this out</label>
        <input
          type="text"
          id="contact-honeypot"
          name="_honeypot"
          value={form._honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-[var(--text-secondary)]">
            Name <span className="text-[var(--accent)]">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-company" className="text-sm font-medium text-[var(--text-secondary)]">
            Company
          </label>
          <input
            type="text"
            id="contact-company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-[var(--text-secondary)]">
          Email <span className="text-[var(--accent)]">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="you@company.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-workflow" className="text-sm font-medium text-[var(--text-secondary)]">
          Workflow description <span className="text-[var(--accent)]">*</span>
        </label>
        <textarea
          id="contact-workflow"
          name="workflow"
          required
          rows={4}
          value={form.workflow}
          onChange={handleChange}
          className={`${inputClasses} resize-y`}
          placeholder="Describe the workflow, where it breaks, and what 'better' looks like."
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-systems" className="text-sm font-medium text-[var(--text-secondary)]">
            Systems involved
          </label>
          <input
            type="text"
            id="contact-systems"
            name="systems"
            value={form.systems}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. Salesforce, Slack, internal tools"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-timeline" className="text-sm font-medium text-[var(--text-secondary)]">
            Timeline
          </label>
          <input
            type="text"
            id="contact-timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. Q1 2026"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending" || !form.name || !form.email || !form.workflow}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-[#0A0A0B] transition-all hover:bg-[var(--accentHover)] hover:shadow-[0_0_24px_rgba(245,158,11,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
      >
        {status === "sending" ? "Sending..." : "Start the conversation"}
        {status !== "sending" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please check your email and try again.
        </p>
      )}
    </form>
  )
}
