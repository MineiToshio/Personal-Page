import React from 'react';
import { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'nprogress/nprogress.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
}

export default CustomApp;
