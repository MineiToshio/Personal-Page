// TODO: Remove when there are more exports
/* eslint-disable import/prefer-default-export */
import { css } from 'styled-jsx/css';
import theme from '@/styles/theme';

export const getScrollStyles = (element: string) => css.resolve`
  ${element}::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${theme.color.border};
  }
  ${element}::-webkit-scrollbar {
    width: 8px;
    background-color: ${theme.color.border};
  }
  ${element}::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${theme.color.muted};
  }
`;

export const getResetButtonStyles = () => css.resolve`
  button {
    background: none;
    border: 0;
    padding: 0;
    border: 0;
    cursor: pointer;
  }
`;
