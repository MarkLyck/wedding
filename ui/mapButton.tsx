import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export const MapButton = () => {
  const t = useTranslations('schedule')

  const handleClick = () => {
    console.log('click')
  }

  return <Button onClick={handleClick}>{t('map')}</Button>
}
