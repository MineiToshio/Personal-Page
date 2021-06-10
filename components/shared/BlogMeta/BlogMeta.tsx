import React, { FC } from 'react';
import useTranslation from '@/hooks/useTranslation';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';
import { TimeAgo } from '@/components/shared';

type Props = {
  publishedAt: Date;
  commentsQty: number;
  readingTime: number;
};

const BlogMeta: FC<Props> = ({ publishedAt, commentsQty, readingTime }) => {
  const { t, locale } = useTranslation('BlogMeta');
  return (
    <div className="blog-meta">
      <span>
        <Icon icon="calendar" /> <TimeAgo locale={locale} date={publishedAt} />
      </span>
      <span>
        <Icon icon="clock" /> {readingTime} {t('minRead')}
      </span>
      {commentsQty > 0 && (
        <span>
          <Icon icon="commentDots" /> {commentsQty} {t('comments')}
        </span>
      )}

      <style jsx>{`
        .blog-meta {
          font-size: 14px;
          color: ${theme.color.muted};
        }
        .blog-meta > * {
          margin-right: 15px;
        }
      `}</style>
    </div>
  );
};

export default BlogMeta;
