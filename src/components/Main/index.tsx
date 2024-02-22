import { PropsWithChildren } from "react"
import { Footer } from "../Footer"

interface MainContentProps extends PropsWithChildren { }

export const MainContent = ({ children }: MainContentProps) => {
  return <div className="w-full h-full overflow-auto mt-[88px] pt-[30px]">
    {children}
    <Footer />
  </div>
}