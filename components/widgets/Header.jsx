import React from 'react';
import EventListener, { withOptions } from "react-event-listener";

export default class Header extends React.Component {

  handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      document.querySelector('.menu').classList.add('sticky');
      document.querySelector('#sobre-mi').style.paddingTop = "95px";
    }
    else {
      document.querySelector('.menu').classList.remove('sticky');
      document.querySelector('#sobre-mi').style.paddingTop = "";
    }
  }

  render () {
    return (
      <header className="menu">

        <EventListener target="window" 
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})} />

        <a href="#" className="logo">Toshio Minei</a>
        <ul>
          <li><a href="#">inicio</a></li>
          <li><a href="#">sobre mi</a></li>
          <li><a href="#">portafolio</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#">contacto</a></li>
        </ul>
        
        <style jsx>{`
          .menu {
            z-index: 10;
            left: 0;
            right: 0;
            background: rgba(186, 193, 184, .8);
            font-family: 'BebasNeue', sans-serif;
            display: flex;
            background: #ffffff;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.07);
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.5s;
            padding: 10px 30px;
            font-weight: bold;

            &.sticky {
              position: fixed;
              top: 0;
            }

            .logo {
              font-size: 25pt;
              font-family: "playlist script", sans-serif;
              text-transform: capitalize;
              color: var(--green);
              text-decoration: none;
              margin-right: auto;
            }

            ul {
              list-style: none;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              padding: 0;
              margin: 0;
              li {
                margin: 0 30px;
                text-transform: uppercase;
                text-align: center;
              }

              a {
                text-decoration: none;
                color: var(--blue);
                font-size: 22px;
              }

              a:hover {
                color: var(--green);
              }
            }
          }
        `}</style>
      </header>
    )
  }
}