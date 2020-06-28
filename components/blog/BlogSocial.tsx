import React, { FC } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const BlogSocial: FC = () => {
  return (
    <div className="social">
      <button type="button" title="Me Gusta">
        <FA icon={['fas', 'thumbs-up']} />
        <span className="like-count">5.2k</span>
      </button>
      <button type="button" title="Compartir en Twitter">
        <FA icon={['fab', 'twitter']} />
      </button>
      <button type="button" title="Compartir en Facebook">
        <FA icon={['fab', 'facebook-square']} />
      </button>

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
        .social button {
          color: #545454;
          margin-bottom: 18px;
          text-decoration: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.2em;
          display: flex;
          align-items: flex-end;
          outline: none;
          width: 85px;
        }
        .social button:hover {
          color: var(--muted);
        }
        .like-count {
          font-size: 15px;
          margin-left: 10px;
        }
        @media screen and (max-width: 1023px) {
          .social {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogSocial;
