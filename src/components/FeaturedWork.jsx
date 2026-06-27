import { useState } from 'react'
import { ArrowRight, Code2, Palette } from 'lucide-react'
import ProjectCard from './ProjectCard.jsx'
import DesignLightbox from './DesignLightbox.jsx'
import { frontendProjects, creativeDesignSections } from '../data/content.js'

export default function FeaturedWork() {
  const [activeDesign, setActiveDesign] = useState(null)

  const openDesign = (project, accent) => {
    setActiveDesign({ project, accent })
  }

  const closeDesign = () => {
    setActiveDesign(null)
  }

  return (
    <>
      <section id="projects" className="pt-2 pb-20 sm:pt-4 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-glow">
                Featured Work
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-ink">
                Projects That Make an <span className="text-gradient">Impact</span>
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 self-start rounded-full border border-base-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-white/30 transition-colors sm:self-auto"
            >
              View All Projects
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Sub-section 1: Front-End Development Projects */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-violet-glow">
                <Code2 size={18} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Front-End Development</h3>
                <p className="text-sm text-ink-faint">Built and coded - React apps, dashboards & interfaces</p>
              </div>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {frontendProjects.map((project) => (
                <ProjectCard key={project.title} project={project} accent="violet" />
              ))}
            </div>
          </div>

          {/* Creative design sections */}
          <div className="mt-12 space-y-12">
            {creativeDesignSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft ${
                      section.accent === 'indigo' ? 'text-indigo-glow' : 'text-violet-glow'
                    }`}
                  >
                    <Palette size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{section.title}</h3>
                    <p className="text-sm text-ink-faint">{section.subtitle}</p>
                  </div>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.projects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={{ ...project, onClick: () => openDesign(project, section.accent) }}
                      accent={section.accent}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeDesign && (
        <DesignLightbox
          project={activeDesign.project}
          accent={activeDesign.accent}
          onClose={closeDesign}
        />
      )}
    </>
  )
}
