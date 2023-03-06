'use client'

import Image from 'next/image'

import { Map } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { fancyFont } from '@/lib/fonts'
import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

import churchImg from './images/allerslev_kirke.jpg'
import groSpiseriImg from './images/gro_spiseri.jpg'
import harbourImg from './images/harbour_bathing.jpg'
import herthadalenImg from './images/herthadalen2.jpg'
import heyCaptainImg from './images/hey_captain.jpg'

const EventDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="max-w-md whitespace-pre-line text-center md:text-left">
    {children}
  </p>
)

const MapButton = ({ href }: { href: string }) => {
  const t = useTranslations('schedule')

  return (
    <Button
      className="w-full capitalize"
      variant="outline"
      onClick={() => {
        window.open(href, '_blank')
      }}
    >
      <Map className="mr-2 h-4" />
      {t('map')}
    </Button>
  )
}

type ScheduleItemProps = {
  title: string
  locationName: string
  description: string
  time: string
  address: string
  mapsLink: string
  imageSrc: any
}

const ScheduleItem = ({
  title,
  locationName,
  description,
  time,
  address,
  mapsLink,
  imageSrc,
}: ScheduleItemProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
      <div className="flex w-full flex-col items-center animate-in fade-in slide-in-from-left duration-1000 md:w-1/2">
        <Image
          src={imageSrc}
          className="h-[400px] rounded object-cover object-center"
          height={400}
          width={400}
          alt={locationName}
        />
        <h3
          className={`${fancyFont.className} mt-4 max-w-[400px] text-center text-2xl`}
        >
          {title}
        </h3>
        <p className="font-md">{time}</p>
      </div>
      <div className="flex w-full flex-col items-center gap-4 md:w-1/2">
        <p className={`${fancyFont.className} text-xl`}>{locationName}</p>
        <EventDescription>{description}</EventDescription>
        <address className="underline">{address}</address>
        <MapButton href={mapsLink} />
      </div>
    </div>
  )
}

const DateSeparator = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full items-center">
    <div className="h-0.5 w-full rounded bg-stone-300" />
    <Title className="mx-4 whitespace-nowrap font-bold">{children}</Title>
    <div className="h-0.5 w-full rounded bg-stone-300" />
  </div>
)

export const Schedule = () => {
  const t = useTranslations('schedule')
  return (
    <div className="flex flex-col items-center gap-8">
      <Title>{t('title')}</Title>
      <Description>{t('description')}</Description>
      <DateSeparator>{t('welcome_event_date')}</DateSeparator>

      <ScheduleItem
        title={t('welcome_event_title')}
        time={t('welcome_event_time')}
        locationName={t('welcome_event_name')}
        description={t('welcome_event_description')}
        address={t('welcome_event_address')}
        mapsLink="https://goo.gl/maps/xBrBUv9WjiTvm7Cq9"
        imageSrc={heyCaptainImg}
      />

      <DateSeparator>{t('ceremony_date')}</DateSeparator>
      <ScheduleItem
        title={t('ceremony_title')}
        time={t('ceremony_time')}
        locationName={t('ceremony_name')}
        description={t('ceremony_description')}
        address={t('ceremony_address')}
        mapsLink="https://goo.gl/maps/qf6xvHkW8kcrZJKU9"
        imageSrc={churchImg}
      />
      <ScheduleItem
        title={t('reception_title')}
        time={t('reception_time')}
        locationName={t('reception_name')}
        description={t('reception_description')}
        address={t('reception_address')}
        mapsLink="https://goo.gl/maps/qWwv1HJp3BozCf6M6"
        imageSrc={herthadalenImg}
      />
      <DateSeparator>{t('saturday_event_date')}</DateSeparator>
      <ScheduleItem
        title={t('saturday_event_title')}
        time={t('saturday_event_time')}
        locationName={t('saturday_event_name')}
        description={t('saturday_event_description')}
        address={t('saturday_event_address')}
        mapsLink="https://goo.gl/maps/v3g9NgtZwTTdxURZ6"
        imageSrc={groSpiseriImg}
      />
      <DateSeparator>{t('sunday_event_date')}</DateSeparator>
      <ScheduleItem
        title={t('sunday_event_title')}
        time={t('sunday_event_time')}
        locationName={t('sunday_event_name')}
        description={t('sunday_event_description')}
        address={t('sunday_event_address')}
        mapsLink="https://goo.gl/maps/2yv97vTVzHBzU5Jo8"
        imageSrc={harbourImg}
      />
      <p>{t('end_comment')}</p>
    </div>
  )
}
