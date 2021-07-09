import React, { FC } from 'react';
import Image from 'next/image';
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
    <article className="article">
      {featureImage && (
        <I18nLink href={`/blog/${url}`} className="post-img">
          <Image
            src={featureImage}
            width={670}
            height={305}
            layout="responsive"
            objectFit="cover"
          />
        </I18nLink>
      )}
      <div className="blog-data">
        <Like likeQty={likeQty} />
        <I18nLink href={`/blog/${url}`} className="title">
          <Typography
            variant="subtitle"
            color="black"
            hoverColor="main"
            fontWeight="bold"
            lineHeight="small"
          >
            {title}
          </Typography>
        </I18nLink>
        <BlogMeta publishedAt={publishedAt} commentsQty={commentsQty} readingTime={readingTime} />
      </div>
      <Spacer direction="vertical" size={2} />
      <LineClamp lines={4}>
        <Typography>{summary}</Typography>
      </LineClamp>
      <Spacer direction="vertical" size={2} />
      <I18nLink href={`/blog/${url}`}>
        <span className="view-more">{t('keepReading')}</span>
      </I18nLink>

      <style jsx>{`
        .article {
          padding-bottom: 35px;
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
        .article :global(.post-img div) {
          border-radius: 20px;
        }
        .blog-data {
          display: grid;
          grid-template-areas:
            'like title'
            'like meta';
          grid-template-columns: minmax(auto, 50px) 1fr;
          margin-top: 20px;
          grid-column-gap: 10px;
          grid-row-gap: 8px;
        }
        .blog-data :global(.title) {
          grid-area: title;
        }
        @media screen and (max-width: 700px) {
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
