import { useTranslations } from 'next-intl'

import { SectionHeader } from '@/ui/SectionHeader'

import { Section } from './Section'
import howWeMetImg from './images/after_we_met.jpg'
import newYorkImg from './images/new_york.jpg'
import proposalImg from './images/proposal.jpg'
import weddingImg from './images/wedding.jpg'

export const OurStory = () => {
  const t = useTranslations('our_story')
  return (
    <div className="flex flex-col gap-8 p-8">
      <SectionHeader title={t('title')} description="" />
      <div className="relative flex flex-col gap-8 p-8">
        <div className="absolute inset-y-4 left-1/2 w-0.5 bg-zinc-300 opacity-0 md:opacity-100" />
        <Section
          title={t('how_we_met_title')}
          date="06. 02. 2019"
          description={t('how_we_met_description')}
          imageSrc={howWeMetImg}
          direction="right"
        />
        <Section
          title={t('moved_to_new_york_title')}
          date={t('moved_to_new_york_date')}
          description={t('moved_to_new_york_description')}
          imageSrc={newYorkImg}
          direction="left"
        />
        <Section
          title={t('got_engaged_title')}
          date={t('got_engaged_date')}
          description={t('got_engaged_description')}
          imageSrc={proposalImg}
          direction="right"
        />
        <Section
          title={t('got_married_title')}
          date={t('got_married_date')}
          description={t('got_married_description')}
          imageSrc={weddingImg}
          direction="left"
        />
      </div>
      <h2 className="text-center">{t('celebrating_our_marriage')}</h2>
    </div>
  )
}
