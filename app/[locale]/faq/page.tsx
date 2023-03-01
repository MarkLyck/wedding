import { Navigation } from '@/components/Navigation'
import { Faq } from '@/components/faq'
import { PageContent } from '@/ui/PageContent'

const Page = () => (
  <div>
    <Navigation />
    <PageContent>
      <Faq />
    </PageContent>
  </div>
)

export default Page
