import React, { FC } from 'react';
import theme from '@/styles/theme';
import smoothScroll from '@/helpers/smoothScroll';
import constans from '@/helpers/constants';
import { getResetButtonStyles } from '@/styles/common';

type Props = {
  title: string;
};

const { className: resetButtonClass, styles: resetButtonStyles } = getResetButtonStyles();

const ViewMore: FC<Props> = ({ title }) => (
  <div className="view-more">
    <div className="text">
      <button
        type="button"
        onClick={() => smoothScroll(constans.sectionIds.aboutMe)}
        className={resetButtonClass}
      >
        {title}
      </button>
    </div>
    <div className="icon">↓</div>
    {resetButtonStyles}
    <style jsx>{`
      .view-more {
        animation-name: view-more;
        animation-duration: 3.2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        cursor: pointer;
        margin-top: 75px;
        position: absolute;
        width: 100%;
        bottom: 25px;
        left: 0;
        text-align: center;
        font-weight: bold;
      }
      button {
        text-decoration: none;
        color: ${theme.color.white};
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 700;
      }
      .icon {
        font-size: 20px;
      }
      @media only screen and (max-width: 470px) {
        button {
          font-size: 14px;
        }
      }
      @keyframes view-more {
        from,
        to {
          transform: translatey(0);
        }
        50% {
          transform: translatey(-10px);
        }
      }
    `}</style>
  </div>
);

export default ViewMore;
