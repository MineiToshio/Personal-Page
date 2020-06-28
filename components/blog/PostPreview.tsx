import React, { FC } from 'react';
import Link from '../widgets/Link';
import Like from '../widgets/Like';
import BlogMeta from './BlogMeta';
import { BlogPost } from '../../types/types';
import useTranslation from '../../hooks/useTranslation';

type Props = Pick<
  BlogPost,
  'title' | 'photo' | 'summary' | 'createdAt' | 'commentQty' | 'readingTime' | 'likedQty' | 'url'
>;

const PostPreview: FC<Props> = ({
  title,
  photo,
  summary,
  createdAt,
  commentQty,
  readingTime,
  likedQty,
  url,
}) => {
  const { t } = useTranslation('PostPreview');
  return (
    <article>
      <Link href={`/blog/${url}`}>
        <img src={photo} className="post-img" alt={title} />
      </Link>
      <div className="blog-data">
        <Like likedQty={likedQty} />
        <Link href={`/blog/${url}`}>
          <h2>{title}</h2>
        </Link>
        <BlogMeta createdAt={createdAt} commentQty={commentQty} readingTime={readingTime} />
      </div>
      <p>
        {summary}
        <Link href={`/blog/${url}`}>
          <span className="more-dots">…</span>
        </Link>
      </p>
      <Link href={`/blog/${url}`}>
        <span className="view-more">{t('keepReading')}</span>
      </Link>

      <style jsx>{`
        article {
          padding-bottom: 35px;
          border-bottom: 1px dotted #ddd;
          margin-bottom: 40px;
        }
        .more-dots {
          text-decoration: none;
        }
        .view-more {
          padding: 8px 20px;
          background: none;
          border: 1px solid var(--green);
          color: var(--green);
          border-radius: 20px;
          cursor: pointer;
          transition: 0.1s ease-in;
        }
        .view-more:hover {
          background: var(--green);
          color: #fff;
        }
        .post-img {
          border-radius: 20px;
          width: 100%;
        }
        p {
          font-family: 'Charter';
          line-height: 24px;
          font-size: 17px;
          text-align: justify;
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
          color: var(--green);
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
