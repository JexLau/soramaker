"use client";
import { files } from "@/app/[locale]/sora-prompts/prompts";
import { MediaCard } from "../Card";

export function GridList() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.id} className="relative">
          <MediaCard {...file} />
        </li>
      ))}
    </ul>
  )
}
