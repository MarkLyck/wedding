import { SectionHeader } from '@/ui/SectionHeader'

import { Section } from './Section'

export const OurStory = () => {
  return (
    <div className="p-8">
      <SectionHeader
        title="A short timeline of our story"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud."
      />
      <Section title="How we met" description="Lorem ipsum" />
      <Section title="Moved to New York" description="Lorem ipsum " />
      <Section title="Got engaged" description="Lorem ipsum " />
      <Section title="Married in D.C" description="Lorem ipsum " />
      <Section title="Celebrating in Copenhagen" description="Lorem ipsum " />
    </div>
  )
}
