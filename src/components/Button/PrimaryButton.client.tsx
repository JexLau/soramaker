import { PropsWithChildren } from "react"

export interface PrimaryButtonProps extends PropsWithChildren {
  onClick?: () => void
}

export const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return <div className="group block px-6 py-2 rounded transition duration-600 ease-in-out font-bold text-white relative overflow-hidden cursor-pointer" onClick={() => onClick?.()}>
  <div className="absolute inset-0 bg-gradient-to-l from-main-blue to-main-purple group-hover:opacity-0 transition-opacity duration-600 ease-in-out"></div>
  <div className="absolute inset-0 bg-gradient-to-l from-main-purple to-main-blue opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out"></div>
  <span className="relative">{children}</span>
</div>
}

export default PrimaryButton;