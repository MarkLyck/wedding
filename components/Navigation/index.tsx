'use client'

import { ReactNode } from 'react'

import { Link, useTranslations } from 'next-intl'

import { RSVP } from '@/components/rsvp'
import { fancyFont } from '@/lib/fonts'

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
    className={`${className} after:content-[' '] relative px-4 py-2 capitalize text-zinc-500 transition-colors duration-200 after:absolute after:top-1/2 after:block after:h-4 after:w-0.5 after:-translate-y-1/2 after:bg-neutral-600 hover:text-black`}
  >
    {children}
  </Link>
)

const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="">{children}</li>
)

export const Navigation = () => {
  const t = useTranslations('navigation')

  return (
    <div>
      <div className="flex justify-center">
        <Link
          href="/"
          className={`${fancyFont.className} mx-auto my-6 inline text-center text-4xl text-stone-800 transition-colors duration-200 hover:cursor-pointer hover:text-black`}
        >
          Grace & Mark
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <ul className="flex flex-wrap items-center justify-center">
          <ListItem>
            <NavLink href="/" className="after:content-[]">
              {t('home')}
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="/schedule">{t('schedule')}</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="/travel">{t('travel')}</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="/registry">{t('registry')}</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="/faq">{t('faq')}</NavLink>
          </ListItem>
          <ListItem>
            <RSVP />
          </ListItem>
        </ul>
      </div>
    </div>
  )
}
