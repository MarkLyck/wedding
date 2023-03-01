'use client'

import { Link, useTranslations } from 'next-intl'

import { RSVP } from '@/components/rsvp'
import { cormorantGaramond } from '@/lib/fonts'

const NavLink = ({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className={`${className} after:content-[' '] relative px-4 py-2 text-zinc-500 transition-colors duration-200 after:absolute after:top-1/2 after:block after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-neutral-600 hover:text-black`}
  >
    {children}
  </Link>
)

export const Navigation = () => {
  const t = useTranslations('navigation')

  return (
    <div>
      <div className="flex justify-center">
        <Link
          href="/"
          className={`${cormorantGaramond.className} mx-auto my-6 inline text-center text-4xl text-stone-800 transition-colors duration-200 hover:cursor-pointer hover:text-black`}
        >
          Grace & Mark
        </Link>
      </div>
      <div className="flex w-full justify-center ">
        <ul className="flex items-center">
          <li>
            <NavLink href="/" className="after:content-[]">
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink href="/schedule">{t('schedule')}</NavLink>
          </li>
          <li>
            <NavLink href="/travel">{t('travel')}</NavLink>
          </li>
          <li>
            <NavLink href="/registry">{t('registry')}</NavLink>
          </li>
          <li>
            <NavLink href="/faq">{t('faq')}</NavLink>
          </li>
          <li>
            <RSVP />
          </li>
        </ul>
      </div>
    </div>
  )
}
