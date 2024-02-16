'use client'
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  src?: string;
  className?: string[];
}
export function Replace({ src, className=[] }: Props) {
  return (
    <div style={{ width: '100%', height: '1300px', position: 'relative', zIndex: 1 }} className={clsx('lg:-top-72 max-sm:-top-[580px]', ...className)}>
      <iframe id="modelscope" src={src} height="1300px%" width="100%"></iframe>
    </div>
  );
}
