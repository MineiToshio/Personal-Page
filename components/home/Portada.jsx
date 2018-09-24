import React from 'react';
import VerMas from '../widgets/VerMas';
import IconMenu from '../social-icons/IconMenu';
import ParticleJs from '../external/ParticleJs';

export default () => {
  return (
    <div className="portada">
      <ParticleJs/>
      <IconMenu />
      <div className="content">
        <div className="title">¡Bienvenido! <div className="name">Soy <span className="highlight">Toshio Minei</span></div></div>
        <div className="sub-title">tech geek, emprendedor, lifelong learner</div>
      </div>
      <VerMas title="conoce mi trabajo" />

      <style jsx>{`
        .portada {
          height: 100vh;
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
        }

        .title {
          font-size: 30pt;
          text-align: center;
          display: flex;
          flex-direction: row;
          justify-content: center;

          .highlight {
            color: var(--black);
            font-weight: bold;
          }

          .name {
            margin-left: 10px;
          }
        }

        .sub-title {
          font-size: 25pt;
          padding-top: 15px;
        }

        @media only screen and (max-width:650px) {
          .title {
            font-size: 25pt;
          }

          .sub-title {
            font-size: 18pt;
          }
        }

        @media only screen and (max-width:470px) {
          .title {
            flex-direction: column;
            font-size: 23pt;

            .name {
              margin-left: 0;
            }
          }

          .sub-title {
            font-size: 16pt;
            padding-top: 25px;
          }

          .portada {
            :global(.social-icons) {
              right: auto;
              margin: 20px auto;
            }
          }
        }
      `}</style>
    </div>
  )
}