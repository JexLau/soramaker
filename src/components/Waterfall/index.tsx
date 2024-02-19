"use client";
import Masonry from 'react-masonry-css';
import React from 'react';
import { MediaCard } from '../Card';

export const VideoMasonry = ({ videos }: { videos: MediaCard[] }) => {
  // Responsive column count
  const breakpointColumnsObj = {
    default: 4, // Default to 4 columns
    '1536': 3, // Tailwind's '2xl' breakpoint at 1536px
    '1280': 3, // Tailwind's 'xl' breakpoint
    '1024': 2, // Tailwind's 'lg' breakpoint
    '768': 2,  // Tailwind's 'md' breakpoint
    '640': 1,  // Tailwind's 'sm' breakpoint
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding">
      {videos.map((video) => (
        <MediaCard key={video.id} {...video} />
      ))}
    </Masonry>
  );
};

