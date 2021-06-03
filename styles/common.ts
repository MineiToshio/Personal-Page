// TODO: Remover comentario cuando hayan más exports
/* eslint-disable import/prefer-default-export */
import css from 'styled-jsx/css';

export const getScrollStyles = (elemento: string) => css.resolve`
  ${elemento}::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #e4e4e4;
  }
  ${elemento}::-webkit-scrollbar {
    width: 8px;
    background-color: #e4e4e4;
  }
  ${elemento}::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #9c9c9c;
  }
`;
