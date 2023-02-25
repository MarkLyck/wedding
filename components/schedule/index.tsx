import { useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

const EventDescription = ({ children }: { children: React.ReactNode }) => (
  <p>{children}</p>
)

export const Schedule = () => {
  const t = useTranslations('schedule')
  return (
    <div className="align-center flex flex-col">
      <Description>{t('description')}</Description>
      <Title>{t('thursday_date')}</Title>
      <EventDescription>{t('thursday_description')}</EventDescription>
      <Title>{t('friday_date')}</Title>
      <EventDescription>{t('friday_description')}</EventDescription>
      <Title>{t('saturday_date')}</Title>
      <EventDescription>{t('saturday_description')}</EventDescription>
      <Title>{t('sunday_date')}</Title>
      <EventDescription>{t('sunday_description')}</EventDescription>
    </div>
  )
}
