import React from 'react';

type Props = {
  lines: number;
  children: React.ReactNode | Array<React.ReactNode>;
};

const LineClamp = ({ lines, children }: Props) => (
  <div className="line-clamp">
    {children}
    <style jsx>{`
      .line-clamp {
        overflow: hidden;
        /* TODO: The following attributes are still draft. Find a better way to do it */
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
      }
    `}</style>
  </div>
);

export default LineClamp;
