import React from 'react'

import { inter } from '@/lib/fonts'

import '@/styles/globals.css'

import Providers from './providers'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className={inter.className}>
    <head>
      <title>Mark & Grace wedding</title>
    </head>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export default RootLayout
