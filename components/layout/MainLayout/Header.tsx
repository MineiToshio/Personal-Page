import React, { useState } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { I18nLink, Icon } from '../../core';

const Header = () => {
  const { t } = useTranslation('Header');
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className="header">
      <I18nLink href="/">
        <span className="logo">Toshio Minei</span>
      </I18nLink>
      <button type="button" className="burger" onClick={() => setActive(!active)}>
        <Icon icon="bars" />
      </button>
      <div className={`menu ${active && 'active'}`}>
        <ul>
          <li>
            <a href="#hero" className="scroll">
              {t('home')}
            </a>
          </li>
          <li>
            <a href="#about-me" className="scroll">
              {t('aboutMe')}
            </a>
          </li>
          <li>
            <a href="#portfolio" className="scroll">
              {t('portfolio')}
            </a>
          </li>
          {/* <li><Link href="/blog"><a>blog</a></Link></li> */}
          <li>
            <a href="#contacto" className="scroll">
              {t('contact')}
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .header {
          z-index: 10;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(186, 193, 184, 0.8);
          font-family: ${theme.font.family.title};
          display: flex;
          background: ${theme.color.white};
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.07);
          border-bottom: 1px solid #f0f0f0;
          padding: 10px 30px;
          font-weight: bold;
          flex-wrap: wrap;
          justify-content: space-between;
          height: 51px; //height of header without padding
        }

        .logo {
          font-size: 25pt;
          font-family: ${theme.font.family.logo};
          text-transform: capitalize;
          color: ${theme.color.main};
          text-decoration: none;
          margin-right: auto;
        }

        .burger {
          display: none;
          position: absolute;
          right: 30px;
          cursor: pointer;
          color: ${theme.color.secondary};
          font-size: 22px;
          border: none;
          background: none;
        }

        .burger:hover {
          color: ${theme.color.main};
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
          color: ${theme.color.secondary};
          font-size: 22px;
        }

        a:hover {
          color: ${theme.color.main};
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
            top: 10px;
            font-size: 25pt;
          }

          .menu {
            position: absolute;
            top: 72px; //height of header
            height: 0;
            background: #e6e6e6;
            overflow: hidden;
            width: 100%;
            left: 0;
            display: block;
          }

          .active {
            height: 145px; //height of ul
            border-top: 2px solid ${theme.color.main};
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
  );
};

export default Header;
