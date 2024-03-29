import Image from 'next/image'

import { Bus, Car, Home, Plane, Train } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

import lake from './images/lake.jpg'
import nyhavnImg from './images/nyhavn.jpg'

const TravelSection = ({
  type,
  title,
  description,
  Icon,
}: {
  type: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon?: any
}) => (
  <div className="flex max-w-2xl flex-col items-center gap-4">
    {Icon !== undefined ? <Icon className="h-12 w-12" /> : null}
    <span>{type}</span>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <div className="mt-8 h-[1px] w-full rounded bg-zinc-400" />
  </div>
)

export const Travel = () => {
  const t = useTranslations('travel')
  const locale = useLocale()

  return (
    <div className="flex flex-col items-center gap-12">
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      {locale === 'en' ? (
        <Image
          src={nyhavnImg}
          height={280}
          width={600}
          alt="nyhavn"
          className="rounded"
        />
      ) : (
        <Image
          src={lake}
          height={280}
          width={600}
          alt="herthadalen"
          className="rounded"
        />
      )}
      {locale === 'en' ? (
        <TravelSection
          Icon={Plane}
          type={t('flights')}
          title={t('getting_to_copenhagen')}
          description={t('getting_to_copenhagen_description')}
        />
      ) : null}
      {locale === 'en' ? (
        <TravelSection
          Icon={Home}
          type={t('renting_an_apartment')}
          title={t('airbnb')}
          description={t('airbnb_description')}
        />
      ) : null}
      <TravelSection
        Icon={Home}
        type={t('hotel')}
        title={t('hotel_title')}
        description={t('hotel_description')}
      />
      <TravelSection
        Icon={Home}
        type={t('hotel')}
        title={t('hotel_title_2')}
        description={t('hotel_description_2')}
      />
      <TravelSection
        Icon={Home}
        type={t('hotel')}
        title={t('hotel_title_3')}
        description={t('hotel_description_3')}
      />
      {locale === 'en' ? (
        <TravelSection
          Icon={Bus}
          type={t('travel_note')}
          title={t('how_to_get_around_in_copenhagen')}
          description={t('how_to_get_around_in_copenhagen_description')}
        />
      ) : null}
      {locale === 'en' ? (
        <TravelSection
          Icon={Train}
          type={t('travel_note')}
          title={t('how_to_get_around_in_denmark')}
          description={t('how_to_get_around_in_denmark_description')}
        />
      ) : null}
      <TravelSection
        Icon={Bus}
        type={t('travel_note')}
        title={t('transport_to_reception')}
        description={t('transport_to_reception_description')}
      />
      {locale === 'en' ? (
        <TravelSection
          Icon={Car}
          type={t('rental_car')}
          title={t('rental_car_title')}
          description={t('rental_car_description')}
        />
      ) : null}
      {locale === 'en' ? (
        <TravelSection
          Icon={Plane}
          type={t('travel_note')}
          title={t('additional_travel_tips')}
          description={t('additional_travel_tips_description')}
        />
      ) : null}
      {locale === 'en' ? (
        <TravelSection
          Icon={Bus}
          type={t('travel_note')}
          title={t('day_passes')}
          description={t('day_passes_description')}
        />
      ) : null}
    </div>
  )
}
