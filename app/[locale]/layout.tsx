import React from 'react'

import { notFound } from 'next/navigation'

import { NextIntlClientProvider, useLocale } from 'next-intl'

import { inter } from '@/lib/fonts'
import { getMessages } from '@/lib/locale'

import '@/styles/globals.css'

import Providers from './providers'

type RootLayoutProps = {
  children: React.ReactNode
  params: any
}

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const locale = useLocale()
  const messages = getMessages(locale)
  console.log('🔈 ~ messages:', messages)

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
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
