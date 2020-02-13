import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

const NavArrows = ({ urlPrev, urlNext }) => {
  return (
    <nav className="arrows">
      <Link href={urlPrev}>
        <a className="left"><FA icon={['fas', "chevron-left"]} /></a>
      </Link>
      <Link href={urlNext}>
        <a className="right"><FA icon={['fas', "chevron-right"]} /></a>
      </Link>

      <style jsx>{`
        .arrows {
          position: relative;
          font-size: 40px;
          z-index: 5px;
        }
        .arrows > a {
          position: fixed;
          top: 50%;
          padding: 20px 30px;
          color: var(--green);
          cursor: pointer;
          border: 10px solid transparent;
        }
        .arrows > a:hover {
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
  )
}

NavArrows.propTypes = {
  urlPrev: PropTypes.string.isRequired,
  urlNext: PropTypes.string.isRequired,
}

export default NavArrows