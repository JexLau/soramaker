export const baseurl = 'https://www.soramaker.ai';

export const getHrefLang = (locale: string) => locale === 'en' ? baseurl : `${baseurl}/${locale}`;
