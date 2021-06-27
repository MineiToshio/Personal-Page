import React from 'react';
import ScrollToTop from 'react-scroll-up';
import theme from '@/styles/theme';
import { Icon } from '../../core';

const ScrollUp = () => {
  const style = {
    bottom: 25,
    right: 25,
  };

  return (
    <ScrollToTop showUnder={160} style={style}>
      <div className="top">
        <Icon icon="angleUp" />
      </div>

      <style jsx>{`
        .top {
          width: 40px;
          height: 40px;
          background: #515a5f;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.color.white};
          font-size: 30px;
          transition: all 0.3s ease;
        }
        .top:hover {
          opacity: 0.8;
        }
      `}</style>
    </ScrollToTop>
  );
};

export default ScrollUp;
