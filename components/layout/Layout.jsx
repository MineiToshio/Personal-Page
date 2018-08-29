import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faTimes, faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import smoothScroll from '../../helpers/smoothScroll';
import ScrollUp from '../widgets/ScrollUp';

library.add(faAngleUp, faTimes, faQuoteRight, faQuoteLeft, faEnvelope, faGithub, faTwitter, faInstagram, faLinkedin);

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
      <div>
        <Head>
          <title>{ title }</title>
          <meta name="viewport" content="width=device-width" />
          <meta name="author" content="Toshio Minei" />
          <link rel="shortcut icon" href="static/img/favicon.png" type="image/x-icon"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        </Head>

        <Header />

        { children }

        <Footer />
        <ScrollUp />

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
          }

          @font-face {
            font-family: 'BebasNeue';
            src: url('../../static/fonts/BebasNeue-Bold.otf') format('opentype'),
              url('../../static/fonts/BebasNeue-Bold.ttf') format('truetype');
            font-weight: bold;
          }

          @font-face {
            font-family: 'playlist script';
            src: url('../../static/fonts/playlist-script.otf') format('opentype'),
              url('../../static/fonts/playlist-script.woff') format('woff');
            font-weight: normal;
            font-style: normal;
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

          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #29d;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          ::selection {
              background: var(--green);
              color: #fff;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #29d, 0 0 5px #29d;
            opacity: 1.0;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }

          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border: solid 2px transparent;
            border-top-color: #29d;
            border-left-color: #29d;
            border-radius: 50%;

            -webkit-animation: nprogress-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }

          @-webkit-keyframes nprogress-spinner {
            0%   { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
          @keyframes nprogress-spinner {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }
}