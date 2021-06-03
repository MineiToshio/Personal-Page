import React, { FC } from 'react';
import theme from '@/styles/theme';
import { BlogPost } from '@/types/types';
import useTranslation from '@/hooks/useTranslation';
import { I18nLink } from '../../../core';
import Like from './Like';
import { BlogMeta } from '../../../shared';

type Props = Pick<
  BlogPost,
  'title' | 'photo' | 'summary' | 'createdAt' | 'commentQty' | 'readingTime' | 'likedQty' | 'url'
>;

const PostPreview: FC<Props> = ({
  title,
  photo,
  summary,
  createdAt,
  commentQty,
  readingTime,
  likedQty,
  url,
}) => {
  const { t } = useTranslation('PostPreview');
  return (
    <article>
      <I18nLink href={`/blog/${url}`}>
        <img src={photo} className="post-img" alt={title} />
      </I18nLink>
      <div className="blog-data">
        <Like likedQty={likedQty} />
        <I18nLink href={`/blog/${url}`}>
          <h2>{title}</h2>
        </I18nLink>
        <BlogMeta createdAt={createdAt} commentQty={commentQty} readingTime={readingTime} />
      </div>
      <p>
        {summary}
        <I18nLink href={`/blog/${url}`}>
          <span className="more-dots">…</span>
        </I18nLink>
      </p>
      <I18nLink href={`/blog/${url}`}>
        <span className="view-more">{t('keepReading')}</span>
      </I18nLink>

      <style jsx>{`
        article {
          padding-bottom: 35px;
          border-bottom: 1px dotted #ddd;
          margin-bottom: 40px;
        }
        .more-dots {
          text-decoration: none;
        }
        .view-more {
          padding: 8px 20px;
          background: none;
          border: 1px solid ${theme.color.main};
          color: ${theme.color.main};
          border-radius: 20px;
          cursor: pointer;
          transition: 0.1s ease-in;
        }
        .view-more:hover {
          background: ${theme.color.main};
          color: ${theme.color.white};
        }
        .post-img {
          border-radius: 20px;
          width: 100%;
        }
        p {
          font-family: ${theme.font.family.blog};
          line-height: 24px;
          font-size: 17px;
          text-align: justify;
        }
        .blog-data {
          display: grid;
          grid-template-areas:
            'like title'
            'like meta';
          grid-template-columns: minmax(auto, 50px) 1fr;
          margin-top: 20px;
          grid-column-gap: 10px;
        }
        .blog-data h2 {
          grid-area: title;
          margin-bottom: 5px;
          margin-top: 0;
          color: #000;
        }
        .blog-data h2:hover {
          color: ${theme.color.main};
        }
        @media screen and (max-width: 700px) {
          .blog-data h2 {
            font-size: 1.3em;
          }
          p {
            line-height: 21px;
            font-size: 15px;
          }
          .view-more {
            padding: 6px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </article>
  );
};

export default PostPreview;
