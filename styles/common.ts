// TODO: Remove when there are more exports
/* eslint-disable import/prefer-default-export */
import {css} from 'styled-jsx/css';
import theme from '@/styles/theme'

export const getScrollStyles = (elemento: string) => css.resolve`
  ${elemento}::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${theme.color.border};
  }
  ${elemento}::-webkit-scrollbar {
    width: 8px;
    background-color: ${theme.color.border};
  }
  ${elemento}::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.color.muted};
  }
`;
