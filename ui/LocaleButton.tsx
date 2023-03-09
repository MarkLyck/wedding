'use client'

import { useRouter } from 'next/navigation'

import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export const LocaleButton = () => {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('common')

  return (
    <Button
      onClick={() => router.push(locale === 'en' ? '/dk' : '/en')}
      size="sm"
      className="hidden sm:block"
    >
      <span style={{ marginRight: 8 }}>{locale === 'en' ? '🇩🇰' : '🇺🇸'}</span>
      <span>{t('language')}</span>
    </Button>
  )
}
