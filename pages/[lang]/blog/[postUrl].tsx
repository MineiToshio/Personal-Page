import React from 'react';
import Router from 'next/router';
import withLocale from '@/hocs/withLocale';
import theme from '@/styles/theme';
import { MainLayout as Layout } from '@/components/layout';
import { BlogMeta, Spinner } from '@/components/shared';
import { NavArrows, BlogSocial, Article } from '@/components/pages/blog-post';
import { getPublishedPostByUrl, increaseViewsQty } from '@/firebase/posts';
import { timestampToDate } from '@/firebase/utils';
import useTranslation from '@/hooks/useTranslation';
import type { NextPageContext, NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';

type Props = {
  post: PostDoc | null;
};

type Context = NextPageContext & {
  query: {
    postUrl: string;
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const { locale } = useTranslation('');

  if (!post) {
    Router.push('/[lang]/blog', `/${locale}/blog`);
    return <Spinner />;
  }

  return (
    <Layout title={post[locale].title ?? ''}>
      <article>
        <div className="header">
          <div className="info-container">
            <p className="category">Tecnología</p>
            <h1 className="title">{post[locale].title}</h1>
            <BlogMeta
              publishedAt={timestampToDate(post.publishedAt!)}
              commentQty={50}
              readingTime={post[locale].readingTime ?? 0}
            />
          </div>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${post.featureImage})`,
            }}
          />
        </div>
        <div className="body">
          <BlogSocial />
          <Article content={post[locale].content ?? ''} />
        </div>
      </article>
      <NavArrows urlPrev="#" urlNext="#" />
      <style jsx>{`
        .header {
          display: grid;
          grid-template-areas: 'titulo banner';
          grid-template-columns: repeat(2, 1fr);
        }
        .header img {
          width: 100%;
        }
        .info-container {
          margin-left: auto;
          padding: 80px 10px 0 0;
          max-width: 615px;
          grid-area: titulo;
        }
        .banner {
          grid-area: banner;
          background-position: 48% 49%;
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
        .social {
          position: sticky;
          top: 150px;
          font-size: 22px;
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          margin-left: auto;
          max-width: 100px;
          width: 100%;
        }
        .social a {
          color: #545454;
          margin-bottom: 15px;
          text-decoration: none;
        }
        .social a:hover {
          color: ${theme.color.muted};
        }
        .like-count {
          font-size: 15px;
        }
        .body {
          display: flex;
          align-items: flex-start;
          margin: 60px 0;
          position: relative;
          left: -55px;
        }
        @media screen and (max-width: 1280px) {
          .header {
            grid-template-areas:
              'banner'
              'titulo';
            grid-template-columns: 1fr;
          }
          .info-container {
            margin: auto;
            padding: 50px 20px 0;
            max-width: initial;
            text-align: center;
            max-width: 700px;
          }
          .title {
            font-size: 35px;
          }
          .body {
            margin: 40px 0;
          }
        }
        @media screen and (max-width: 1023px) {
          .social {
            display: none;
          }
          .body {
            left: auto;
          }
        }
        @media screen and (max-width: 768px) {
          .banner {
            min-height: initial;
          }
        }
        @media screen and (max-width: 425px) {
          .title {
            font-size: 30px;
            line-height: 40px;
          }
          .body {
            margin: 30px 0;
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
    </Layout>
  );
};

Post.getInitialProps = async ({ query }: Context) => {
  const { postUrl } = query;
  const post = await getPublishedPostByUrl(postUrl);
  if (post) {
    increaseViewsQty(post.id);
  }
  return { post };
};

export default withLocale(Post);
