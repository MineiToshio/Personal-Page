import { useContext, useMemo } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import en from '../i18n/strings/en';
import es from '../i18n/strings/es';

export default function useTranslation(component: string) {
  const { locale } = useContext(LocaleContext);
  const strings = useMemo(() => {
    switch (locale) {
      case 'en':
        return en;
      case 'es':
        return es;
      default:
        return en;
    }
  }, [locale]);

  function t(key: string) {
    if (!strings[component][key]) {
      console.warn(
        `Translation '${key}' for locale '${locale}' in component '${component}' not found.`,
      );
    }
    return strings[component][key] || '';
  }

  return {
    t,
    locale,
  };
}
