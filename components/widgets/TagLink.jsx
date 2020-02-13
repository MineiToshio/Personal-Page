import React from 'react'
import PropTypes from 'prop-types'

const TagLink = ({ tag }) => {
  return (
    <a href="#" className="tag-link">{ tag }
      <style jsx>{`
        .tag-link { 
          padding: 5px 10px;
          border-radius: 50px;
          border: 1px var(--green) solid;
          display: inline-block;
          margin-bottom: 8px;
          transition: 0.1s ease-in;
          margin-right: 5px;
        }
        .tag-link:hover {
          text-decoration: none;
          color: #fff;
          background: var(--green);
        }  
        a {
          text-decoration: none;
          color: var(--green);
          font-size: 15px;
        }
      `}</style>
    </a>
  )
}

TagLink.propTypes = {
  tag: PropTypes.string.isRequired
}

export default TagLink