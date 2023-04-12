import React from 'react'

import { notFound } from 'next/navigation'

import { NextIntlClientProvider, useLocale } from 'next-intl'

import { inter } from '@/lib/fonts'
import { getMessages } from '@/lib/locale'

import '@/styles/globals.css'

import Providers from './providers'

type RootLayoutProps = {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full min-h-screen bg-stone-100">{children}</div>
)

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const locale = useLocale()
  const messages = getMessages(locale)

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <title>Mark & Grace wedding</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Wrapper>{children}</Wrapper>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
