import React from 'react';
import TrackVisibility from 'react-on-screen';

export default class Section extends React.Component {
  render() {
    const { children, title, subtitle, id } = this.props;

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
            }
          }
        `}</style>
      </section>
    )
  }
}