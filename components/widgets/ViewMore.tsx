import React, { FC } from 'react';

type Props = {
  title: string,
}

const ViewMore: FC<Props> = ({ title }) => {
  return (
    <div className="ver-mas">
      <div className="text"><a href="#sobre-mi" className="scroll">{ title }</a></div>
      <div className="icon">↓</div>

      <style jsx>{`
        .ver-mas {
          animation-name: ver-mas;
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

        a {
          text-decoration: none;
          color: #fff;
        }

        .text {
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .icon {
          font-size: 20px;
        }

        @media only screen and (max-width:470px) {
          .text {
            font-size: 14px;
          }
        }

        @keyframes ver-mas {
          from, to {
              transform: translatey(0);
          }
          50% {
              transform: translatey(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default ViewMore