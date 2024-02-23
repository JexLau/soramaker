// import clsx from "clsx"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"

const PlayGroundFeture = dynamic(() => import("./Client"), { ssr: false })

export function Playground({ numbers}: { numbers?: number}) {
  const t = useTranslations("Playground")
  return (
    <PlayGroundFeture numbers={numbers} />
  )
}
