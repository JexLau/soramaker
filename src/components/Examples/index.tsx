import { useTranslations } from "next-intl"

export function Example() {
  const t = useTranslations("Playground")
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Input PlayGround</h1>
        <div>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-10">
            {t("t1")}
          </h2>
          <figure className="mt-10 border-l border-indigo-600 pl-4">
            <blockquote className="font-semibold text-gray-900">
              <p>
                {t("desc")}
              </p>
            </blockquote>
          </figure>
          <img
            className="mt-6 rounded-xl  ring-gray-900/10"
            src="/replace-clothing.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-10">
            {t("t2")}
          </h2>
          <figure className="mt-10 border-l border-indigo-600 pl-4">
            <blockquote className="font-semibold text-gray-900">
              <p>
                {t("desc")}
              </p>
            </blockquote>
          </figure>
          <img
            className="mt-6 rounded-xl  ring-gray-900/10"
            src="/replace-idcard.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-10">
            {t("t3")}
          </h2>
          <figure className="mt-10 border-l border-indigo-600 pl-4">
            <blockquote className="font-semibold text-gray-900">
              <p>
                {t("desc")}
              </p>
            </blockquote>
          </figure>
          <img
            className="mt-6 rounded-xl  ring-gray-900/10"
            src="/replace-human.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-2xl tracking-tight text-slate-900 mt-10">
            {t("t4")}
          </h2>
          <figure className="mt-10 border-l border-indigo-600 pl-4">
            <blockquote className="font-semibold text-gray-900">
              <p>
                {t("desc")}
              </p>
            </blockquote>
          </figure>
          <img
            className="mt-6 rounded-xl  ring-gray-900/10"
            src="/replace-background.png"
            alt=""
          />
          <img
            className="mt-6 rounded-xl  ring-gray-900/10"
            src="/replace-background-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
