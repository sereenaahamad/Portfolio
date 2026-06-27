import Icon from './Icon.jsx'
import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <div id="skills">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-glow">My Skills</p>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold leading-tight text-ink">
        A blend of development,
        <br />
        design and <span className="text-gradient">creativity.</span>
      </h2>

      <div className="mt-7 space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-base-border bg-base-surface px-3.5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-violet-glow/40 hover:text-ink"
                >
                  <Icon name={skill.icon} className="h-4 w-4 text-violet-glow" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
