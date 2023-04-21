import React, { FC } from 'react';
import Image from 'next/image';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import { I18nLink, Spacer, Typography } from '@/components/core';
import { BlogMeta, LineClamp } from '@/components/shared';
import constants from '@/helpers/constants';

type Props = {
  postId: string;
  title: string;
  featureImage?: string;
  summary: string;
  publishedAt: Date;
  readingTime: number;
  likeQty: number;
  url: string;
};

const PostPreview: FC<Props> = ({
  postId,
  title,
  featureImage,
  summary,
  publishedAt,
  readingTime,
  url,
}) => {
  const { t, locale } = useTranslation('PostPreview');
  return (
    <article className="article">
      {featureImage && (
        <I18nLink href={`/blog/${url}`} className="post-img">
          <Image src={featureImage} width={670} height={305} alt={title} />
        </I18nLink>
      )}
      <div className="blog-data">
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
        <Spacer direction="vertical" size={1} />
        <BlogMeta
          publishedAt={publishedAt}
          readingTime={readingTime}
          url={`${constants.url}/${locale}/blog/${url}`}
          postId={postId}
          title={title}
        />
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
        .article :global(.post-img img) {
          border-radius: 20px;
          object-fit: cover;
        }
        .blog-data {
          margin-top: 20px;
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
