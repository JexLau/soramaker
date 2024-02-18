import React, { PropsWithChildren } from 'react';
import DOMPurify from 'dompurify';

interface Comment extends PropsWithChildren {
  id: number;
  by: string;
  text: string;
}

export const Comment = (props: Comment) => {
  // 创建一个对象，其__html属性包含你要渲染的HTML
  const createMarkup = (htmlContent: string) => {
    // 使用DOMPurify来清理HTML并避免XSS攻击
    const cleanHTML = DOMPurify.sanitize(htmlContent);
    return { __html: cleanHTML };
  };

  return (
    <div className="mx-20 p-4 my-4 bg-[#0d0821] rounded-lg shadow-md">
      <p className="mb-2 text-sm font-semibold text-main-text">Author: {props.by}</p>
      <div className="text-main-text text-sm" dangerouslySetInnerHTML={createMarkup(props.text)} />
    </div>
  );
};

