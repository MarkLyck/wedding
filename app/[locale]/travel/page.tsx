import { Navigation } from '@/components/Navigation'
import { Travel } from '@/components/travel'
import { PageContent } from '@/ui/PageContent'

const Page = () => (
  <div>
    <Navigation />
    <PageContent>
      <Travel />
    </PageContent>
  </div>
)

export default Page
