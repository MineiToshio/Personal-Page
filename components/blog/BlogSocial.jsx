import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const BlogSocial = () => {
  return (
    <div className="social">
      <a href="#" title="Me Gusta"><FA icon={['fas', "thumbs-up"]} /> <span className="like-count">5.2k</span></a>
      <a href="#" title="Compartir en Twitter"><FA icon={['fab', "twitter"]} /></a>
      <a href="#" title="Compartir en Facebook"><FA icon={['fab', "facebook-square"]} /></a>

      <style jsx>{`
        .social {
          position: sticky;
          top: 150px;
          font-size: 22px;
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          margin-left: auto;
          max-width: 100px;
          width: 100%;
        }
        .social a {
          color: #545454;
          margin-bottom: 15px;
          text-decoration: none;
        }
        .social a:hover { 
          color: var(--muted);
        }
        .like-count {
          font-size: 15px;
        }
        @media screen and (max-width: 1023px) {
          .social {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default BlogSocial