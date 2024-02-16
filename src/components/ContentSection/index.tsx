import { useTranslations } from "next-intl"
import { FreeToTry } from "../DownloadBtn"
import { SocialShare } from "../SocialShare"

const stats = [
  { label: '👀 VIEW', value: '9k+' },
  { label: '❤️ LIKE', value: '200+' },
  { label: '🌟 STAR', value: '600+' },
  { label: '🤖 UPDATED', value: '01/12' },
]

export function ContentSection({ src}: { src?: string}) {
  const t = useTranslations('ContentSection')
  return (
    <div className="bg-white py-24 sm:py-32 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start  gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg lg:pb-8 xl:pb-10">
              <figure className="relative isolate">
                <img src="/main.jpeg" alt="" className="w-full h-auto" />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white px-8 ">
                  <p>
                    {t("Authors")}
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300 px-8 ">
                  <strong className="font-semibold text-white">Author by: </strong>
                  <a href="https://scholar.google.com.hk/citations?user=-2uIiz4AAAAJ&amp;hl=zh-CN">Binghui Chen</a>,
                  <a href="https://github.com/AIGCDesignGroup/ReplaceAnythingZ">Chao Li</a>,
                  <a href="https://scholar.google.com.hk/citations?user=ODTZZ4wAAAAJ&amp;hl=zh-CN">Chongyang Zhong</a>,
                  <a href="https://scholar.google.com.hk/citations?user=LFNwNF4AAAAJ&amp;hl=en">Wangmeng Xiang</a>,
                  <a href="https://github.com/AIGCDesignGroup/ReplaceAnythingZ">Yifeng Geng</a>,
                  <a href="https://github.com/AIGCDesignGroup/ReplaceAnythingZ">Xuansong Xie</a>
                </figcaption>
              </figure>
            </div>
            <div className="mt-10 text-right lg:max-w-lg lg:pb-8 xl:pb-10" >
              <FreeToTry text={`${t("Start to Try")}`} href={src} />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              {/* <p className="text-base font-semibold leading-7 text-indigo-600">Company values</p> */}
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{ __html: t("title")}}>
              </h1>
              <SocialShare className={['lg:hidden grid grid-cols-8 mt-4']} />
              <div className="max-w-xl">
                <p className="mt-6" dangerouslySetInnerHTML={{__html: t("desc")}}>
                </p>
                <p className="mt-8">
                  {t("help")} <a href="https://github.com/AIGCDesignGroup/ReplaceAnything" className=" underline text-blue-700">Github</a> {t("help2")}
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
