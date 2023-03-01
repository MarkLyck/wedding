import { Navigation } from '@/components/Navigation'
import { OurStory } from '@/components/OurStory'
import { Hero } from '@/components/hero'
import { PageContent } from '@/ui/PageContent'

const Page = () => (
  <div>
    <Navigation />
    <PageContent>
      <Hero />
      <OurStory />
    </PageContent>
  </div>
)

export default Page
