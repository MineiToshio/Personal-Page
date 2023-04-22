import React, { useState, useEffect } from 'react';
import JsTimeAgo, { LocaleData } from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import es from 'javascript-time-ago/locale/es';
import type { Locale } from '@/types/i18n';

type Props = {
  locale: Locale;
  date: Date;
};

const Languages: Record<string, LocaleData> = {
  en,
  es,
};

const TimeAgo = ({ locale, date }: Props) => {
  const [timeAgo, setTimeAgo] = useState<JsTimeAgo>();

  useEffect(() => {
    const loadLocale = async () => {
      // const localeModule = (await import(`javascript-time-ago/locale/${locale}`)).default;
      JsTimeAgo.addLocale(Languages[locale]);
      const timeAgoInstance = new JsTimeAgo(locale);
      setTimeAgo(timeAgoInstance);
    };
    if (!timeAgo) {
      loadLocale();
    }
  }, [locale, timeAgo]);

  return <span>{timeAgo?.format(date)}</span>;
};

export default TimeAgo;
