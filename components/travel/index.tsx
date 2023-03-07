import Image from 'next/image'

import { Bus, Car, Home, Plane, Train } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

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
  return (
    <div className="flex flex-col items-center gap-12">
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <Image
        src={nyhavnImg}
        height={280}
        width={600}
        alt="nyhavn"
        className="rounded"
      />
      <TravelSection
        Icon={Plane}
        type={t('flights')}
        title={t('getting_to_copenhagen')}
        description={t('getting_to_copenhagen_description')}
      />
      <TravelSection
        Icon={Home}
        type={t('renting_an_apartment')}
        title={t('airbnb')}
        description={t('airbnb_description')}
      />
      <TravelSection
        Icon={Home}
        type={t('hotel')}
        title={t('hotel_title')}
        description={t('hotel_description')}
      />
      <TravelSection
        Icon={Bus}
        type={t('travel_note')}
        title={t('how_to_get_around_in_copenhagen')}
        description={t('how_to_get_around_in_copenhagen_description')}
      />
      <TravelSection
        Icon={Train}
        type={t('travel_note')}
        title={t('how_to_get_around_in_denmark')}
        description={t('how_to_get_around_in_denmark_description')}
      />
      <TravelSection
        Icon={Bus}
        type={t('travel_note')}
        title={t('transport_to_reception')}
        description={t('transport_to_reception_description')}
      />
      <TravelSection
        Icon={Car}
        type={t('rental_car')}
        title={t('rental_car_title')}
        description={t('rental_car_description')}
      />
    </div>
  )
}
