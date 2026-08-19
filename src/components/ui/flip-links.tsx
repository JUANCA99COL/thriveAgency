interface FlipLinkItem {
  label: string
  href: string
}

interface FlipLinksProps {
  links: FlipLinkItem[]
}

export function FlipLinks({ links }: FlipLinksProps) {
  return (
    <section id="connect" className="grid w-full place-content-center gap-2 bg-background py-24 md:py-32">
      {links.map((link) => (
        <FlipLink key={link.label} href={link.href}>
          {link.label}
        </FlipLink>
      ))}
    </section>
  )
}

function FlipLink({ children, href }: { children: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block cursor-pointer overflow-hidden whitespace-nowrap text-4xl font-black uppercase text-white transition-colors duration-300 hover:text-primary sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="flex">
        {children.split('').map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split('').map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  )
}
