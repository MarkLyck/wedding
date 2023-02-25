import { useTranslations } from 'next-intl'

import { Navigation } from '@/components/Navigation'
import { RSVP } from '@/components/rsvp'
import { cormorantGaramond } from '@/lib/fonts'

export const Hero = () => {
  const t = useTranslations('home')

  return (
    <div className="h-screen bg-white p-8">
      <div className={`relative h-full bg-hero bg-cover bg-top`}>
        <Navigation>
          <RSVP />
        </Navigation>
        <div
          className={`${cormorantGaramond.className} mt-40 flex flex-col items-center justify-center`}
        >
          <h2 className="text-lg font-semibold text-black">
            {t('hero.title')}
          </h2>
          <p
            className={`font-500 mb-4 text-4xl tracking-tight text-black sm:text-5xl lg:text-6xl`}
          >
            Mark & Grace
          </p>
          <p className={`mx-auto max-w-xl text-xl text-black`}>
            {t('hero.date')}
          </p>
        </div>
      </div>
    </div>
  )
}
