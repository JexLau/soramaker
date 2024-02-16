import createMiddleware from 'next-intl/middleware';
import { Locales, DefaultLocale, LocalePrefix, LocalePathnames } from './components/LocaleSwitch/navigation';



export default createMiddleware({
  // A list of all locales that are supported
  locales: Locales,
 
  // Used when no locale matches
  defaultLocale: DefaultLocale,
  localePrefix: LocalePrefix,
  pathnames: LocalePathnames,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"], // 不匹配blog
};