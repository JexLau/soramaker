import { useTranslations } from "next-intl"
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { WaitlistClient } from "./WaitlistClient"
import { PrimaryButton } from "../Button"

export function ContentSection({ src }: { src?: string }) {
  const t = useTranslations('ContentSection')
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:mt-6 relative">
      <div className="mx-auto max-w-2xl lg:max-w-none grid  lg:flex lg:justify-evenly grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-4 sm:gap-y-24 lg:mx-0">
        <div className="overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg lg:pb-8 xl:pb-10 pb-6">
          <figure className="isolate">
            <video loop width="750" controls className="aspect-video rounded-t-xl object-cover">
              <source src="/tokyo-walk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-[12px] leading-6 text-gray-300 px-8 py-2">
              Prompt: A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage. She wears a black leather jacket, a long red dress, and black boots, and carries a black purse. She wears sunglasses and red lipstick. She walks confidently and casually. The street is damp and reflective, creating a mirror effect of the colorful lights. Many pedestrians walk about.
            </p>
            <div className=" border-b-gray-500 border-b mx-8 mt-2"></div>
            <figcaption className="mt-4 text-base leading-6 text-gray-300 px-8 ">
              {`Join our alert list for Sora's upcoming launch details!`}
              <WaitlistClient />
            </figcaption>
          </figure>
        </div>
        <div className="text-base leading-7 text-main-text lg:max-w-lg">
          <h1 className="text-3xl font-bold tracking-tight text-main-text sm:text-4xl">
            {`Transform Your Ideas into Videos with Sora`}
          </h1>
          <div className="max-w-xl  text-main-text">
            <p className="mt-6" >
              {`Unlock the power of AI storytelling with Sora, OpenAI's revolutionary text-to-video tool.`}
            </p>
            <p className="mt-6">
              Sora empowers creators, educators, and businesses alike to effortlessly bring their narratives to life. With just a few lines of text, you can generate stunning videos that captivate your audience, enhance your message, and elevate your digital presence.
            </p>
            <p className="mt-6">
              {`Experience the seamless fusion of creativity and technology, and let Sora transform your imaginative concepts into visual masterpieces. Whether you're crafting educational content, marketing materials, or personal stories, Sora is your gateway to a world where your ideas are not just heard, but seen and felt.`}
            </p>
          </div>
          <div className="mt-12 text-right lg:max-w-lg lg:pb-8 xl:pb-10" >
            <PrimaryButton href="/playground">{"PlayGround"}</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
