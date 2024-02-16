"use client";

import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

// 动态导入 ReactPlayer，禁用 SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoPlayerProps extends PropsWithChildren {
  src: string;
  alt?: string;
}

export const VideoPlayer = ({ src, alt }: VideoPlayerProps) => {

  return (
    <ReactPlayer
      url={src} // 替换为你的视频 URL
      playing={false}
      controls={true}
      width='100%'
      height='100%'
      alt={alt}
    />
  );
};

