import { Pricing as PricingBlock } from './ui/pricing'
import { pricingPlans } from '../data/content'

export default function Pricing() {
  return (
    <section id="pricing">
      <PricingBlock
        plans={pricingPlans}
        title="Simple, Transparent Pricing"
        description={`Retainers built for founders and startups\nEvery plan includes design, development, and a dedicated point of contact.`}
      />
    </section>
  )
}
