import React, { FC } from 'react';

export type Props = {
  size: 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  direction: 'vertical' | 'horizontal';
};

const VerticalSpacer: FC<Props> = ({ size, direction }) => {
  const realSize = size * 8;
  return (
    <div className={direction}>
      <style jsx>{`
        .vertical {
          height: ${realSize}px;
          min-height: ${realSize}px;
        }
        .horizontal {
          width: ${realSize}px;
          min-width: ${realSize}px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default VerticalSpacer;
