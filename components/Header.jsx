import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
      <header className="menu">
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
            font-family: 'BebasNeueRegular', sans-serif;
            display: flex;
            background: #ffffff;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.07);
            border-bottom: 1px solid #f0f0f0;
            transition: all 0.5s;
            padding: 10px 30px;
            

            &.sticky {
              position: fixed;
              top: 0;
            }

            nav {
              
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
                color: rgb(0, 34, 85);
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