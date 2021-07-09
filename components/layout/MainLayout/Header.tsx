import React, { useState } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { I18nLink, Icon } from '@/components/core';
import { Logo } from '@/components/shared';
import constants from '@/helpers/constants';
import smoothScroll from '@/helpers/smoothScroll';
import { getResetButtonStyles } from '@/styles/common';

const { className: resetButtonClass, styles: resetButtonStyles } = getResetButtonStyles();

const Header = () => {
  const { t } = useTranslation('Header');
  const [active, setActive] = useState<boolean>(false);

  const onLinkClick = (sectionId: string) => {
    smoothScroll(sectionId);
    setActive(false);
  };

  return (
    <header className="header">
      <I18nLink href="/">
        <Logo />
      </I18nLink>
      <button type="button" className="burger" onClick={() => setActive(!active)}>
        <Icon icon="bars" />
      </button>
      <div className={`menu ${active && 'active'}`}>
        <ul>
          <li>
            <button
              className={resetButtonClass}
              onClick={() => onLinkClick(constants.sectionIds.hero)}
              type="button"
            >
              {t('home')}
            </button>
          </li>
          <li>
            <button
              className={resetButtonClass}
              onClick={() => onLinkClick(constants.sectionIds.aboutMe)}
              type="button"
            >
              {t('aboutMe')}
            </button>
          </li>
          <li>
            <button
              className={resetButtonClass}
              onClick={() => onLinkClick(constants.sectionIds.portfolio)}
              type="button"
            >
              {t('portfolio')}
            </button>
          </li>
          {/* <li><Link href="/blog"><a>blog</a></Link></li> */}
          <li>
            <button
              className={resetButtonClass}
              onClick={() => onLinkClick(constants.sectionIds.contact)}
              type="button"
            >
              {t('contact')}
            </button>
          </li>
        </ul>
      </div>
      {resetButtonStyles}
      <style jsx>{`
        .header {
          z-index: 10;
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(186, 193, 184, 0.8);
          display: flex;
          background: ${theme.color.white};
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.07);
          border-bottom: 1px solid #f0f0f0;
          padding: 10px 16px;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          height: 41px;
        }

        .burger {
          display: initial;
          top: 10px;
          cursor: pointer;
          color: ${theme.color.secondary};
          font-size: 22px;
          border: none;
          background: none;
          font-size: 20pt;
        }

        .burger:hover {
          color: ${theme.color.main};
        }

        .menu {
          transition: all 0.5s;
          position: absolute;
          top: 62px;
          height: 0;
          background: #e6e6e6;
          overflow: hidden;
          width: 100%;
          left: 0;
          display: block;
        }

        ul {
          flex-direction: column;
          list-style: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 4px;
          text-transform: uppercase;
          text-align: center;
        }

        button {
          color: ${theme.color.secondary};
          font-size: 22px;
          font-family: ${theme.font.family.title};
          font-weight: bold;
        }

        button:hover {
          color: ${theme.color.main};
        }

        .active {
          height: 145px; //height of ul
          border-top: 2px solid ${theme.color.main};
        }

        @media only screen and ${theme.breakpoint.smUp} {
          .header {
            height: 51px; //height of header without padding
          }
          .burger {
            font-size: 25pt;
          }
        }

        @media only screen and ${theme.breakpoint.mdUp} {
          .header {
            padding: 10px 30px;
          }
          .menu {
            display: flex;
            position: static;
            height: inherit;
            width: inherit;
            background: transparent;
          }
          .burger {
            display: none;
          }
          ul {
            flex-direction: row;
          }
          li {
            padding: 0;
            margin-left: 60px;
          }
        }
        @media only screen and ${theme.breakpoint.xlUp} {
          .header {
            padding: 10px 5%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
