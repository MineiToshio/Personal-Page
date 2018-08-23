import React from 'react';
import VerMas from '../widgets/VerMas';
import IconMenu from '../social-icons/IconMenu';
import ParticleJs from '../external/ParticleJs';

export default class Portada extends React.Component {

  render () {
    return (
      <div className="portada">
        <ParticleJs/>
        <IconMenu />
        <div className="content">
          <div className="title">¡Bienvenido! Soy <span className="highlight">Toshio Minei</span></div>
          <div className="sub-title">tech geek, emprendedor, lifelong learner</div>
        </div>
        <VerMas title="conoce mi trabajo" />

        <style jsx>{`
          .portada {
            height: 100vh;
            width: 100wh;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--green);

            :global(.social-icons) {
              position: absolute;
              top: 0;
              right: 0;
              margin: 20px;

              :global(a) {
                color: var(--black);
              }
            }
          }

          .content {
            text-align: center;
            z-index: 1;

            .title {
              font-size: 30pt;
              
              .highlight {
                color: var(--black);
                font-weight: bold;
              }
            }

            .sub-title {
              font-size: 25pt;
              padding-top: 15px;
            }
          }
        `}</style>
      </div>
    )
  }
}