import Link from "next/link";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import { LocaleSwitcher } from "../LocaleSwitch";
// import { FreeToTry } from "../DownloadBtn";
// import { MobileNavigation } from "./MobileNavigation";
import { useTranslations } from "next-intl";
import { MobileNavigation } from "./MobileNavigation";

export function Header({ downloadText, href }: { downloadText?: string, href?: string }) {
  const t = useTranslations("Common")
  const nav = [{
    title: t("Examples"),
    href: "/playground"
  },
  {
    title: "Sora News",
    href: "/sora-news"
  },
  {
    title: "Sora Prompts",
    href: "/sora-prompts"
  },
  
    // {
    //   title: t("Pricing"),
    //   href: "/#pricing"
    // }, {
    //   title: t("FAQs"),
    //   href: "/#faq"
    // }
  ]
  return (
    <header className="py-6 fixed top-0 z-50 bg-white shadow-sm w-full">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {nav.map((item, index) => (
                <NavLink key={index} href={item.href}>{item.title}</NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <LocaleSwitcher />
            {/* 移动端隐藏 */}
            {/* <div className="hidden md:flex">
              <FreeToTry text={downloadText} isDownload={!!href} href={href} className="flex-shrink-0" />
            </div> */}
            <div className="-mr-1 md:hidden">
              <MobileNavigation nav={nav}>
              </MobileNavigation>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}