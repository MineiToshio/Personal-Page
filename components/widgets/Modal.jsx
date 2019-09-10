import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class Modal extends React.Component {

  componentDidUpdate () {
    const {visible} = this.props;
    const $modal = document.getElementById("modal");
    const $overlay = document.getElementById("overlay");

    if(visible) {
      $overlay.classList.add("active");
      $modal.classList.remove("out");
      $modal.classList.add("in");
    }
    else {
      setTimeout(() => {
        $overlay.classList.remove("active");
      }, 700);
      $modal.classList.remove("in");
      $modal.classList.add("out");
    }
  }

  render () {
    const { children, handleModalClose } = this.props;

    return (
      <div id="overlay" className="overlay">
        <div className="modal" id="modal">
          <a onClick={handleModalClose}><FA icon={['fas', 'times']} /></a>
          {children}
        </div>

        <style jsx>{`
          .overlay {
            background: var(--blue-alpha);
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

            &.active {
              opacity: 1;
              display: flex;
              transition: .4s;
            }
          }
          .modal {
            max-width: 600px;
            width: 100%;
            background: white;
            border-radius: 5px;
            position: relative;

            &.in {
              animation: modalIn .8s forwards;
            }

            &.out {
              animation: modalOut .8s forwards;
            }
          }

          a {
            position: absolute;
            right: -15px;
            top: -15px;
            color: #fff;
            background-color: rgba(154, 154, 154, .8);
            border-radius: 50%;
            height: 34px;
            width: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;

            &:hover {
              filter: brightness(85%);
            }
          }

          @media only screen and (max-width:650px) {
            .modal {
              width: 90%;
            }
          }

          @media only screen and (max-width:600px) {
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
              transform: translateY(-10px)
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
              transform: translateY(-10px)
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
    )
  }
}