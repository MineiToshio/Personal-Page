import React, { useCallback, useEffect } from 'react';
import classnames from 'classnames';
import theme from '@/styles/theme';
import useBoolean from '@/hooks/useBoolean';
import { Icon } from '../../core';

const SHOW_BUTTON_SCROLL = 200;

const ScrollUp = () => {
  const [showButton, setShowButtonTrue, setShowButtonFalse] = useBoolean();

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const getScrollPosition = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > SHOW_BUTTON_SCROLL) {
        setShowButtonTrue();
      } else {
        setShowButtonFalse();
      }
    };

    getScrollPosition();
    document.addEventListener('scroll', getScrollPosition);
    return () => document.removeEventListener('scroll', getScrollPosition);
  }, [setShowButtonFalse, setShowButtonTrue]);

  return (
    <button
      type="button"
      className={classnames({ top: true, hidden: !showButton })}
      onClick={handleClick}
    >
      <Icon icon="angleUp" />

      <style jsx>{`
        .top {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 99;
          width: 40px;
          height: 40px;
          background: #515a5f;
          border: 0;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.color.white};
          font-size: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }
        .top:hover {
          opacity: 0.8;
        }
      `}</style>
    </button>
  );
};

export default ScrollUp;
