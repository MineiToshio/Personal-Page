import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from './Header';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import smoothScrool from '../helpers/smoothScroll';

library.add(faGithub, faTwitter, faInstagram);

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component {
  
  componentDidMount() {
    smoothScrool();
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

        <style jsx global>{`

          :root {
            //--green: #0C7C59;
            --green: #1abc9c;
            --black: #272727;
          }

          @font-face {
            font-family: 'BebasNeueRegular';
            src: url('../static/fonts/BebasNeue-webfont.eot');
            src: url('../static/fonts/BebasNeue-webfont.eot?#iefix') format('embedded-opentype'), 
              url('../static/fonts/BebasNeue-webfont.woff') format('woff'), 
              url('../static/fonts/BebasNeue-webfont.ttf') format('truetype'), 
              url('../static/fonts/BebasNeue-webfont.svg#BebasNeueRegular') format('svg');
            font-weight: normal;
            font-style: normal;
          }

          body {
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            background: white;

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