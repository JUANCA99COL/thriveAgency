import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

/**
 * Swap the reveal images by replacing these two files (same names, any resolution):
 *   images/front.png -> shown normally
 *   images/back.png  -> revealed by the cursor spotlight
 * (this project's Vite `publicDir` is `images/`, so they're served at /front.png and /back.png)
 */
const FRONT_SRC = '/front.png'
const BACK_SRC = '/back.png'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let targetX = section.clientWidth / 2
    let targetY = section.clientHeight / 2
    let curX = targetX
    let curY = targetY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
      // only punch the reveal hole once the user actually moves the cursor,
      // so the hero looks clean (no stray hole at the default center) on load
      section.dataset.spotlightActive = 'true'
    }

    const tick = () => {
      // ease toward the target so the light trails slightly behind the cursor
      curX += (targetX - curX) * 0.12
      curY += (targetY - curY) * 0.12
      section.style.setProperty('--spot-x', `${curX}px`)
      section.style.setProperty('--spot-y', `${curY}px`)
      raf = requestAnimationFrame(tick)
    }

    // listen on the whole section (not just the background layer) since the
    // text/button content sits in a sibling element that would otherwise
    // swallow mousemove before it ever reaches the background stage
    section.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      section.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="spotlight-stage relative isolate flex min-h-[100dvh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src={BACK_SRC}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[95%_10%] md:object-[80%_20%]"
        />
        <div className="spotlight-mask absolute inset-0">
          <img
            src={FRONT_SRC}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[95%_10%] md:object-[80%_20%]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-4 md:px-8">
        <div className="pointer-events-auto mx-auto w-full max-w-6xl px-5 text-left">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl font-heading text-4xl uppercase leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            You see it <br />
            We<span className="text-transparent [-webkit-text-stroke:1px_white] [-webkit-text-fill-color:transparent]"> build it</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-white md:text-lg"
          >
            Thrive Design is a premium studio for founders and startups, we design
            and build websites, product interfaces, and the marketing that gets
            them seen.
          </motion.p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-end px-4 pb-10 md:px-8 md:pb-14">
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto flex w-full max-w-6xl flex-col items-start justify-start gap-4 px-5 sm:flex-row"
        >
          <a
            href="https://calendly.com/jcaro112699/30min" target="_blank"
            className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-white/90 sm:w-auto cursor-pointer"
          >
          Book a call
          </a>
          <a
            href="#work"
            className="w-full rounded-full border border-white bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:w-auto cursor-pointer"
          >
            See our work
          </a>
        </motion.div>
      </div>

      <style>{`
        .spotlight-stage {
          --spot-x: 50%;
          --spot-y: 50%;
        }
        @media (hover: hover) and (pointer: fine) {
          .spotlight-stage[data-spotlight-active='true'] .spotlight-mask {
            -webkit-mask-image: radial-gradient(
              circle 260px at var(--spot-x) var(--spot-y),
              transparent 0px,
              transparent 95px,
              black 260px
            );
            mask-image: radial-gradient(
              circle 260px at var(--spot-x) var(--spot-y),
              transparent 0px,
              transparent 95px,
              black 260px
            );
          }
        }
      `}</style>
    </section>
  )
}
