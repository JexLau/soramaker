import { PropsWithChildren } from "react"
import { VideoPlayer } from "../VideoPlayer";

interface MediaCard extends PropsWithChildren {
  id: string;
  src: string;
  prompt: string;
  source?: string;
}

export const MediaCard = ({ id, src, prompt, source }: MediaCard) => {
  return <div className="relative overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg lg:pb-8 xl:pb-10">
    <figure className="relative isolate">
      <div className="aspect-video rounded-t-xl bg-gray-50 object-cover group-hover:opacity-75">
        <VideoPlayer src={src} alt={id} />
      </div>
      <figcaption className="mt-6 text-sm leading-6 text-gray-300 px-8 ">
        Prompt: {prompt}
      </figcaption>
      <figcaption className="mt-6 text-sm leading-6 text-gray-300 px-8 ">
      🤖 {source}
      </figcaption>
    </figure>
  </div>
}