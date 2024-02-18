import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { GTag } from '@/components/GTag'
import { Umami } from '@/components/Umami'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

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
        'h-full scroll-smooth relative bg-[#0d0821] antialiased text-main-text bg',
        inter.variable,
        lexend.variable,
      )}
    >
      <GTag />
      <Umami />
      <body className="flex h-full flex-col overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
