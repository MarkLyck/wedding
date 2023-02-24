'use client'

import Link from 'next/link'

import { useTranslations } from 'next-intl'

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

export const Navigation = ({ children }: { children: any }) => {
  const t = useTranslations('navigation')
  return (
    <div className="flex w-full  justify-center pt-16">
      <ul className="flex items-center">
        <li>
          <NavLink href="/" className="after:w-0">
            {t('home')}
          </NavLink>
        </li>
        <li>
          <NavLink href="/locations">{t('locations')}</NavLink>
        </li>
        <li>{children}</li>
      </ul>
    </div>
  )
}
