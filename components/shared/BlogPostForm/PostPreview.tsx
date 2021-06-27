import React from 'react';
import classnames from 'classnames';
import { Article, PostHeader } from '@/components/pages/blog-post';
import { Icon } from '@/components/core';
import { Portal } from '@/components/shared';
import theme from '@/styles/theme';
import { getScrollStyles } from '@/styles/common';

type Props = {
  title?: string;
  publishedAt: Date;
  readingTime: number;
  featureImage?: string;
  commentsQty: number;
  category?: string;
  content?: string;
  onClose: () => void;
};

const { className: scrollClass, styles } = getScrollStyles('div');

const PostPreview = ({
  title = 'Untitled Post',
  publishedAt,
  readingTime,
  featureImage,
  commentsQty,
  category,
  content = '',
  onClose,
}: Props) => (
  <Portal>
    <div className="modal">
      <div className={classnames(scrollClass, 'container')}>
        <button className="close" onClick={onClose} type="button">
          <Icon icon="times" />
        </button>
        <PostHeader
          publishedAt={publishedAt}
          readingTime={readingTime}
          title={title}
          featureImage={featureImage}
          commentsQty={commentsQty}
          category={category}
        />
        <div className="body">
          <Article content={content} />
        </div>
      </div>
    </div>
    {styles}
    <style jsx>{`
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.color.white};
        z-index: 99;
      }
      .container {
        overflow-y: auto;
        height: 100%;
      }
      .close {
        position: fixed;
        background: ${theme.color.muted};
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        bottom: 25px;
        right: 25px;
        border: 0;
        padding: 0;
        cursor: pointer;
        color: ${theme.color.white};
      }
      .body {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    `}</style>
  </Portal>
);

export default PostPreview;
