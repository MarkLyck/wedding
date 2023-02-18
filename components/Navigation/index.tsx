'use client'

import Link from 'next/link'

import { RSVPDialog } from '@/components/rsvp'

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
    className={`${className} after:content-[' '] text-zinc-500 after:bg-neutral-600 hover:text-black relative px-4 py-2 transition-colors duration-200 after:absolute after:top-1/2 after:block after:h-4 after:w-0.5 after:-translate-y-1/2`}
  >
    {children}
  </Link>
)

export const Navigation = () => {
  return (
    <div className="flex w-full justify-center pt-16">
      <ul className="flex">
        <li>
          <NavLink href="/" className="after:w-0">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink href="/locations">LOCATIONS</NavLink>
        </li>
        {/* <li>
          <a
            onClick={() => setIsRSVPOpen(!isRSVPOpen)}
            className="after:content-[' '] text-zinc-500 after:bg-neutral-600 hover:text-black relative px-4 py-2 transition-colors duration-200 after:absolute after:top-1/2 after:block after:h-4 after:w-0.5 after:-translate-y-1/2"
          >
            RSVP
          </a>
        </li> */}
        <li>
          <RSVPDialog />
        </li>
      </ul>
    </div>
  )
}
