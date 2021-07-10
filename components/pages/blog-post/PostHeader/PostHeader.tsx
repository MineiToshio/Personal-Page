import React from 'react';
import theme from '@/styles/theme';
import { BlogMeta } from '@/components/shared';
import constants from '@/helpers/constants';
import useTranslation from '@/hooks/useTranslation';

type Props = {
  postId?: string;
  url?: string;
  title: string;
  publishedAt: Date;
  readingTime: number;
  featureImage?: string;
  category?: string;
};

const PostHeader = ({
  postId,
  url,
  title,
  publishedAt,
  readingTime,
  featureImage,
  category,
}: Props) => {
  const { locale } = useTranslation('');
  return (
    <div className="header">
      <div className="info-container">
        {category && <p className="category">{category}</p>}
        <h1 className="title">{title}</h1>
        <BlogMeta
          publishedAt={publishedAt}
          readingTime={readingTime}
          url={`${constants.url}/${locale}/blog/${url}`}
          postId={postId}
          title={title}
        />
      </div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${featureImage})`,
        }}
      />
      <style jsx>{`
        .header {
          display: grid;
          grid-template-areas: 'titulo banner';
          grid-template-columns: repeat(2, 1fr);
          margin-bottom: 60px;
        }
        .header img {
          width: 100%;
        }
        .info-container {
          margin-left: 20%;
          padding-right: 40px;
          grid-area: titulo;
          align-self: center;
        }
        .banner {
          grid-area: banner;
          background-position: center;
          background-size: cover;
          height: 40vh;
          min-height: 315px;
        }
        .category {
          color: ${theme.color.muted};
          text-transform: uppercase;
          margin: 0;
          font-size: 14px;
          text-align: left;
        }
        .title {
          text-align: left;
          font-size: 40px;
          line-height: 50px;
          font-family: ${theme.font.family.elegant};
          margin: 10px 0;
        }
        @media screen and (max-width: 1280px) {
          .header {
            grid-template-areas:
              'banner'
              'titulo';
            grid-template-columns: 1fr;
            margin-bottom: 30px;
          }
          .info-container {
            margin: auto;
            padding: 50px 20px 0;
            max-width: initial;
            max-width: 700px;
          }
          .title {
            font-size: 35px;
          }
        }
        @media screen and (max-width: 768px) {
          .banner {
            min-height: initial;
          }
        }
        @media screen and (max-width: 425px) {
          .header {
            margin-bottom: 20px;
          }
          .title {
            font-size: 30px;
            line-height: 40px;
          }
          .info-container {
            padding-top: 35px;
          }
          .banner {
            height: 30vh;
          }
        }
        @media screen and (max-width: 375px) {
          .title {
            font-size: 25px;
            line-height: 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default PostHeader;
