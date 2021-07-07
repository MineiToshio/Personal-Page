import React, { FC } from 'react';
import theme from '@/styles/theme';
import constants from '@/helpers/constants';
import { SocialIcons } from '../../shared';

const Footer: FC = () => (
  <footer>
    <SocialIcons />
    <div>
      {constants.name} ©{new Date().getFullYear()}
    </div>

    <style jsx>{`
      footer {
        margin-top: 50px;
        padding: 15px;
        display: flex;
        flex-direction: columns;
        align-items: center;
        justify-content: center;
        background: ${theme.color.dark};
        flex-direction: column;
        color: ${theme.color.muted};
      }
      div {
        margin-top: 15px;
      }
      footer :global(a) {
        color: ${theme.color.muted};
      }
    `}</style>
  </footer>
);

export default Footer;
