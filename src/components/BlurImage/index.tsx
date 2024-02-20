'use client'
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type ImageProps = {
  id: number
  href: string
  imageSrc: string
  name: string
  alt?: string
}

export const BlurImage = ({ image }: { image: ImageProps }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href={image.href} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={image.alt || image.name}
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={clsx(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  );
}