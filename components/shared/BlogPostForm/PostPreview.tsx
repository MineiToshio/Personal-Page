import React from 'react';
import { Article, PostHeader } from '@/components/pages/blog-post';
import { Icon } from '@/components/core';
import { Portal } from '@/components/shared';
import theme from '@/styles/theme';

type Props = {
  title: string;
  publishedAt: Date;
  readingTime: number;
  featureImage?: string;
  commentsQty: number;
  category?: string;
  content: string;
  onClose: () => void;
}

const PostPreview = ({ title, publishedAt, readingTime, featureImage, commentsQty, category, content, onClose }: Props) => (
  <Portal>
    <div className="modal">
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
      <body className="body">
        <Article content={content} />
      </body>
    </div>
    <style jsx>{`
      .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: ${theme.color.white};
        z-index: 99;
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
        color: ${theme.color.white}
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
