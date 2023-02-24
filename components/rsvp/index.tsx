import pick from 'lodash/pick'
import { NextIntlClientProvider, useLocale } from 'next-intl'

import { RSVPDialog } from './dialog'

export async function RSVP() {
  const locale = useLocale()
  const messages = (await import(`../../lib/locale/${locale}.json`)).default

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pick(messages, 'rsvp_form')}
    >
      <RSVPDialog />
    </NextIntlClientProvider>
  )
}
