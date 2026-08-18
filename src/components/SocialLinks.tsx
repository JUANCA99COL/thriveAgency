import { FlipLinks } from './ui/flip-links'
import { social } from '../data/content'

const links = [
  { label: 'Instagram', href: social.instagram },
  { label: 'Behance', href: social.behance },
  { label: 'GitHub', href: social.github },
  { label: 'LinkedIn', href: social.linkedin },
]

export default function SocialLinks() {
  return <FlipLinks links={links} />
}
