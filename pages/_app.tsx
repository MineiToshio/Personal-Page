import React from 'react';
import { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'default-passive-events';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleUp,
  faTimes,
  faQuoteRight,
  faQuoteLeft,
  faBars,
  faThumbsUp,
  faChevronLeft,
  faChevronRight,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
  faClock,
  faCommentDots,
  faBookmark,
  faCalendar,
} from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;
library.add(
  faAngleUp,
  faTimes,
  faQuoteRight,
  faQuoteLeft,
  faBars,
  faThumbsUp,
  faChevronLeft,
  faChevronRight,
  faGlobeAmericas,
  faEnvelope,
  faClock,
  faCommentDots,
  faBookmark,
  faCalendar,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebookSquare,
);

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const CustomApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default CustomApp;
