import React, { FC } from 'react';
import theme from '@/styles/theme';
import { I18nLink } from '../../../core';

type Props = {
  title: string;
  thumbnail?: string;
  createdAt: string;
  url: string;
};

const RecentPost: FC<Props> = ({ title, thumbnail, createdAt, url }) => {
  const postUrl = `/blog/${url}`;

  return (
    <div className="recent-post">
      <div className="photo">
        <I18nLink href={postUrl}>
          <img src={thumbnail} alt={title} />
        </I18nLink>
      </div>
      <I18nLink href={postUrl}>
        <span className="title">{title}</span>
      </I18nLink>
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
          width: 60px;
          border-radius: 50%;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid ${theme.color.border};
        }
        .title {
          grid-area: title;
          margin: 0;
          line-height: 17px;
          text-decoration: none;
          color: ${theme.color.main};
          font-size: 14px;
        }
        .title:hover {
          color: ${theme.color.main};
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
