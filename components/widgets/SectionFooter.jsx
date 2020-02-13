import React from 'react';
import PropTypes from 'prop-types'

const SectionFooter = ({ title, url, button }) => {
  return (
    <div className="ver-mas">
      <p>{title}</p>
      <a href={url} target="_blank" rel="noopener" aria-label={title}>{button}</a>

      <style jsx>{`
        .ver-mas {
          width: 100%;
          text-align: center;
          font-family: 'BebasNeue',sans-serif;
          font-size: 30px;
          color: var(--blue);
          background-color: #f5f5f5;
          padding: 40px 0;
          margin-top: 40px;
        }

        p {
          margin: 0 0 10px 0;
        }

        a {
          color: var(--green);
          margin: 5px;
          border: 2px solid var(--green);
          text-decoration: none;
          padding: 10px;
          border-radius: 5px;
          font-size: 15pt;
        }

        a:hover {
          background-color: var(--green);
          color: white;
        }
      `}</style>
    </div>
  )
}

SectionFooter.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
}

export default SectionFooter