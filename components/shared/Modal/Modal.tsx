import React, { FC, useEffect, useRef } from 'react';
import theme from '@/styles/theme';
import { hexToRgba } from '@/styles/utils';
import { Icon } from '@/components/core';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  handleModalClose: () => void;
  visible: boolean;
};

const Modal: FC<Props> = ({ children, handleModalClose, visible }) => {
  const refOverlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && refOverlay.current) {
      refOverlay.current.classList.add('active');
    } else {
      setTimeout(() => {
        if (refOverlay.current) {
          refOverlay.current.classList.remove('active');
        }
      }, 700);
    }
  }, [visible]);

  return (
    <div id="overlay" className="overlay" ref={refOverlay}>
      <div className={`modal ${visible ? 'in' : 'out'}`} id="modal">
        <button type="button" onClick={handleModalClose} className="close">
          <Icon icon="times" />
        </button>
        {children}
      </div>

      <style jsx>{`
        .overlay {
          background: ${hexToRgba(theme.color.secondary, 0.8)};
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          justify-content: center;
          align-items: center;
          opacity: 0;
          display: none;
          transition: 1.3s ease-in;
          will-change: opacity;
          z-index: 11;
        }

        .overlay.active {
          opacity: 1;
          display: flex;
          transition: 0.4s;
        }

        .modal {
          max-width: 800px;
          width: min-content;
          background: white;
          border-radius: 5px;
          position: relative;
        }

        .modal.in {
          animation: modalIn 0.8s forwards;
        }

        .modal.out {
          animation: modalOut 0.8s forwards;
        }

        .close {
          position: absolute;
          right: -15px;
          top: -15px;
          color: ${theme.color.white};
          background-color: rgba(154, 154, 154, 0.8);
          border-radius: 50%;
          height: 34px;
          width: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          cursor: pointer;
          border: none;
          outline: none;
        }

        .close:hover {
          filter: brightness(85%);
        }

        @media only screen and (max-width: 850px) {
          .modal {
            width: 90%;
          }
        }

        @media only screen and (max-width: 600px) {
          a {
            height: 25px;
            width: 25px;
            right: -10px;
            top: -13px;
          }
        }

        @keyframes modalIn {
          from {
            transform: translateY(-3000px);
          }
          60% {
            transform: translateY(25px);
          }
          75% {
            transform: translateY(-10px);
          }
          90% {
            transform: translateY(5px);
          }
        }

        @keyframes modalOut {
          0% {
            transform: translateY(5px);
          }
          60% {
            transform: translateY(-10px);
          }
          75% {
            transform: translateY(25px);
          }
          to {
            transform: translateY(-3000px);
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
