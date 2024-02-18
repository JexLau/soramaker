import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-base text-main-bg hover:bg-slate-100 hover:text-white bg-gradient-to-l from-main-blue to-main-purple bg-clip-text text-transparent"
    >
      {children}
    </Link>
  )
}
