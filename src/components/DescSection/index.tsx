import { useTranslations } from "next-intl"

export function DescSection() {
  const t = useTranslations('DescSection')
  return (
    <div className="bg-white px-6 lg:px-8 relative z-[1000] -mt-40 pb-12">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">{t("Introducing")}</h2>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">{t("t1")}</h3>
        <p className="mt-3">
          {t("d1")}
        </p>
        <h3 className="mt-6 font-semibold text-gray-900 text-2xl">
          {t("t2")}
        </h3>
        <p className="mt-3">
          {t("d2")}
        </p>
        <div className="mt-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {t("t3")}
          </h2>
          <p className="mt-6">
            {t("d3")}
          </p>
          <ul role="list" className="mt-8 my-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 1</h3>
                {t('s1')}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 2</h3>
                {t('s2')}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 3</h3>{t('s3')}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <h3 className="font-semibold text-gray-900">⭐️ Step 4 (Optional) </h3>
                {t('s4')}
              </span>
            </li>
          </ul>
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/howtouse.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
