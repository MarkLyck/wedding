import Link from 'next/link';

const NavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={`${className} relative px-4 py-2 text-zinc-500 hover:text-black after:bg-neutral-600 after:w-0.5 after:h-4 after:content-[' '] after:block after:absolute after:top-1/2 after:-translate-y-1/2 duration-200 transition-colors`}
  >
    {children}
  </Link>
);

export const Navigation = () => {
  return (
    <div className="w-full flex justify-center pt-16">
      <ul className="flex">
        <li>
          <NavLink href="/" className="after:w-0">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink href="/locations">LOCATIONS</NavLink>
        </li>
        <li>
          <NavLink href="/rsvp">RSVP</NavLink>
        </li>
      </ul>
    </div>
  );
};
