'use client'

import { useEffect } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { PostHogProvider } from 'posthog-js/react'

import { Toaster } from '@/components/ui/toaster'
import { analyticsInit } from '@/lib/analytics'
import { queryClient } from '@/lib/queryClient'

const posthogConfig = {
  api_host: 'https://app.posthog.com',
}

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    analyticsInit()
  }, [])

  return (
    <>
      <PostHogProvider
        apiKey={process.env.NEXT_PUBLIC_POSTHOG_API_KEY}
        // @ts-expect-error - bad type
        config={posthogConfig}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PostHogProvider>
      <Toaster />
    </>
  )
}
