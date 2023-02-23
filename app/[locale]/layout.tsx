import React from 'react'

import { notFound } from 'next/navigation'

import { useLocale } from 'next-intl'

import { inter } from '@/lib/fonts'

import '@/styles/globals.css'

import Providers from './providers'

type RootLayoutProps = {
  children: React.ReactNode
  params: any
}

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <title>Mark & Grace wedding</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
