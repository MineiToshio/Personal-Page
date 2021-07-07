import React, { FC, useEffect } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { Spacer, Typography } from '../../core';

export type Props = {
  parentRef?: React.RefObject<HTMLDivElement>;
  borderRadius?: number;
};

const Spinner: FC<Props> = ({ parentRef, borderRadius = 0 }) => {
  const { t } = useTranslation('Spinner');

  useEffect(() => {
    if (parentRef) {
      const parentNode = parentRef.current;
      if (parentNode) parentNode.style.setProperty('position', 'relative');
    }
  }, [parentRef]);

  return (
    <div className="spinner-container">
      <div className="icon-container">
        <img src="/img/icons/icon-192x192.png" alt="Loading" />
      </div>
      <Spacer size={1} direction="vertical" />
      <Typography variant="title" fontSize="subtitle">
        {t('loading')}
      </Typography>
      <style jsx>{`
        @keyframes movement {
          0% {
            transform: translateX(-25px);
          }
          50% {
            transform: translateX(25px);
          }
          100% {
            transform: translateX(-25px);
          }
        }
        .spinner-container {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: ${theme.color.white};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: ${borderRadius}px;
          z-index: 1000000;
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          transition: all ease-in-out;
          animation: movement 1s infinite;
          width: 65px;
        }
      `}</style>
    </div>
  );
};

export default Spinner;
