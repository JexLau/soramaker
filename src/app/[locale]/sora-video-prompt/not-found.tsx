import Link from 'next/link'

import { NormalButton } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-main-text">404</p>
      <h1 className="mt-3 text-lg font-semibold text-main-text">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-main-text">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <NormalButton href="/" className="mt-10">
        Go back home
      </NormalButton>
    </SlimLayout>
  )
}
