import withNextIntl from 'next-intl/plugin'

// const withNextIntl = require('next-intl/plugin')(
//   // This is the default (also the `src` folder is supported out of the box)
//   './i18n.ts'
// )

export const nextConfig = withNextIntl('./i18n.ts')({
  // Other Next.js configuration ...
  reactStrictMode: true,
  experimental: { appDir: true },
})

export default nextConfig
