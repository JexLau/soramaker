import { PropsWithChildren } from "react"
import { VideoPlayer } from "../VideoPlayer";
import clsx from "clsx";

export interface MediaCard extends PropsWithChildren {
  id: string;
  src: string;
  prompt: string;
  source?: string;
  className?: string;
}

export const MediaCard = ({ id, src, prompt, source, className }: MediaCard) => {
  return <div className={clsx(["relative overflow-hidden rounded-3xl bg-gray-900  shadow-2xl lg:max-w-lg  mb-4", className])}>
    <figure className="relative isolate lg:pb-8 xl:pb-10 pb-6">
      <div className="aspect-video rounded-t-xl  object-cover group-hover:opacity-75">
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