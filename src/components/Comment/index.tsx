"use client";
import React, { PropsWithChildren } from 'react';
interface CommentProps extends PropsWithChildren {
  username?: string;
  timestamp: string;
  text: string;
  title?: string;
}

export const CommentItem = ({ username, title, timestamp, text, children }: CommentProps) => {
  return (
    <div className="border-l-4 border-gray-800 pl-4 ml-4 whitespace-pre-wrap break-words">
      <div className="mt-2">
        {title && <h2 className="text-sm" dangerouslySetInnerHTML={{ __html: title }}></h2>}
        {username && <div className="flex justify-between items-center">
          <p className="text-sm font-bold">{username}</p>
        </div>}
        {text && <p className="text-sm text-gray-500 mt-1" dangerouslySetInnerHTML={{ __html: text }}></p>}
        {timestamp && <span className="text-xs text-gray-700">{timestamp}</span>}
        {children}
      </div>
    </div>
  );
};
