import React from 'react';
import App from 'next/app';

import OfflineSupport from '../components/widgets/OfflineSupport';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default CustomApp;
