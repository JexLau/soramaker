import { PropsWithChildren } from "react"
import { Footer } from "../Footer"
import clsx from "clsx"

interface MainContentProps extends PropsWithChildren {
  className?: string
}

export const MainContent = ({ children, className }: MainContentProps) => {
  return <div className={clsx(["w-full h-full overflow-auto mt-[88px] pt-[40px]", className])}>
    {children}
    <Footer />
  </div>
}