import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

const SocialIcon = ({ color, url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noopener" aria-label={icon}>
      <FA icon={['fab', icon]} />

      <style jsx>{`
        a {
          font-size: 25pt;
          cursor: pointer;
          z-index: 1;
          border-radius: 5px;
          transition: all .3s ease;
          will-change: background-color, color;
          margin: 0 8px;
          padding: 0 8px;
        }

        a:hover {
          background-color: ${ color };
          color: #fff !important;
        }

        a:hover :global(svg) {
          animation: topToBottom .3s forwards;
        }

        @keyframes topToBottom {
          49% {
            transform: translateY(100%); 
          }
          50% {
            opacity: 0;
            transform: translateY(-100%); 
          }
          51% {
            opacity: 1; 
          }
        }
      `}</style>
    </a>
  )
}

SocialIcon.propTypes = {
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default SocialIcon