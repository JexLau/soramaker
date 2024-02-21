// import clsx from "clsx"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"

const PlayGroundFeture = dynamic(() => import("./Client"), { ssr: false })

export function Playground() {
  const t = useTranslations("Playground")
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <PlayGroundFeture />
    </div>
  )
}
