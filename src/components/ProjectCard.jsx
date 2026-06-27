import { ExternalLink, Eye } from 'lucide-react'
import Icon from './Icon.jsx'

export default function ProjectCard({ project, accent = 'violet' }) {
  const accentClasses =
    accent === 'violet'
      ? 'from-violet-glow/25 to-indigo-glow/10 text-violet-glow'
      : 'from-indigo-glow/25 to-violet-glow/10 text-indigo-glow'

  const isLink = Boolean(project.url)
  const isButton = !isLink && typeof project.onClick === 'function'
  const CardTag = isLink ? 'a' : isButton ? 'button' : 'article'
  const cardProps = isLink
    ? { href: project.url, target: '_blank', rel: 'noreferrer' }
    : isButton
      ? { type: 'button', onClick: project.onClick }
      : {}

  return (
    <CardTag
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-base-border bg-base-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-glow-sm"
      {...cardProps}
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${accentClasses}`}>
        {project.thumbnail ? (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 " />
          </>
        ) : null}

        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Featured
          </span>
        )}

        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          {isLink ? <ExternalLink size={14} /> : <Eye size={14} />}
        </span>

        {!project.thumbnail ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name={project.icon} className="h-14 w-14 opacity-90" strokeWidth={1.4} />
          </div>
        ) : (
          <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/35 text-white backdrop-blur-sm">
            <Icon name={project.icon} className="h-5 w-5" strokeWidth={1.6} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="font-display text-base font-bold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-base-border bg-base-surface px-2.5 py-1 text-[11px] font-medium text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardTag>
  )
}
