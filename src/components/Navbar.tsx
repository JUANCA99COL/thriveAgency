import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#founder' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-4 top-4 z-50 md:inset-x-8"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-colors duration-300 ${
          scrolled
            ? 'border-surface-border bg-ink-950/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <img src="/thrive-white.svg" alt="Thrive Design logo" className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Thrive Design
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-transparent pb-2 text-sm text-muted transition-colors duration-200 hover:border-white hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.instagram.com/thrive_designz" target="_blank"
          className="hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors duration-200 hover:bg-white/90 md:inline-block cursor-pointer"
        >
        Contact us
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-white md:hidden cursor-pointer"
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M2 5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink-950 md:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3">
            <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <img src="/thrive-white.svg" alt="Thrive Design logo" className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Thrive Design
              </span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-white cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-3xl tracking-tight text-white transition-colors duration-200 hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/thrive_designz" target="_blank"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink-950 cursor-pointer"
            >
              Let's talk
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
