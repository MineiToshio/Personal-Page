import React, { PureComponent } from 'react';

export default class OfflineSupport extends PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.dir(err));
    }
  }

  render() {
    return null;
  }
}