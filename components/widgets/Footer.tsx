import React, { FC } from 'react';
import IconMenu from '../social-icons/IconMenu';

const Footer: FC = () => {
  const color = '#949494';

  return (
    <footer>
      <IconMenu />
      <div>Toshio Minei ©{ new Date().getFullYear() }</div>

      <style jsx>{`
        footer {
          margin-top: 50px;
          padding: 15px;
          display: flex;
          flex-direction: columns;
          align-items: center;
          justify-content: center;
          background: var(--black);
          flex-direction: column;
          color: ${color};
        }

        div {
          margin-top: 15px;
        }

        footer :global(a) {
          color: ${color};
        }
      `}</style>
    </footer>
  )
}

export default Footer