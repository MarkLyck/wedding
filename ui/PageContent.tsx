import { Heart } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { fancyFont } from '@/lib/fonts'

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations('common')

  return (
    <div className="flex justify-center px-4 pt-4 pb-8 sm:px-8">
      <div className="flex w-full max-w-5xl flex-col bg-white p-4 sm:p-8">
        {children}
        <div className="mt-8 flex flex-col items-center justify-center">
          <Heart className="mb-4" />
          <p className={`text-center ${fancyFont.className}`}>{t('footer')}</p>
        </div>
      </div>
    </div>
  )
}
