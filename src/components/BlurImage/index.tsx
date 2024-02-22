'use client'
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type ImageProps = {
  id: string
  href?: string
  imageSrc: string
  name: string
  alt?: string
  onClick?: () => void
}

export const BlurImage = (image: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  const renderImage = () => {
    return <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden ">
    <Image
      alt={image.alt || image.name}
      src={image.imageSrc}
      width={325}
      height={183}
      className={clsx(
        'group-hover:opacity-75 duration-700 ease-in-out   !object-cover',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  </div>
  }
  return (
    image.href ?
    <a href={image.href} className="group cursor-pointer">
      {renderImage()}
    </a> : <div onClick={image.onClick} className="group cursor-pointer">
      {renderImage()}
    </div>
  );
}