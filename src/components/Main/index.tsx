import { PropsWithChildren } from "react"

interface MainContentProps extends PropsWithChildren { }

export const MainContent = ({ children }: MainContentProps) => {
  return <div className="w-full h-full overflow-auto mt-24">
    {children}
  </div>
}