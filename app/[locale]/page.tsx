import { Navigation } from '@/components/Navigation'
import { OurStory } from '@/components/OurStory'
import { Hero } from '@/components/hero'

const Page = () => (
  <div className="mx-auto flex max-w-7xl flex-col">
    <Navigation />
    <Hero />
    <OurStory />
  </div>
)

export default Page
