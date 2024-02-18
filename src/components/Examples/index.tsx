// import clsx from "clsx"
import { useTranslations } from "next-intl"

export function Playground() {
  const t = useTranslations("Playground")
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="mt-2 text-3xl tracking-tight text-main-text text-center">Sora AI PlayGround</h1>
      <div>
        {/* <h2 className="text-2xl tracking-tight text-main-text mt-10">
            {t("t1")}
          </h2> */}
        {/* <div style={{ width: '100%', height: '1300px', position: 'relative', zIndex: 1 }} className={clsx('lg:-top-16 max-sm:-top-[580px]')}>
            <iframe id="modelscope" src={"https://playgroundai.com/search?q=sora"} height="1300px" width="100%"></iframe>
          </div> */}
      </div>

    </div>
  )
}
