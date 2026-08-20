export const social = {
  instagram: 'https://www.instagram.com/thrive_designz',
  behance: 'https://www.behance.net/juanrodriguez24',
  github: 'https://github.com/JUANCA99COL',
  linkedin: 'https://www.linkedin.com/in/camilo-caro-758a081a6/',
}

export const logos = [
  { name: 'Figma', src: `${import.meta.env.BASE_URL}logos/figma.png` },
  { name: 'Shopify', src: `${import.meta.env.BASE_URL}logos/shopify.png` },
  { name: 'HubSpot', src: `${import.meta.env.BASE_URL}logos/hubspot.png` },
  { name: 'Mailchimp', src: `${import.meta.env.BASE_URL}logos/mailchimp.png` },
  { name: 'WordPress', src: `${import.meta.env.BASE_URL}logos/wordpress.png` },
  { name: 'Behance', src: `${import.meta.env.BASE_URL}logos/behance.png` },
  { name: 'Visual Studio', src: `${import.meta.env.BASE_URL}logos/visual-studio.png` },
]

export interface Project {
  title: string
  description: string
  tag: string
  image: string
  url: string
  repo?: string
  links?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    title: 'Harrison Digital',
    description: 'A dark, trust-forward site for a tech and digital-asset investment firm — positioning, research messaging, and a UI built for institutional credibility.',
    tag: 'Web Development',
    image: `${import.meta.env.BASE_URL}portfolio/harrison-digital.png`,
    url: 'https://harrisons-fresh-site-8deea2.webflow.io/',
    links: [
      { label: 'Behance', url: 'https://www.behance.net/gallery/240159803/Harrison-Digital' },
      { label: 'Instagram', url: 'https://www.instagram.com/p/DR4qMf_Dpda/?igsh=MTJyYzd4aGlsMzRsZg==' },
    ],
  },
  {
    title: 'Luxury Cars Pro',
    description: 'Car dealership platform with inventory showcase and an interface built to move premium listings.',
    tag: 'Web Development',
    image: `${import.meta.env.BASE_URL}portfolio/luxpro.png`,
    url: 'https://juanca99col.github.io/luxpro/',
    links: [
      { label: 'GitHub', url: 'https://github.com/JUANCA99COL/luxpro' },
    ],
  },
  {
    title: 'Lumina Beans',
    description: 'A brand-forward site concept for a specialty coffee label, built around mood and product storytelling.',
    tag: 'Web Development',
    image: `${import.meta.env.BASE_URL}portfolio/lumina-beans.png`,
    url: 'https://juanca99col.github.io/lumina-beans/',
    links: [
      { label: 'GitHub', url: 'https://github.com/JUANCA99COL/lumina-beans' },
    ],
  },
  {
    title: 'Mastertouch Colombia',
    description: 'A premium tourism company for locals and foreigners that want to book tours and events in Colombia',
    tag: 'Web Development',
    image: `${import.meta.env.BASE_URL}portfolio/mastertouch.png`,
    url: 'http://master-touch.co.nz/',
    links: [
      { label: 'GitHub', url: 'https://github.com/JUANCA99COL/Mastertouch' },
    ],
  },
  {
    title: 'Teams App',
    description: 'A landing page for an all-in-one remote team collaboration tool — chat, project tracking, and progress in one place, built to convert early sign-ups.',
    tag: 'Web Development',
    image: `${import.meta.env.BASE_URL}portfolio/teams-landing.png`,
    url: 'https://juan-team-app.webflow.io/',
    links: [
      { label: 'Behance', url: 'https://www.behance.net/gallery/227959049/Team-App-Collaborator-App' },
      { label: 'Instagram', url: 'https://www.instagram.com/p/DNejp3EPyjx/?igsh=MWJuandlOW0zZjBwaQ==' },
    ],
  },
  {
    title: 'Aesthetic Music Player',
    description: 'A minimal, interaction-first music player interface exploring motion and micro-feedback.',
    tag: 'Web Development',
    image: `${import.meta.env.BASE_URL}portfolio/musicplayer.png`,
    url: 'https://juanca99col.github.io/MusicPlayer/',
    links: [
      { label: 'GitHub', url: 'https://github.com/JUANCA99COL/MusicPlayer' },
    ],
  },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Fast, scalable websites and web apps built with modern stacks — from marketing sites to full products.',
  },
  {
    title: 'UX Design',
    description: 'Research-driven interfaces that feel obvious to use. Wireframes, prototypes, and design systems in Figma.',
  },
  {
    title: 'Digital Marketing',
    description: 'Positioning, content, and growth strategy that turns visibility into pipeline — built alongside the product, not after it.',
  },
  {
    title: 'Brand & Identity',
    description: 'Logos, visual systems, and motion identity that give a young company a voice worth remembering.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start with your business, your users, and your competitors — so every decision has a reason behind it.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes turn into high-fidelity UI, tested against real use cases before a single line of code ships.',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Clean, performant builds — responsive by default, animated with intent, and ready to scale.',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    description: 'We ship, measure, and keep iterating with marketing support that compounds over time.',
  },
]

export interface PricingPlan {
  name: string
  price: string
  yearlyPrice: string
  period: string
  features: string[]
  description: string
  buttonText: string
  href: string
  isPopular: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'STARTER',
    price: '1500',
    yearlyPrice: '1200',
    period: 'per month',
    features: [
      'One core web asset (site or landing page)',
      'UX audit & wireframes',
      '48-hour support response time',
      'Monthly performance report',
      'Async communication',
    ],
    description: 'For early-stage founders validating a product or launch.',
    buttonText: 'Start a project',
    href: 'https://wa.me/573239608399?text=Hi!%20I%27d%20like%20more%20information%20about%20the%20Starter%20package.',
    isPopular: false,
  },
  {
    name: 'GROWTH',
    price: '3500',
    yearlyPrice: '2800',
    period: 'per month',
    features: [
      'Full site or product design + build',
      'Design system in Figma',
      '24-hour support response time',
      'Dedicated project lead',
      'Monthly strategy call',
      'Content & marketing support',
    ],
    description: 'For growing teams shipping a full product surface.',
    buttonText: 'Start a project',
    href: 'https://wa.me/573239608399?text=Hi!%20I%27d%20like%20more%20information%20about%20the%20Growth%20package.',
    isPopular: true,
  },
  {
    name: 'SCALE',
    price: '6500',
    yearlyPrice: '5200',
    period: 'per month',
    features: [
      'Everything in Growth',
      'Multi-surface design & dev (web, product, brand)',
      'Priority same-day support',
      'Dedicated design + engineering pod',
      'Quarterly brand & growth strategy',
      'Custom reporting & analytics',
    ],
    description: 'For companies that need an embedded design & dev team.',
    buttonText: 'Start a project',
    href: 'https://wa.me/573239608399?text=Hi!%20I%27d%20like%20more%20information%20about%20the%20Scale%20package.',
    isPopular: false,
  },
]
