import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { Locales } from './navigation';

export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {Locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
