import Reveal from './Reveal'
import { logos } from '../data/content'

export default function LogoMarquee() {
  return (
    <section className="border-t border-surface-border py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Tools & platforms
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-tight sm:text-5xl">
            We build with the stack you already trust.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <div className="marquee-fade relative overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-20">
              {[...logos, ...logos].map((logo, i) => (
                <img
                  key={`${logo.name}-${i}`}
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto shrink-0 opacity-50 transition-opacity duration-300 hover:opacity-100 md:h-10"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .marquee-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-fade:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
