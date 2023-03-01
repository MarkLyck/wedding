import { Navigation } from '@/components/Navigation'
import { Schedule } from '@/components/schedule'
import { PageContent } from '@/ui/PageContent'

const Page = () => (
  <div>
    <Navigation />
    <PageContent>
      <Schedule />
    </PageContent>
  </div>
)

export default Page
