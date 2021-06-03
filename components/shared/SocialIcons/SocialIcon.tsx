import React, { FC } from 'react';
import { SocialIcon as SocialIconType } from '@/types/types';
import theme from '@/styles/theme';
import { Icon } from '../../core';

type Props = SocialIconType;

const SocialIcon: FC<Props> = ({ color, url, icon, name }) => (
  <a href={url} target="_blank" rel="noreferrer" aria-label={icon} title={name}>
    <Icon icon={icon} />

    <style jsx>{`
      a {
        font-size: 25pt;
        cursor: pointer;
        z-index: 1;
        border-radius: 5px;
        transition: all 0.3s ease;
        will-change: background-color, color;
        margin: 0 8px;
        padding: 0 8px;
      }
      a:hover {
        background-color: ${color};
        color: ${theme.color.white} !important;
      }
      a:hover :global(svg) {
        animation: topToBottom 0.3s forwards;
      }
      @keyframes topToBottom {
        49% {
          transform: translateY(100%);
        }
        50% {
          opacity: 0;
          transform: translateY(-100%);
        }
        51% {
          opacity: 1;
        }
      }
    `}</style>
  </a>
);

export default SocialIcon;
