export const baseurl = 'https://replaceanything.online';

export const getHrefLang = (locale: string) => locale === 'en' ? baseurl : `${baseurl}/${locale}`;
