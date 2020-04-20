import React, { FC, useState } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Header: FC = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <header className="header">
      <Link href="/"><a className="logo">Toshio Minei</a></Link>
      <a className="burger" onClick={() => setActive(!active)}><FA icon={['fas', "bars"]} /></a>
      <div className={`menu ${active && 'active'}`}>
        <ul>
          <li><a href="#portada" className="scroll">home</a></li>
          <li><a href="#sobre-mi" className="scroll">about me</a></li>
          <li><a href="#portafolio" className="scroll">portfolio</a></li>
          {/* <li><Link href="/blog"><a>blog</a></Link></li> */}
          <li><a href="#contacto" className="scroll">contact</a></li>
        </ul>
      </div>

      <style jsx>{`
        .header {
          z-index: 10;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(186, 193, 184, .8);
          font-family: 'BebasNeue', sans-serif;
          display: flex;
          background: #ffffff;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.07);
          border-bottom: 1px solid #f0f0f0;
          padding: 10px 30px;
          font-weight: bold;
          flex-wrap: wrap;
          justify-content: space-between;
          height: 51px; //tamaño del haader sin padding
        }

        .logo {
          font-size: 25pt;
          font-family: "playlist script", sans-serif;
          text-transform: capitalize;
          color: var(--green);
          text-decoration: none;
          margin-right: auto;
        }

        .burger {
          display: none;
          position: absolute;
          right: 30px;
          cursor: pointer;
        }

        .menu {
          display: flex;
          transition: all 0.5s;
        }

        ul {
          list-style: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0;
          margin: 0;
        }

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

        @media only screen and (max-width: 800px) {
          ul {
            flex-direction: column;
          }

          li {
            padding: 4px;
          }

          .burger {
            display: initial;
            top: 16px;
            font-size: 25pt;
          }

          .menu {
            position: absolute;
            top: 72px; //tamaño del header
            height: 0;
            background: #e6e6e6;
            overflow: hidden;
            width: 100%;
            left: 0;
            display: block;
          }

          .active {
            height: 145px; //tamaño del ul
            border-top: 2px solid var(--green);
          }
        }
        @media only screen and (max-width: 425px) {
          .header {
            height: 41px;
          }
          .logo {
            font-size: 20pt;
          }
          .burger {
            font-size: 20pt;
          }
          .menu {
            top: 62px;
          }
        }
      `}</style>
    </header>
  )
}

export default Header