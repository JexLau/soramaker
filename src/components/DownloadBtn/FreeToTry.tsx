type FreeToTryProps = {
  className?: string
  text?: string
  href?: string
  isDownload?: boolean
}

export const FreeToTry = ({ className, text, href = 'https://openai.com/sora', isDownload }: FreeToTryProps) => {
  const cls = `relative py-3 px-8 text-white font-bold rounded-full transition duration-150 ease-in-out 
  bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.blue.700)_0%,theme(colors.blue.300)_10%,theme(colors.blue.700)_20%)] 
  animate-[shimmer_2.5s_linear_infinite] 
  after:flex after:absolute after:bg-blue-700 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]
  after:items-center after:justify-center ${className}`

  return <a
    className={cls}
    href={'https://openai.com/sora'}
    aria-label={text || "Download"}
  ><span className="opacity-0">{text || "Download"}</span>
  </a>
}


