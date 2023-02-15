import '@/styles/globals.css'
import React from 'react'

import { inter } from '@/lib/fonts'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className={inter.className}>
    <head>
      <title>Mark & Grace wedding</title>
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
