'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

const EventDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="max-w-md whitespace-pre-line text-center">{children}</p>
)
const AddressLink = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => (
  <a href={href} target="_blank" rel="noreferrer" className="underline">
    {children}
  </a>
)

const MapButton = ({ href }: { href: string }) => {
  const t = useTranslations('schedule')

  return (
    <Button
      className="w-64 capitalize"
      onClick={() => {
        window.open(href, '_blank')
      }}
    >
      {t('map')}
    </Button>
  )
}

type ScheduleItemProps = {
  locationName: string
  description: string
  address: string
  mapsLink: string
}

const ScheduleItem = ({
  locationName,
  description,
  address,
  mapsLink,
}: ScheduleItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p>{locationName}</p>
      <AddressLink href={mapsLink}>{address}</AddressLink>
      <EventDescription>{description}</EventDescription>
      <MapButton href={mapsLink} />
    </div>
  )
}

export const Schedule = () => {
  const t = useTranslations('schedule')
  return (
    <div className="flex flex-col items-center gap-4">
      <Description>{t('description')}</Description>
      <Title>{t('welcome_event_date')}</Title>

      <ScheduleItem
        locationName={t('welcome_event_name')}
        description={t('welcome_event_description')}
        address={t('welcome_event_address')}
        mapsLink="https://goo.gl/maps/xBrBUv9WjiTvm7Cq9"
      />

      <Title>{t('ceremony_date')}</Title>
      <ScheduleItem
        locationName={t('ceremony_name')}
        description={t('ceremony_description')}
        address={t('ceremony_address')}
        mapsLink="https://goo.gl/maps/qf6xvHkW8kcrZJKU9"
      />
      <ScheduleItem
        locationName={t('reception_name')}
        description={t('reception_description')}
        address={t('reception_address')}
        mapsLink="https://goo.gl/maps/qWwv1HJp3BozCf6M6"
      />
      <Title>{t('saturday_event_date')}</Title>
      <p>{t('saturday_event_name')}</p>
      <ScheduleItem
        locationName={t('???')}
        description={t('saturday_event_description')}
        address={t('saturday_event_address')}
        mapsLink="https://goo.gl/maps/v3g9NgtZwTTdxURZ6"
      />
      <Title>{t('sunday_event_date')}</Title>
      <ScheduleItem
        locationName={t('sunday_event_name')}
        description={t('sunday_event_description')}
        address={t('sunday_event_address')}
        mapsLink="https://goo.gl/maps/2yv97vTVzHBzU5Jo8"
      />
    </div>
  )
}
