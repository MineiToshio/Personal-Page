import React from 'react';
import App from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'nprogress/nprogress.css';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default CustomApp;
