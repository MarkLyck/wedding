/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // https://vercel.com/design/color
    colors: {
      vercel: {
        pink: '#FF0080',
        blue: '#0070F3',
        cyan: '#50E3C2',
        orange: '#F5A623',
        violet: '#7928CA',
      },
    },
    backgroundImage: {
      hero: 'url("../public/images/engagement/pillars.jpg")',
      // hero: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 97%), url("../public/images/engagement/pillars.jpg")',
    },
    keyframes: ({ theme }) => ({
      rerender: {
        '0%': {
          'border-color': theme('colors.vercel.pink'),
        },
        '40%': {
          'border-color': theme('colors.vercel.pink'),
        },
      },
      highlight: {
        '0%': {
          background: theme('colors.vercel.pink'),
          color: theme('colors.white'),
        },
        '40%': {
          background: theme('colors.vercel.pink'),
          color: theme('colors.white'),
        },
      },
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      translateXReset: {
        '100%': {
          transform: 'translateX(0)',
        },
      },
      fadeToTransparent: {
        '0%': {
          opacity: 1,
        },
        '40%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
        },
      },
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    }),
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [require('tailwindcss-animate')],
}
