import clsx from "clsx"

type FreeToTryProps = {
  className?: string
  text?: string
  href?: string
  isDownload?: boolean
}

export const FreeToTry = ({ className, text, href = 'https://openai.com/sora' }: FreeToTryProps) => {
  return <a
    className={clsx(["relative py-[6px] px-8 text-white font-bold rounded-[30px] transition duration-150 ease-in-out bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.main-blue)_0%,theme(colors.main-purple)_10%,theme(colors.main-blue)_20%)] animate-[shimmer_2.5s_linear_infinite] after:flex after:absolute after:bg-gradient-to-l  after:from-main-blue  after:to-main-purple after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]after:items-center after:justify-center", className])}
    href={href}
    aria-label={text || "Download"}
  ><span className="opacity-0">{text || "Download"}</span>
  </a>
}


