import { useTranslations } from 'next-intl'

import { fancyFont } from '@/lib/fonts'
import { LocaleButton } from '@/ui/LocaleButton'

export const Hero = () => {
  const t = useTranslations('home')

  return (
    <div className="text-center">
      <div className="absolute right-4 top-4">
        <LocaleButton />
      </div>
      <div className={`relative h-[600px] bg-hero bg-cover bg-top`}>
        <div
          className={`${fancyFont.className} flex flex-col items-center justify-center pt-48`}
        >
          <h2 className="text-lg font-semibold text-black">
            {t('hero.title')}
          </h2>
          <p
            className={`font-500 mb-4 text-4xl tracking-tight text-black sm:text-5xl lg:text-6xl`}
          >
            Grace & Mark
          </p>
          <p className={`mx-auto max-w-xl text-xl text-black`}>
            {t('hero.date')}
          </p>
        </div>
      </div>
    </div>
  )
}
