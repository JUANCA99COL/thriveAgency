import { motion } from 'framer-motion'
import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Portfolio() {
  return (
    <section id="work" className="border-t border-surface-border py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Selected work
            </span>
            <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-5xl">
              Projects we've shipped.
            </h2>
          </div>
          <a
            href="https://github.com/JUANCA99COL"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-violet-300 transition-colors duration-200 hover:text-violet-200 cursor-pointer"
          >
            View full GitHub →
          </a>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface/40 transition-colors duration-300 hover:border-violet-500/50">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 flex-col cursor-pointer"
                >
                  <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-ink-900">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                      <span className="whitespace-nowrap rounded-full border border-surface-border px-3 py-1 text-[11px] text-violet-300">
                        {project.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                </a>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 px-6 pb-6">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-surface-border px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:border-violet-500/50 hover:text-violet-300 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
