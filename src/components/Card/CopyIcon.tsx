'use client';

import { ClipboardIcon } from "@heroicons/react/20/solid";

function copyTextToClipboard(text: string) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = '0';
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    alert('Copied to clipboard!');
  } catch (err) {
    console.error('Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

export const CopyIconClient = ({ text }: { text: string }) => {
  const handleCopy = () => {
    copyTextToClipboard(text);
  };

  return (
    <span className="inline-flex h-4 w-4 cursor-pointer justify-center relative top-[3px] hover:bg-slate-100 hover:text-white  items-center  mr-1 rounded-sm" onClick={handleCopy}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#764ba2" fillRule="evenodd" d="M8.116 12.528a4.5 4.5 0 1 0 1.512 1.31l2.447-2.917 2.368 2.822a4.5 4.5 0 1 0 1.546-1.27L13.38 9.365 18.72 3h-2.61l-4.036 4.81L8.04 3H5.429l5.34 6.365zM8.5 16.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m12 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0" clipRule="evenodd"></path></svg>
    </span>
  );
};

