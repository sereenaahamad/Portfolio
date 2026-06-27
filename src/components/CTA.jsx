import { Mail, ArrowRight } from 'lucide-react'
import Icon from './Icon.jsx'
import { profile } from '../data/content.js'

export default function CTA() {
  return (
    <section id="contact" className="pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-base-border bg-base-surface/70 px-6 py-10 sm:flex-row sm:justify-between sm:px-10">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-violet-glow/40 bg-brand-gradient-soft text-violet-glow shadow-glow-sm sm:flex">
              <Mail size={22} />
            </span>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Let's build something amazing together!
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                I'm open to exciting opportunities and collaborations.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-violet-glow/50 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-glow/10 transition-colors"
            >
              Download Resume
              <ArrowRight size={15} />
            </a>
            <div className="flex items-center gap-3">
              {profile.socials.slice(0, 3).map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-base-border text-ink-muted hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
