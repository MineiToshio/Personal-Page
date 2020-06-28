import React, { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

type Props = {
  urlPrev: string;
  urlNext: string;
};

const NavArrows: FC<Props> = ({ urlPrev, urlNext }) => {
  return (
    <nav className="arrows">
      <Link href={urlPrev}>
        <button type="button" className="arrow left">
          <FA icon={['fas', 'chevron-left']} />
        </button>
      </Link>
      <Link href={urlNext}>
        <button type="button" className="arrow right">
          <FA icon={['fas', 'chevron-right']} />
        </button>
      </Link>

      <style jsx>{`
        .arrows {
          position: relative;
          font-size: 40px;
          z-index: 5px;
        }
        .arrow {
          position: fixed;
          top: 50%;
          padding: 20px 30px;
          color: var(--green);
          cursor: pointer;
          border: 10px solid transparent;
        }
        .arrow:hover {
          border: 10px solid #98eabd;
        }
        .arrows .left {
          left: 0;
        }
        .arrows .right {
          right: 0;
        }
        @media screen and (max-width: 900px) {
          .arrows {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavArrows;
