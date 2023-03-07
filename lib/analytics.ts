import posthog from 'posthog-js'

const isBrowser = process.browser

let analyticsInitialized = false

export const analyticsInit = () => {
  if (analyticsInitialized) return

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY as string, {
    api_host: 'https://app.posthog.com',
    session_recording: {
      maskAllInputs: false,
    },
  })

  analyticsInitialized = true
}

export const analyticsIdentify = (data: {
  id: string
  firstName: string
  lastName: string
}) => {
  if (!analyticsInitialized) return

  posthog.identify(data.id, data)
}

// Only initialize analytics in production
if (isBrowser) {
  analyticsInit()
  // @ts-expect-error - intentional
  window.analyticsIdentify = analyticsIdentify
}
