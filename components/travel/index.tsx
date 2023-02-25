import { Bed, Bus, Car, Home, Plane, Train } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

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
  </div>
)

export const Travel = () => {
  const t = useTranslations('travel')
  return (
    <div className="flex flex-col items-center gap-4">
      <Title>{t('title')}</Title>
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
      {/* <TravelSection
        Icon={Bed}
        title={t('hotels')}
        description={t('hotels_description')}
      /> */}
      <TravelSection
        Icon={Bed}
        type={t('hotel')}
        title={t('hotel_1_name')}
        description={t('hotel_1_description')}
      />
      <TravelSection
        Icon={Bed}
        type={t('hotel')}
        title={t('hotel_2_name')}
        description={t('hotel_2_description')}
      />
      <TravelSection
        Icon={Car}
        type={t('rental_car')}
        title={t('rental_car_title')}
        description={t('rental_car_description')}
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
    </div>
  )
}
