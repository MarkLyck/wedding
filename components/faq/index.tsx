import { useLocale, useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

const FaqItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="flex max-w-2xl flex-col gap-4">
    <Title>{title}</Title>
    <Description>{description}</Description>
    <div className="my-8 h-[1px] w-full rounded bg-zinc-400" />
  </div>
)

export const Faq = () => {
  const t = useTranslations('faq')
  const locale = useLocale()

  return (
    <div className="flex flex-col items-center gap-4">
      <Title className="mb-12">{t('title')}</Title>
      {locale === 'en' ? (
        <FaqItem
          title={t('when_should_i_arrive_question')}
          description={t('when_should_i_arrive_answer')}
        />
      ) : null}
      <FaqItem
        title={t('what_is_the_dress_code_question')}
        description={t('what_is_the_dress_code_answer')}
      />
      {locale === 'en' ? (
        <FaqItem
          title={t('covid_restrictions_question')}
          description={t('covid_restrictions_answer')}
        />
      ) : null}
      <FaqItem
        title={t('bus_pickup_location_question')}
        description={t('bus_pickup_location_answer')}
      />
      <Description>
        {t('end_text')}{' '}
        <a href="mailto:07gracepark@gmail.com" className="underline">
          {t('email')}
        </a>
      </Description>
    </div>
  )
}
