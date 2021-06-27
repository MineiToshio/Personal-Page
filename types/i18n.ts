import { locales } from '../i18n/config';

export type Locale = typeof locales[number];

export type Strings = {
  [key: string]: {
    [key: string]: string;
  };
};

export function isLocale(tested: string): tested is Locale {
  return locales.some(locale => locale === tested);
}
