import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function DesignLightbox({ project, accent = 'indigo', onClose }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((current) => {
          const total = images.length || 1
          return (current - 1 + total) % total
        })
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((current) => {
          const total = images.length || 1
          return (current + 1) % total
        })
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, project])

  useEffect(() => {
    setActiveIndex(0)
  }, [project?.title])

  if (!project) return null

  const accentBorder = accent === 'indigo' ? 'border-indigo-glow/30' : 'border-violet-glow/30'
  const accentText = accent === 'indigo' ? 'text-indigo-glow' : 'text-violet-glow'
  const images = project.galleryImages ?? []
  const currentImage = images[activeIndex] ?? images[0]

  const goPrev = () => {
    setActiveIndex((current) => {
      const total = images.length || 1
      return (current - 1 + total) % total
    })
  }

  const goNext = () => {
    setActiveIndex((current) => {
      const total = images.length || 1
      return (current + 1) % total
    })
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6 sm:px-6">
      <button
        type="button"
        aria-label="Close gallery"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className={`relative z-10 w-full max-w-6xl overflow-hidden rounded-3xl border ${accentBorder} bg-base-card shadow-[0_30px_100px_rgba(0,0,0,0.55)]`}>
        <div className="flex items-start justify-between gap-6 border-b border-base-border px-5 py-5 sm:px-6">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentText}`}>
              Design Project
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink">{project.title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </div>

          <button
            type="button"
            aria-label="Close gallery"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-base-border text-ink-muted transition-colors hover:border-white/30 hover:text-white"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[78vh] overflow-y-auto px-5 py-5 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-base-border bg-black/20">
            <img
              src={currentImage}
              alt={`${project.title} preview ${activeIndex + 1}`}
              className="h-[22rem] w-full object-cover sm:h-[30rem]"
            />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-4 sm:px-5">
              <button
                type="button"
                aria-label="Previous image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-black/45"
                onClick={goPrev}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm">
                {activeIndex + 1} / {images.length}
              </div>

              <button
                type="button"
                aria-label="Next image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-black/45"
                onClick={goNext}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-flow-col auto-cols-[5.5rem] gap-3 overflow-x-auto pb-1">
            {images.map((src, index) => (
              <button
                key={`${project.title}-${src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group overflow-hidden rounded-2xl border bg-base-surface transition-all ${
                  index === activeIndex
                    ? 'border-white/30 ring-2 ring-violet-glow/60'
                    : 'border-base-border hover:border-white/20'
                }`}
              >
                <img
                  src={src}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="h-20 w-full object-cover opacity-85 transition-opacity group-hover:opacity-100"
                />
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-base-border bg-base-surface px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
