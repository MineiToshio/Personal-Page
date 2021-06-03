import React from 'react';
import theme from '@/styles/theme';

const Logo = () => (
  <span className="logo">
    Toshio Minei
    <style jsx>{`
      .logo {
        font-size: 33px;
        font-family: ${theme.font.family.logo};
        text-transform: capitalize;
        color: ${theme.color.main};
        text-decoration: none;
        margin-right: auto;
      }

      @media only screen and (max-width: 425px) {
        .logo {
          font-size: 27px;
        }
      }
    `}</style>
  </span>
);

export default Logo;
