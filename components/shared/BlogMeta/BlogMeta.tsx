import React, { FC } from 'react';
import { CommentCount } from 'disqus-react';
import useTranslation from '@/hooks/useTranslation';
import { Icon, Typography, Spacer } from '@/components/core';
import { TimeAgo } from '@/components/shared';

type Props = {
  publishedAt: Date;
  readingTime: number;
  url: string;
  postId?: string;
  title?: string;
};

const BlogMeta: FC<Props> = ({ publishedAt, readingTime, url, postId, title }) => {
  const { t, locale } = useTranslation('BlogMeta');
  return (
    <div className="blog-meta">
      <Typography variant="body2" color="muted" fontSize="small" noWrap>
        <Icon icon="calendar" /> <TimeAgo locale={locale} date={publishedAt} />
      </Typography>
      <Spacer size={2} direction="horizontal" />
      <Typography variant="body2" color="muted" fontSize="small" noWrap>
        <Icon icon="clock" /> {readingTime} {t('minRead')}
      </Typography>
      <Spacer size={2} direction="horizontal" />
      <Typography variant="body2" color="muted" fontSize="small" noWrap>
        <Icon icon="commentDots" />
        <Spacer size={0.5} direction="horizontal" />
        {postId ? (
          <CommentCount
            shortname={process.env.DISQUS_SHORTNAME!}
            config={{
              url,
              identifier: postId,
              title,
            }}
          >
            {t('comments')}
          </CommentCount>
        ) : (
          <>0 {t('comments')}</>
        )}
      </Typography>
    </div>
  );
};

export default BlogMeta;
