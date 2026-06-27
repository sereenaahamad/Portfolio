import { ArrowUp, Heart } from 'lucide-react'
import { profile } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-base-border py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-ink-faint">
          © {year} {profile.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5 text-xs text-ink-faint">
          Built with <Heart size={12} className="text-violet-glow" fill="currentColor" /> using React &amp;
          Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollTop}
            className="flex items-center gap-1.5 text-xs font-medium text-ink-faint hover:text-ink transition-colors"
          >
            Back to Top
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-white">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
