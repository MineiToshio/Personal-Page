import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Locale, isLocale } from '@/types/i18n';

type ContextProps = {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
};

type LocaleProviderProps = {
  lang: Locale;
  children: React.ReactNode | Array<React.ReactNode>;
};

export const LocaleContext = React.createContext<ContextProps>({
  locale: 'en',
  setLocale: () => null,
});

export const LocaleProvider: FC<LocaleProviderProps> = ({ lang, children }) => {
  const [locale, setLocale] = useState(lang);
  const { query } = useRouter();

  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
