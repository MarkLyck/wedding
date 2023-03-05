import { Navigation } from '@/components/Navigation'
import { Registry } from '@/components/registry'
import { PageContent } from '@/ui/PageContent'

const Page = () => (
  <div>
    <Navigation />
    <PageContent>
      <Registry />
    </PageContent>
  </div>
)

export default Page
