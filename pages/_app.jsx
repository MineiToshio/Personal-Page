import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'nprogress/nprogress.css';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
}

export default CustomApp;
