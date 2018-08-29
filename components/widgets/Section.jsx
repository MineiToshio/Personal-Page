import React from 'react';
import inViewport from '../../helpers/inViewport';
import EventListener, { withOptions } from "react-event-listener";

export default class Section extends React.Component {
  handleScroll = () => {
    const { id } = this.props;
    const $h1 = document.querySelector(`#${id}-h1`);
    const $span = document.querySelector(`#${id}-span`);
    const $line = document.querySelector(`#${id}-line`);

    if (!$h1.classList.contains("slide-down") && inViewport($h1))
      $h1.classList.add("slide-down");

    if (!$span.classList.contains("slide-in-left") && inViewport($span))
      $span.classList.add("slide-in-left");

    if (!$line.classList.contains("slide-in-right") && inViewport($line))
      $line.classList.add("slide-in-right");
  }

  render() {
    const { children, title, subtitle, id } = this.props;

    return (
      <section id={ id }>
        <EventListener target="window" 
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})} />
        <h1 id={`${id}-h1`}>{ title }</h1>
        <span id={`${id}-span`}>{ subtitle }</span>
        <div id={`${id}-line`} className="underline"></div>
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

            span {
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