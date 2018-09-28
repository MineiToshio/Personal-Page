import React from 'react';
import App, { Container } from 'next/app';

import OfflineSupport from '../components/widgets/OfflineSupport';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <OfflineSupport />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CustomApp;
