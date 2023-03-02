'use client'

import { useEffect } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@/components/ui/toaster'
import { analyticsInit } from '@/lib/analytics'
import { queryClient } from '@/lib/queryClient'

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('Providers useEffect')
    analyticsInit()
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </>
  )
}
