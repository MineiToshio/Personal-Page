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
  faCaretDown,
  faSignOutAlt,
  faUser,
  faSpinner,
  faUpload,
  faSave,
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
  faClock,
  faCommentDots,
  faBookmark,
  faCalendar,
} from '@fortawesome/free-regular-svg-icons';
import theme from '@/styles/theme';
import UserConfigProvider, { UserContext } from '@/context/UserContext';
import { Spinner } from '@/components/shared';

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
  faCaretDown,
  faSignOutAlt,
  faUser,
  faSpinner,
  faUpload,
  faSave,
  faPencilAlt,
  faTrashAlt,
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

const CustomApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <UserConfigProvider>
    <UserContext.Consumer>
      {({ initializing }) => (
        <>
          {initializing ? (
            <Spinner />
          ) : (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Component {...pageProps} />
          )}
        </>
      )}
    </UserContext.Consumer>
    <style jsx global>{`
      @font-face {
        font-family: 'BebasNeue';
        src: url('../../fonts/BebasNeue-Regular.otf') format('opentype'),
          url('../../fonts/BebasNeue-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'BebasNeue';
        src: url('../../fonts/BebasNeue-Bold.otf') format('opentype'),
          url('../../fonts/BebasNeue-Bold.ttf') format('truetype');
        font-weight: bold;
        font-display: swap;
      }

      @font-face {
        font-family: 'playlist script';
        src: url('../../fonts/playlist-script.otf') format('opentype'),
          url('../../fonts/playlist-script.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }

      @font-face {
        font-family: 'Heldane';
        src: url('../../fonts/Heldane-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Charter';
        src: url('../../fonts/Charter-Bold-Italic.eot');
        src: url('../../fonts/Charter-Bold-Italic.eot?#iefix') format('embedded-opentype'),
          url('../../fonts/Charter-Bold-Italic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
      }

      @font-face {
        font-family: 'Charter';
        src: url('../../fonts/Charter-Bold.eot');
        src: url('../../fonts/Charter-Bold.eot?#iefix') format('embedded-opentype'),
          url('../../fonts/Charter-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
      }

      @font-face {
        font-family: 'Charter';
        src: url('../../fonts/Charter-Italic.eot');
        src: url('../../fonts/Charter-Italic.eot?#iefix') format('embedded-opentype'),
          url('../../fonts/Charter-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
      }

      @font-face {
        font-family: 'Charter';
        src: url('../../fonts/Charter.eot');
        src: url('../../fonts/Charter.eot?#iefix') format('embedded-opentype'),
          url('../../fonts/Charter.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      body {
        margin: 0;
        font-family: ${theme.font.family.default};
        color: ${theme.color.dark};
      }

      body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #bac1b8;
      }

      body::-webkit-scrollbar {
        width: 8px;
        background-color: #bac1b8;
      }

      body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
      }

      button {
        font-family: ${theme.font.family.default};
      }
    `}</style>
  </UserConfigProvider>
);
export default CustomApp;
