"use client";
import { extractDomain } from '@/utils';
import { CalendarIcon, UserIcon, StarIcon, LinkIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

const defaultBreakPoint = {
  default: 3, // Default to 3 columns
  '1536': 3, // Tailwind's '2xl' breakpoint at 1536px
  '1280': 3, // Tailwind's 'xl' breakpoint
  '1024': 3, // Tailwind's 'lg' breakpoint
  '768': 3,  // Tailwind's 'md' breakpoint
  '640': 1,  // Tailwind's 'sm' breakpoint
};

export const NewsList = ({ list }: { list: any[] }) => {
  return (
    <Masonry
      breakpointCols={defaultBreakPoint}
      className="flex w-auto"
    >
      {list.map((item) => (
        <article key={item.id} className="p-4 bg ml-2 mb-2 rounded-lg shadow-lg cursor-pointer text-xs">
          <Link href={`/sora-news/${item.id}`} key={item.id}>
            <h3 className="mb-4 text-lg font-semibold leading-6 text-main-text hover:text-main-purple  hover:underline line-clamp-3" dangerouslySetInnerHTML={{ __html: item.title || item.text }}>
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 text-slate-400 mr-2" />
              <p className="text-slate-400">{item.by}</p>
            </div>
            {item.score && (
              <div className="flex items-center">
                <ArrowUpIcon className="h-5 w-5 text-slate-400" />
                <p className='text-slate-400'>{item.score} HN Points</p>
              </div>
            )}
          </div>
          <div className="flex items-center mt-2">
            <CalendarIcon className="h-5 w-5 text-slate-400 mr-2" />
            <time dateTime={item.time} className="text-slate-400">
              {item.time}
            </time>
          </div>

          <div className="flex items-center mt-2">
            {item.source && (
              <a href={item.source} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <LinkIcon className="h-5 w-5 text-slate-400 mr-2" />
                <p className="text-slate-400">{extractDomain(item.source)}</p>
              </a>
            )}
          </div>

        </article>
      ))}
    </Masonry>
  );
};
