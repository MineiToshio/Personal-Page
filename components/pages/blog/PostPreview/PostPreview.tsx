import React, { FC } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { I18nLink, Spacer, Typography } from '../../../core';
import Like from './Like';
import { BlogMeta, LineClamp } from '../../../shared';

type Props = {
  title: string;
  featureImage?: string;
  summary: string;
  publishedAt: Date;
  commentsQty: number;
  readingTime: number;
  likeQty: number;
  url: string;
};

const PostPreview: FC<Props> = ({
  title,
  featureImage,
  summary,
  publishedAt,
  commentsQty,
  readingTime,
  likeQty,
  url,
}) => {
  const { t } = useTranslation('PostPreview');
  return (
    <article>
      {featureImage && (
        <I18nLink href={`/blog/${url}`}>
          <img src={featureImage} className="post-img" alt={title} />
        </I18nLink>
      )}
      <div className="blog-data">
        <Like likeQty={likeQty} />
        <I18nLink href={`/blog/${url}`}>
          <h2>{title}</h2>
        </I18nLink>
        <BlogMeta publishedAt={publishedAt} commentsQty={commentsQty} readingTime={readingTime} />
      </div>
      <Spacer direction="vertical" size={2} />
      <LineClamp lines={4}>
        <Typography text={summary} />
      </LineClamp>
      <Spacer direction="vertical" size={2} />
      <I18nLink href={`/blog/${url}`}>
        <span className="view-more">{t('keepReading')}</span>
      </I18nLink>

      <style jsx>{`
        article {
          padding-bottom: 35px;
          border-bottom: 1px dotted #ddd;
          margin-bottom: 40px;
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
          font-family: ${theme.font.family.default};
          line-height: 32px;
          font-size: ${theme.font.size.body};
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
