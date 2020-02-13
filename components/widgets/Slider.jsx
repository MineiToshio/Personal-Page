import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const Sliders = ({ images }) => {
  const [jssor, setJssor] = useState(null)

  const ScaleSlider = () => {
    const MAX_WIDTH = 600;
    if(jssor) {
      const containerElement = jssor.$Elmt.parentNode;
      const containerWidth = containerElement.clientWidth;

      if (containerWidth) {

        const expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor.$ScaleWidth(expectedWidth);
      }
      else {
        window.setTimeout(ScaleSlider, 30);
      }
    }
  }

  useEffect(() => {
    require('jssor-slider');
    
    const options = {
      $Idle: 2000,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      }
    };

    setJssor(new $JssorSlider$("jssor", options))

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);

    return (() => {
      if(jssor) {
        $Jssor$.$RemoveEvent(window, "load", ScaleSlider)
        $Jssor$.$RemoveEvent(window, "resize", ScaleSlider);
        $Jssor$.$RemoveEvent(window, "orientationchange", ScaleSlider);
  
        jssor.$Destroy();
        setJssor(null)
      }
    })
  }, [])

  useEffect(() => {
    if (images && images.length > 0)
    {
      let slidesHtml = '';

      images.forEach(img => {
        slidesHtml += `<div><img data-u="image" src="${img}" /></div>`;
      });

      jssor.$ReloadSlides(slidesHtml);
    }
  }, [images])

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
        }

        .slides {
          cursor:default;
          position:relative;
          top:0px;
          left:0px;
          width:600px;
          height:400px;
          overflow:hidden;
        }

        .spinner {
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          text-align:center;
          background-color:rgba(0,0,0,0.7);
        }

        .spinner img {
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
        }

        .arrow:hover {
          opacity: .8;
        }

        .arrow.right {
          right: 0;
        }

        .arrow.left {
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
      `}</style>
    </div>
  )
}

Sliders.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Sliders