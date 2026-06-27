import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    setActive(href)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/85 backdrop-blur-md border-b border-base-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-glow-sm">
            {profile.initials}
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-sm tracking-wide text-ink">
              {profile.name.toUpperCase()}
            </span>
            <span className="text-[11px] text-ink-faint">{profile.title}</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  active === link.href ? 'text-white' : 'text-ink-muted'
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-violet-glow" />
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => handleNavClick('#contact')}
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-violet-glow/50 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-glow/10 transition-colors"
        >
          Let's Connect
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-base-border text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-base-border bg-base/95 backdrop-blur-md px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    active === link.href ? 'bg-white/5 text-white' : 'text-ink-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white"
              >
                Let's Connect
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
