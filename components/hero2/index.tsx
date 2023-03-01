import { useTranslations } from 'next-intl'

import { Navigation } from '@/components/Navigation'
import { cormorantGaramond } from '@/lib/fonts'

export const Hero = () => {
  const t = useTranslations('home')

  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="flex h-screen w-1/3 flex-col items-center gap-4 bg-parchment p-8 text-center">
        <p className={`mx-auto max-w-xl text-xl text-black`}>
          Let's celebrate!
        </p>
        <h1 className={`${cormorantGaramond.className} text-6xl`}>
          Grace & Mark
        </h1>
        <p className={`mx-auto max-w-xl text-xl text-black`}>
          {t('hero.date')}
        </p>
      </div>
      <div className="h-screen w-2/3 bg-hero2 bg-cover bg-top">
        <Navigation />
      </div>
    </div>
  )
}
