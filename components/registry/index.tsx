import { useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

export const Registry = () => {
  const t = useTranslations('registry')

  return (
    <div className="flex flex-col items-center gap-4">
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
    </div>
  )
}
