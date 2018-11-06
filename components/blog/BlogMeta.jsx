import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class extends React.Component { 
  render () {
    const { createdAt, commentQty, readingTime } = this.props;

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
}