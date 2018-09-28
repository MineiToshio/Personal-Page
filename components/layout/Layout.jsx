import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faTimes, faQuoteRight, faQuoteLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import smoothScroll from '../../helpers/smoothScroll';
import ScrollUp from '../widgets/ScrollUp';
import 'default-passive-events';
import FAStyles from '@fortawesome/fontawesome-svg-core/styles.css';
import NProgressStyles from 'nprogress/nprogress.css';

config.autoAddCss = false;
library.add(faAngleUp, faTimes, faQuoteRight, faQuoteLeft, faBars, faEnvelope, faGithub, faTwitter, faInstagram, faLinkedin);

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component {
  
  componentDidMount() {
    smoothScroll();
  }

  render() {
    const { children, title } = this.props;

    return (
      <div id="app">
        <Head>
          <title>{ title }</title>
          <meta name="viewport" content="width=device-width" />
          <meta name="author" content="Toshio Minei" />
          <meta name="description" content="Soy Toshio Minei, fullstack web developer, emprendedor y blogger. Me apasiona la tecnología y me encanta aprender nuevas cosas." />
          <meta name="theme-color" content="#1abc9c" />
          <link rel="manifest" href="/static/manifest/manifest.json"></link>
          <link rel="shortcut icon" href="/static/img/favicon/favicon52.png" type="image/x-icon"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        </Head>

        <Header />

        <div id="content">
          { children }

          <Footer />
          <ScrollUp />
        </div>

        <style jsx global>{FAStyles}</style>
        <style jsx global>{NProgressStyles}</style>
        <style jsx global>{`

          :root {
            --green: #1abc9c;
            --green-alpha: rgba(26,188,156,.8);
            --black: #272727;
            --blue: #26408B;
            --blue-alpha: rgba(38, 64, 139, .8);
          }

          @font-face {
            font-family: 'BebasNeue';
            src: url('../../static/fonts/BebasNeue-Regular.otf') format('opentype'),
              url('../../static/fonts/BebasNeue-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'BebasNeue';
            src: url('../../static/fonts/BebasNeue-Bold.otf') format('opentype'),
              url('../../static/fonts/BebasNeue-Bold.ttf') format('truetype');
            font-weight: bold;
            font-display: swap;
          }

          @font-face {
            font-family: 'playlist script';
            src: url('../../static/fonts/playlist-script.otf') format('opentype'),
              url('../../static/fonts/playlist-script.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: block;
          }

          body {
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            color: var(--black);

            &::-webkit-scrollbar-track
            {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
              border-radius: 10px;
              background-color: #BAC1B8;
            }

            &::-webkit-scrollbar
            {
              width: 8px;
              background-color: #BAC1B8;
            }

            &::-webkit-scrollbar-thumb
            {
              border-radius: 10px;
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: #555;
            }
          }
        `}</style>
      </div>
    )
  }
}