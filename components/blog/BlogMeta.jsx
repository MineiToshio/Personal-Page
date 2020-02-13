import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

const BlogMeta = ({ createdAt, commentQty, readingTime }) => { 
  return (
    <div className="blog-meta">
      <span><FA icon={['far', "calendar"]} /> { createdAt }</span>
      <span><FA icon={['far', "clock"]} /> { readingTime } min de lectura</span>
      <span><FA icon={['far', "comment-dots"]} /> { commentQty } comentarios</span>

      <style jsx>{`
        .blog-meta {
          grid-area: meta;
          font-size: 14px;
          color: #8f8f8f;
        }
        .blog-meta > * {
          margin-right: 15px;
        }
      `}</style>
    </div>
  )
}

BlogMeta.propTypes = {
  createdAt: PropTypes.string.isRequired,
  commentQty: PropTypes.number.isRequired,
  readingTime: PropTypes.number.isRequired,
}

export default BlogMeta