'use client';
import { baseurl } from '@/utils/constants';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  PinterestShareButton,
  EmailIcon,
  EmailShareButton,
} from 'react-share';

interface SocialShareProps {
  className?: string[]
}
export function SocialShare({ className = [] }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const href = typeof window !== 'undefined' ? window.location.href : '';
    setCurrentUrl(href)

    // 获取网页标题
    const title = typeof window !== 'undefined' ? document.title : ''
    setTitle(title)
  }, [])

  return (
    <div className={clsx(...className)}>
      {/* Facebook */}
      <FacebookShareButton url={currentUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      {/* Twitter */}
      <TwitterShareButton url={currentUrl} title={title} hashtags={['ReplaceAnything']}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      {/* LinkedIn */}
      {/* <LinkedinShareButton url={currentUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton> */}

      {/* Pinterest */}
      <PinterestShareButton url={currentUrl} title={title} media={currentUrl}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      {/* Email */}
      <EmailShareButton url={currentUrl} title={title}>
        <EmailIcon size={32} round />
      </EmailShareButton>

      {/* ...其他社交媒体平台按钮 */}
    </div>
  );
}
