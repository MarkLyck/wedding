import { useTranslations } from 'next-intl'

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
  </div>
)

export const Faq = () => {
  const t = useTranslations('faq')

  return (
    <div className="flex flex-col items-center gap-4">
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <FaqItem
        title={t('when_should_i_arrive_question')}
        description={t('when_should_i_arrive_answer')}
      />
      <FaqItem
        title={t('where_should_i_stay_question')}
        description={t('where_should_i_stay_answer')}
      />
      <FaqItem
        title={t('what_is_the_dress_code_question')}
        description={t('what_is_the_dress_code_answer')}
      />
      <FaqItem
        title={t('covid_restrictions_question')}
        description={t('covid_restrictions_answer')}
      />
      <FaqItem
        title={t('can_i_bring_a_guest_question')}
        description={t('can_i_bring_a_guest_answer')}
      />
    </div>
  )
}
