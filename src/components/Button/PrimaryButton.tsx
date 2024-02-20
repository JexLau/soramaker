import clsx from "clsx"
import { PropsWithChildren } from "react"
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export interface PrimaryButtonProps extends PropsWithChildren {
  onClick?: () => void
  // tailwind classes
  className?: string
  href?: string
}

export const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
  if (props.href) {
    return <a href={props.href} className={clsx(["group block px-6 py-[7px] rounded transition duration-600 ease-in-out indent-4  font-bold text-white relative overflow-hidden cursor-pointer ", props.className])}>
      <div className="absolute inset-0 bg-gradient-to-l from-main-blue to-main-purple group-hover:opacity-0 transition-opacity duration-600 ease-in-out"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-main-purple to-main-blue opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
      <span className="relative inline-flex items-center">{children}
        <ArrowRightIcon className="h-5 w-5 ml-4 text-main-text animate-swing" />
      </span>
    </a>
  }
  return <div className={clsx(["group block px-6 py-[7px] rounded transition duration-600 ease-in-out indent-4  font-bold text-white relative overflow-hidden cursor-pointer ", props.className])}>
    <div className="absolute inset-0 bg-gradient-to-l from-main-blue to-main-purple group-hover:opacity-0 transition-opacity duration-600 ease-in-out"></div>
    <div className="absolute inset-0 bg-gradient-to-l from-main-purple to-main-blue opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
    <span className="relative inline-flex items-center">{children}
      <ArrowRightIcon className="h-5 w-5 ml-4 text-main-text animate-swing" />
    </span>
  </div>
}

export default PrimaryButton;