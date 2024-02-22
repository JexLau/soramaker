import clsx from 'clsx'
import Link from 'next/link'

export function NavLink({
  href,
  children,
  className,
}: {
  href: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={clsx(["inline-block rounded-lg px-2 py-1 text-base hover:bg-slate-100 hover:text-white bg-gradient-to-l from-main-blue to-main-purple bg-clip-text text-transparent", className])}
    >
      {children}
    </Link>
  )
}
