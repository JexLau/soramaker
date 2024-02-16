import { useTranslations } from "next-intl"
import { FreeToTry } from "../DownloadBtn"
import { SocialShare } from "../SocialShare"

export function ContentSection({ src}: { src?: string}) {
  const t = useTranslations('ContentSection')
  return (
    <div className="bg-white py-24 sm:py-32 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start  gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg lg:pb-8 xl:pb-10">
              <figure className="relative isolate">
                {/* <img src="/main.jpeg" alt="" className="w-full h-auto" /> */}
                <video loop width="750" controls className="aspect-video rounded-xl bg-gray-50 object-cover">
            <source src="/tokyo-walk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white px-8 ">
                  <p>
                  Sora can generate videos up to a minute long while maintaining visual quality and adherence to the user’s prompt.
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300 px-8 ">
                  
                Prompt: A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage. She wears a black leather jacket, a long red dress, and black boots, and carries a black purse. She wears sunglasses and red lipstick. She walks confidently and casually. The street is damp and reflective, creating a mirror effect of the colorful lights. Many pedestrians walk about.
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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {`Meet Sora, OpenAI's Text-to-Video Generator`}
              </h1>
              <SocialShare className={['lg:hidden grid grid-cols-8 mt-4']} />
              <div className="max-w-xl">
                <p className="mt-6" >
                {`Sora, OpenAI's text-to-video generator, can generate complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background. It can also animate still images.`}
                </p>
                <p className="mt-8">
                We’re teaching AI to understand and simulate the physical world in motion, with the goal of training models that help people solve problems that require real-world interaction.
                </p>
                <p  className="mt-8">
                {`In another breakthrough into generative artificial intelligence, the maker of ChatGPT has unveiled a new tool that can instantly make short videos in response to written commands. Microsoft-backed OpenAI's new text-to-video generator is called Sora. While big tech giants like Google and Meta have demonstrated similar technology in the past, OpenAI has gone way ahead in terms of quality.`}
                </p>
              </div>
            </div>
            {/* <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>
      </div>
    </div>
  )
}
