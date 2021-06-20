import React from 'react';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';
import useTranslation from '@/hooks/useTranslation';

type Props = {
  likeQty: number;
  postTitle: string;
  postUrl: string;
};

const BlogSocial = ({ likeQty, postTitle, postUrl }: Props) => {
  const { t, locale } = useTranslation('BlogSocial');

  const onFacebookClick = () => {
    // TODO: Implement facebook share
  }

  const onTwitterClick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURI(postTitle)}&url=${encodeURI(
      `https://toshiominei.com/${locale}/blog/${postUrl}`,
    )}&via=MineiToshio`, '_blank')
  };

  return (
    <div className="social">
      <button type="button" title={t('like')}>
        <Icon icon="thumbsUp" />
        <span className="like-count">{likeQty}</span>
      </button>
      <button type="button" title={t('shareTwitter')} onClick={onTwitterClick}>
        <Icon icon="twitter" />
      </button>
      <button type="button" title={t('shareFacebook')} onClick={onFacebookClick}>
        <Icon icon="facebookSquare" />
      </button>

      <style jsx>{`
        .social {
          position: sticky;
          top: 150px;
          font-size: 22px;
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          max-width: 100px;
          width: 100%;
        }
        .social button {
          color: #545454;
          margin-bottom: 18px;
          text-decoration: none;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 1.2em;
          display: flex;
          align-items: center;
          outline: none;
          width: 85px;
        }
        .social button:hover {
          color: ${theme.color.muted};
        }
        .like-count {
          font-size: 15px;
          margin-left: 10px;
          margin-top: 8px;
        }
        @media screen and (max-width: 1023px) {
          .social {
            display: none;
          }
        }
      `}</style>
    </div>
  )
};

export default BlogSocial;
