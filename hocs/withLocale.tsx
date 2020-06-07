import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';
import { getDisplayName } from 'next/dist/next-server/lib/utils';
import { isLocale, Locale } from '../types/i18n';
import { LocaleProvider } from '../context/LocaleContext';

type LangProps = {
  locale?: Locale;
};

export default (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ locale, ...pageProps }) => {
    if (!locale) {
      // no valid locale detected
      return <Error statusCode={404} />;
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async (ctx) => {
    // retrieve initial props of the wrapped component
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }

    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      // in case the value of 'lang' is not a valid locale return it as undefined
      return { ...pageProps, locale: undefined };
    }

    // the locale is valid
    return { ...pageProps, locale: ctx.query.lang };
  };

  // pretty display name for the debugger
  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
