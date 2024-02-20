import clsx from "clsx"
import { PropsWithChildren } from "react"
import loading from '@/images/loading.svg'
import Image from "next/image"

export interface FreeToTryProps extends PropsWithChildren {
  className?: string
  text?: string
  onClick?: () => void
  isLoading?: boolean
}

export const FreeToTry = ({ className, text = 'GO', onClick, isLoading }: FreeToTryProps) => {
  if (isLoading) {
    return <div className="flex py-[6px] px-8 justify-center items-center">
      <Image alt="loading" className="w-6 h-6 animate-spin" src={loading} />
    </div>
  }

  return <div
    onClick={onClick}
    className={clsx(["relative py-[6px] px-8 text-main-text hover:text-invert hover:bg-clip-text hover:scale-105 cursor-pointer font-bold rounded-[30px] transition duration-150 ease-in-out bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.main-blue)_0%,theme(colors.main-purple)_10%,theme(colors.main-blue)_20%)] animate-[shimmer_2.5s_linear_infinite] after:flex after:absolute after:bg-gradient-to-l  after:from-main-blue  after:to-main-purple after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)] after:items-center after:justify-center", `content-[${text}]`, className])}
    aria-label={text}
  >
    {text}
  </div>

}


