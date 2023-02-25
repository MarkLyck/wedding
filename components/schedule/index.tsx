import { useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

export const Schedule = () => {
  const t = useTranslations('schedule')
  return (
    <div className="align-center flex flex-col">
      <Description>{t('description')}</Description>
      <Title>{t('thursday_date')}</Title>
      <Title>{t('friday_date')}</Title>
      <Title>{t('saturday_date')}</Title>
      <Title>{t('sunday_date')}</Title>
    </div>
  )
}
