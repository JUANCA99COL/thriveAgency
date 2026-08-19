import { social } from '../data/content'

const socialLinks = [
  { label: 'Instagram', href: social.instagram },
  { label: 'Behance', href: social.behance },
  { label: 'GitHub', href: social.github },
  { label: 'LinkedIn', href: social.linkedin },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-surface-border bg-ink-900">
      <div className="container-px mx-auto max-w-6xl py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/thrive-white.svg" alt="Thrive Design logo" className="h-8 w-8" />
              <span className="font-display text-lg font-semibold">Thrive Design</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              You see it, we build it. A design studio for founders who need web
              development, UX design, and digital marketing that actually moves the
              needle.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Studio</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li><a href="#services" className="transition-colors hover:text-white">Services</a></li>
              <li><a href="#approach" className="transition-colors hover:text-white">Approach</a></li>
              <li><a href="#work" className="transition-colors hover:text-white">Work</a></li>
              <li><a href="#founder" className="transition-colors hover:text-white">Insigths</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* <li>
                <a href="mailto:hello@thrivedesign.studio" className="transition-colors hover:text-white">
                  hello@thrivedesign.studio
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-surface-border pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Thrive Design. All rights reserved.</p>
          <p>Designed & built by Thrive Design.</p>
        </div>
      </div>
    </footer>
  )
}
