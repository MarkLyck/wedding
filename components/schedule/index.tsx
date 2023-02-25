import { useTranslations } from 'next-intl'

import { Description } from '@/ui/Description'
import { Title } from '@/ui/Title'

const EventDescription = ({ children }: { children: React.ReactNode }) => (
  <p>{children}</p>
)

const mapDefaultProps: any = {
  width: 320,
  height: 240,
  style: { border: 0, borderRadius: 8 },
  allowFullScreen: true,
  loading: 'lazy',
  referrerPolicy: 'no-referrer-when-downgrade"',
}

export const Schedule = () => {
  const t = useTranslations('schedule')
  return (
    <div className="flex flex-col items-center gap-4">
      <Description>{t('description')}</Description>
      <Title>{t('welcome_event_date')}</Title>
      <p>{t('welcome_event_name')}</p>
      <EventDescription>{t('welcome_event_description')}</EventDescription>
      {/* TODO: location */}
      <a href="" target="_blank" rel="noreferrer">
        {t('welcome_event_address')}
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.437760116519!2d12.595090299999997!3d55.68137659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253236cf281b9%3A0x106d4b1763cbdeaf!2sKv%C3%A6sthusbroen%201%2C%201252%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1677355846094!5m2!1sen!2sdk"
        {...mapDefaultProps}
      />
      <Title>{t('ceremony_date')}</Title>
      <p>{t('ceremony_name')}</p>
      <EventDescription>{t('ceremony_description')}</EventDescription>
      <a
        href="https://goo.gl/maps/tdfiS7WuNXjpg1Yb6"
        target="_blank"
        rel="noreferrer"
      >
        {t('ceremony_address')}
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72135.15346486183!2d11.89557157928719!3d55.59812301327831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46528a67b7832abb%3A0x734267ce29387d86!2sAllerslev%20Kirke!5e0!3m2!1sen!2sdk!4v1677355155969!5m2!1sen!2sdk"
        {...mapDefaultProps}
      />

      <p>{t('reception_name')}</p>
      <EventDescription>{t('reception_description')}</EventDescription>
      <a
        href="https://goo.gl/maps/qWwv1HJp3BozCf6M6"
        target="_blank"
        rel="noreferrer"
      >
        {t('reception_address')}
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8932.2330930907!2d11.941498135953942!3d55.60676729439938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46528a0efbcfcc01%3A0x31033dbcd664a4dd!2sRestaurant%20Herthadalen!5e0!3m2!1sen!2sdk!4v1677355346422!5m2!1sen!2sdk"
        {...mapDefaultProps}
      />
      <Title>{t('saturday_event_date')}</Title>
      <p>{t('saturday_event_name')}</p>
      <EventDescription>{t('saturday_event_description')}</EventDescription>
      {/* TODO: location */}
      <a href="" target="_blank" rel="noreferrer">
        {t('saturday_event_address')}
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.437760116519!2d12.595090299999997!3d55.68137659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253236cf281b9%3A0x106d4b1763cbdeaf!2sKv%C3%A6sthusbroen%201%2C%201252%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1677355846094!5m2!1sen!2sdk"
        {...mapDefaultProps}
      />
      <Title>{t('sunday_event_date')}</Title>
      <p>{t('sunday_event_name')}</p>
      <EventDescription>{t('sunday_event_description')}</EventDescription>
      {/* TODO: location */}
      <a href="" target="_blank" rel="noreferrer">
        {t('sunday_event_address')}
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.437760116519!2d12.595090299999997!3d55.68137659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253236cf281b9%3A0x106d4b1763cbdeaf!2sKv%C3%A6sthusbroen%201%2C%201252%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1677355846094!5m2!1sen!2sdk"
        {...mapDefaultProps}
      />
    </div>
  )
}
