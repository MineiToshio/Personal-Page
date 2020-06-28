import { defaultLocale } from './config';
import { Locale, isLocale } from '../types/i18n';

export const getInitialLocale = (): Locale => {
  // preference from the previous session
  const localSetting = localStorage.getItem('locale');
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  // the language setting of the browser
  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
};

export default getInitialLocale;
