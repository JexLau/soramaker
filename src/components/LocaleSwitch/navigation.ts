import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

// "FR" 代表法语 (Fran\u00e7ais)，"PT" 代表葡萄牙语 (Portugu\u00eas)，而 "VI" 则代表越南语.
export const Locales = ['en', 'zh'] as const;
export const LocalePrefix = 'as-needed';
export const LocalePathnames = {
  '/': '/'
};
export const DefaultLocale = 'en';

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: Locales,
    pathnames: LocalePathnames,
    localePrefix: LocalePrefix,
  });
