import React, { FC } from 'react';
import Link from '../widgets/Link';
import { BlogPost } from '../../types/types';

type Props = Pick<BlogPost, 'title' | 'thumbnail' | 'createdAt' | 'url'>;

const RecentPost: FC<Props> = ({ title, thumbnail, createdAt, url }) => {
  const postUrl = `/blog/${url}`;

  return (
    <div className="recent-post">
      <div className="photo">
        <Link href={postUrl}>
          <img src={thumbnail} alt={title} />
        </Link>
      </div>
      <Link href={postUrl}>
        <span className="title">{title}</span>
      </Link>
      <span className="date">{createdAt}</span>
      <style jsx>{`
        .recent-post {
          display: grid;
          grid-template-areas:
            'photo title'
            'photo date';
          grid-template-columns: minmax(auto, 60px) 1fr;
          column-gap: 15px;
          margin-bottom: 15px;
        }
        .photo {
          grid-area: photo;
        }
        .photo img {
          display: block;
          max-width: 100%;
          width: 100%;
          border-radius: 50%;
        }
        .title {
          grid-area: title;
          margin: 0;
          font-weight: bold;
          line-height: 17px;
          text-decoration: none;
          color: var(--green);
          font-size: 14px;
        }
        .title:hover {
          color: var(--green);
          filter: brightness(85%);
        }
        .date {
          grid-area: date;
          color: #8f8f8f;
          font-size: 13px;
        }
        @media screen and (max-width: 790px) {
          .recent-post {
            grid-template-columns: minmax(auto, 50px) 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default RecentPost;
