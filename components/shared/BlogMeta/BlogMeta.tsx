import React, { FC } from 'react';
import useTranslation from '@/hooks/useTranslation';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';

type Props = {
  createdAt: string;
  commentQty: number;
  readingTime: number;
};

const BlogMeta: FC<Props> = ({ createdAt, commentQty, readingTime }) => {
  const { t } = useTranslation('BlogMeta');
  return (
    <div className="blog-meta">
      <span>
        <Icon icon="calendar" /> {createdAt}
      </span>
      <span>
        <Icon icon="clock" /> {readingTime} {t('minRead')}
      </span>
      <span>
        <Icon icon="commentDots" /> {commentQty} {t('comments')}
      </span>

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
