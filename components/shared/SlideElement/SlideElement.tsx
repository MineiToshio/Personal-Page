import React from 'react';
import TrackVisibility from 'react-on-screen';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  animation:
    | 'slide-up'
    | 'slide-down'
    | 'slide-in-left'
    | 'slide-in-right'
    | 'flip-in-x'
    | 'pop-in';
};

const SlideElement = ({ children, animation }: Props) => (
  <>
    <TrackVisibility once>
      {({ isVisible }) => <div className={isVisible ? animation : 'invisible'}>{children}</div>}
    </TrackVisibility>
    <style jsx>{`
      .invisible {
        visibility: hidden;
      }
      .slide-up {
        animation: slideUp 0.75s ease both;
      }
      .slide-down {
        animation: slideDown 0.75s ease both;
      }
      .slide-in-left {
        animation: slideInLeft 0.75s ease both;
      }
      .slide-in-right {
        animation: slideInRight 0.75s ease both;
      }
      .flip-in-x {
        animation: flipInX 0.75s ease both;
      }
      .pop-in {
        animation: popIn 1s both;
      }
      @keyframes flipInX {
        from {
          transform: perspective(400px) rotateY(90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          transform: perspective(400px) rotateY(-20deg);
          animation-timing-function: ease-in;
        }
        60% {
          transform: perspective(400px) rotateY(10deg);
          opacity: 1;
        }
        80% {
          transform: perspective(400px) rotateY(5deg);
        }
        to {
          transform: perspective(400px);
          opacity: 1;
        }
      }
      @keyframes popDown {
        0% {
          transform: translateY(-100px);
        }
      }
      @keyframes slideUp {
        0% {
          transform: translateY(300px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideDown {
        0% {
          transform: translateY(-300px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideInLeft {
        0% {
          opacity: 0;
          transform: translateX(-100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideInRight {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes toBottomFromTop {
        49% {
          transform: translateY(100%);
        }
        50% {
          opacity: 0;
          transform: translateY(-100%);
        }
        51% {
          opacity: 1;
        }
      }
      @keyframes popIn {
        0% {
          transform: scale(0);
        }
        60% {
          opacity: 1;
          transform: scale(1.05);
        }
        80% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `}</style>
  </>
);

export default SlideElement;
