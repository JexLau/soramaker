import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { GTag } from '@/components/GTag'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Record<string, string>
}) {
  const { locale } = params
  return (
    <html
      lang={locale}
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <GTag />
      <body className="flex h-full flex-col overflow-x-hidden">{children}</body>
    </html>
  )
}
