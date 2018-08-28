import React from 'react';

export default class Sliders extends React.Component {
  componentDidMount() {
    require('jssor-slider');
    
    const options = {
      $Idle: 2000,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      }
    };

    const jssor = new $JssorSlider$("jssor", options)

    this.setState({
      jssor
    })
  }

  componentDidUpdate () {
    const { images } = this.props;
    if (images && images.length > 0)
    {
      let slidesHtml = '';

      images.forEach(img => {
        slidesHtml += `<div><img data-u="image" src="${img}" /></div>`;
      });

      this.state.jssor.$ReloadSlides(slidesHtml);
    }
  }

  componentWillUnmount() {
    this.state.jssor.$Destroy();

    this.setState({
      jssor: null
    })
  }

  render () {
    const { images } = this.props;
    return (
      <div id="jssor" className="slider">
        <div data-u="loading" className="spinner">
          <img src="../../static/svg/spin.svg" />
        </div>
        <div data-u="slides" className="slides">
        </div>
        <div data-u="arrowleft" className="arrow left" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
          <svg viewBox="0 0 16000 16000">
            <polyline points="11040,1920 4960,8000 11040,14080 "></polyline>
          </svg>
        </div>
        <div data-u="arrowright" className="arrow right" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
          <svg viewBox="0 0 16000 16000">
            <polyline points="4960,1920 11040,8000 4960,14080 "></polyline>
          </svg>
        </div>

        <style jsx>{`
          .slider {
            position: relative;
            margin: 0 auto; 
            top: 0px; 
            left: 0px; 
            width: 600px; 
            height:400px;
            overflow:hidden;
            visibility:hidden;
            border-radius: 5px 5px 0 0;

            .slides {
              cursor:default;
              position:relative;
              top:0px;
              left:0px;
              width:600px;
              height:400px;
              overflow:hidden;
            }
          }

          .spinner {
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            text-align:center;
            background-color:rgba(0,0,0,0.7);

            img {
              margin-top:-19px;
              position:relative;
              top:50%;
              width:38px;
              height:38px;

              animation-name: spin;
              animation-duration: 1.6s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          .arrow {
            display: block;
            position: absolute;
            cursor: pointer;
            width: 40px;
            height: 30px;
            top: 0;
            background-color: #fff;

            &.right {
              right: 0;
            }

            &.left {
              left: 0;
            }

            svg {
              position:absolute;
              top:0;
              left:0;
              width: 100%;
              height:100%;
            }

            polyline {
              fill: none;
              stroke: var(--green);
              stroke-width: 640;
              stroke-miterlimit: 10;
            }

            &:hover {
              opacity: .8;
            }
          }
        `}</style>
      </div>
    )
  }
}