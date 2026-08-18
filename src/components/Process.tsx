import { process } from '../data/content'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="approach" className="relative border-t border-surface-border py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Our approach
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-5xl">
            A process built for clarity, not chaos.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-surface-border bg-surface-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1} className="h-full">
              <div className="h-full bg-ink-950 p-8">
                <span className="font-display text-sm font-semibold text-violet-400">
                  {item.step}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
