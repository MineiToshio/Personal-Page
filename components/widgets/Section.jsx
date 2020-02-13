import React from 'react';
import TrackVisibility from 'react-on-screen';
import PropTypes from 'prop-types'

const Section = ({ children, title, subtitle, id }) => {
  return (
    <section id={ id }>
      <TrackVisibility once>
        {
          ({ isVisible }) => <h1 className={isVisible ? "slide-down" : "invisible"}>{title}</h1>
        } 
      </TrackVisibility>
      <TrackVisibility once>
        {
          ({ isVisible }) => <div className={`description ${isVisible ? "slide-in-left" : "invisible"}`}>{ subtitle }</div>
        }
      </TrackVisibility>
      <TrackVisibility once>
        {
          ({ isVisible }) => <div className={`underline ${isVisible ? "slide-in-right" : "invisible"}`}></div>
        }
      </TrackVisibility>
      { children }

      <style jsx>{`

        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 20px;
        }

        h1 {
          color: var(--green);
          text-transform: uppercase;
          text-align: center;
          font-family: 'BebasNeue', sans-serif;
          font-weight: normal;
          font-size: 40pt;
          margin: 60px 0 10px;
        }

        .underline {
          width: 70px;
          height: 4px;
          background: #444649;
          margin-bottom: 45px;
        }

        .description {
          font-size: 16pt;
          margin-bottom: 50px;
          color: #777;
          text-transform: uppercase;
          text-align: center;
        }

        @media only screen and (max-width: 768px) {
          h1 {
            font-size: 35pt;
          }
          .description {
            font-size: 14pt;
            margin-bottom: 30px;
            padding: 0 5px;
          }
          .underline {
            margin-bottom: 35px;
          }
        }

        @media only screen and (max-width: 425px) {
          h1 {
            font-size: 30pt;
            margin: 50px 0 10px;
          }
          .description {
            font-size: 13pt;
            margin-bottom: 25px;
          }
          .underline {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Section