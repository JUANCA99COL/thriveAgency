import { services } from '../data/content'
import Reveal from './Reveal'

const icons: Record<string, JSX.Element> = {
  'Web Development': (
    <path
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5v-9Z M9 20h6 M9 9.5 6.5 12 9 14.5 M15 9.5 17.5 12 15 14.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'UX Design': (
    <path
      d="M12 3a9 9 0 1 0 9 9 M12 3v9l6.5 3.7 M12 3a9 9 0 0 1 9 9h-9V3Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'Digital Marketing': (
    <path
      d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z M15 8.5a4 4 0 0 1 0 7 M18 5.5a8 8 0 0 1 0 13"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  'Brand & Identity': (
    <path
      d="M4 4h16v10.5L14.5 20l-2-4H4V4Z M8.5 9h7 M8.5 12h4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

export default function Services() {
  return (
    <section id="services" className="border-t border-surface-border py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            What we do
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-5xl">
            Everything a growing brand needs to launch and scale.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-surface-border bg-surface/40 p-8 transition-colors duration-300 hover:border-violet-500/50 hover:bg-surface">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-ink-950 text-violet-400 transition-colors duration-300 group-hover:border-violet-500/60 group-hover:text-violet-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {icons[service.title]}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
