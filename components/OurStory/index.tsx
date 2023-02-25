import { useTranslations } from 'next-intl'

import { SectionHeader } from '@/ui/SectionHeader'

import { Section } from './Section'

export const OurStory = () => {
  const t = useTranslations('our_story')
  return (
    <div className="flex flex-col gap-8 p-8">
      <SectionHeader title={t('title')} description={t('subtitle')} />
      <div className="relative flex flex-col gap-8 p-8">
        <div className="absolute inset-y-4 left-1/2 w-0.5 bg-zinc-300" />
        <Section
          title={t('how_we_met_title')}
          date="06. 02. 2019"
          description={t('how_we_met_description')}
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="right"
        />
        <Section
          title="Moved to New York"
          date="Fall 2019"
          description="After our trip Grace moved to New York to specialize in pediatric dentistry where Mark joined slightly after."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="left"
        />
        <Section
          title="Got engaged"
          date="October 2021"
          description="After our trip Grace moved to New York to specialize in pediatric dentistry where Mark joined slightly after."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="right"
        />
        <Section
          title="Married in D.C."
          date="November 2022"
          description="After our trip Grace moved to New York to specialize in pediatric dentistry where Mark joined slightly after."
          imageSrc="/images/our_story/after_we_met.jpg"
          direction="left"
        />
      </div>
    </div>
  )
}
