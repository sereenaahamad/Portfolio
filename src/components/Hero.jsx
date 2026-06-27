import { ArrowRight, Download } from 'lucide-react'
import Icon from './Icon.jsx'
import { profile, stats } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-14"
    >
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-radial-glow blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_auto] gap-12 lg:gap-8 items-center">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-surface px-4 py-1.5 text-xs font-medium text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            {profile.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] text-ink">
            {profile.headlineTop}
            <br />
            <span className="text-gradient">{profile.headlineGradient}</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-ink-muted leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-base-border px-6 py-3 text-sm font-semibold text-ink hover:border-white/30 transition-colors"
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">Find me on</p>
            <div className="mt-3 flex items-center gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-base-border text-ink-muted hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Signature avatar element */}
        <div className="relative mx-auto flex h-72 w-72 sm:h-80 sm:w-80 items-center justify-center lg:mx-0">
          <div className="absolute h-full w-full rounded-full border border-violet-glow/30 animate-spin-slow" />
          <div className="absolute h-[85%] w-[85%] rounded-full border border-indigo-glow/30 animate-spin-slower" />
          <div className="absolute h-[60%] w-[60%] rounded-full bg-radial-glow animate-pulse-soft" />
          <div className="relative flex h-44 w-44 sm:h-48 sm:w-48 items-center justify-center rounded-full bg-brand-gradient shadow-glow animate-float">
            <span className="font-display text-5xl font-extrabold text-white/95">
              {profile.initials}
            </span>
          </div>
          <span className="absolute top-4 right-6 h-3 w-3 rounded-full bg-indigo-glow shadow-[0_0_12px_3px_rgba(99,102,241,0.6)]" />
          <span className="absolute bottom-8 left-2 h-2 w-2 rounded-full bg-violet-glow shadow-[0_0_12px_3px_rgba(168,85,247,0.6)]" />
        </div>

        {/* Stats column */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1 lg:w-64">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-2xl border border-base-border bg-base-surface/70 px-4 py-3.5"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-violet-glow">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold text-ink">{s.value}</span>
                <span className="text-[11px] text-ink-faint">{s.label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
