import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import smoothScroll from '../../helpers/smoothScroll';
import ScrollUp from '../widgets/ScrollUp';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import useTranslation from '../../hooks/useTranslation';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  title: string;
};

const Layout: FC<Props> = ({ children, title }) => {
  const { t } = useTranslation('Layout');

  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <div id="app">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="author" content="Toshio Minei" />
        <meta name="description" content={t('description')} />
        <meta name="theme-color" content="#1abc9c" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/img/favicon/favicon52.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      </Head>

      <Header />

      <div id="content">
        {children}

        <Footer />
        <ScrollUp />
      </div>

      <style jsx global>{`
        :root {
          --green: #1abc9c;
          --green-alpha: rgba(26, 188, 156, 0.8);
          --black: #272727;
          --blue: #26408b;
          --blue-alpha: rgba(38, 64, 139, 0.8);
          --muted: #828282;
        }

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
          font-family: 'KievitOT';
          src: url('../../fonts/KievitOT.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
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
          font-family: 'Open Sans', sans-serif;
          color: var(--black);
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
          font-family: 'Open Sans', sans-serif;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
