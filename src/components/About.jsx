import { Heart } from 'lucide-react'
import { about, profile } from '../data/content.js'

export default function About() {
  return (
    <div id="about" className="mt-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-glow">About Me</p>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold leading-tight text-ink">
        {about.heading}
        <br />
        <span className="text-gradient">{about.headingAccent}</span>
      </h2>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">{about.body}</p>

      <p className="mt-6 flex items-center gap-2 font-display text-2xl italic text-violet-glow/90">
        {profile.name}
        <Heart size={18} className="text-violet-glow/70" fill="currentColor" />
      </p>
    </div>
  )
}
