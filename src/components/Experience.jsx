import { ArrowRight } from 'lucide-react'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <div id="experience">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-glow">Experience</p>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-ink">
        My Professional <span className="text-gradient">Journey</span>
      </h2>

      <ol className="mt-8 relative border-l border-base-border pl-8">
        {experience.map((job, idx) => (
          <li key={job.company} className={idx !== experience.length - 1 ? 'pb-10 relative' : 'relative'}>
            <span className="absolute -left-[2.45rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-base ring-2 ring-violet-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-glow" />
            </span>

            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-base font-bold text-ink">{job.role}</h3>
                <p className="text-sm text-ink-muted">{job.company}</p>
              </div>
              <span className="rounded-full border border-violet-glow/30 bg-brand-gradient-soft px-3 py-1 text-xs font-medium text-violet-glow whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <ul className="mt-3 space-y-1.5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <a
        href={`#`}
        className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-base-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-white/30 transition-colors"
      >
        View Full Experience
        <ArrowRight size={15} />
      </a>
    </div>
  )
}
