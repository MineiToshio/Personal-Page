import React from 'react';
import Router from 'next/router';
import withLocale from '@/hocs/withLocale';
import { MainLayout as Layout } from '@/components/layout';
import { Spinner } from '@/components/shared';
import { NavArrows, BlogSocial, Article, PostHeader } from '@/components/pages/blog-post';
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
    <Layout title={post[locale].title} featureImage={post.featureImage} url={`https://toshiominei.com/${locale}/blog/${post.url}`}>
      <article>
        <PostHeader
          publishedAt={timestampToDate(post.publishedAt!)}
          readingTime={post[locale].readingTime ?? 0}
          title={post[locale].title!}
          featureImage={post.featureImage}
          commentsQty={post.commentsQty}
          category={post.category}
        />
        <div className="body">
          <BlogSocial likeQty={post.likeQty} />
          <Article content={post[locale].content ?? ''} />
        </div>
      </article>
      <NavArrows urlPrev="#" urlNext="#" />
      <style jsx>{`
        .body {
          display: flex;
          align-items: flex-start;
          position: relative;
          left: -50px;
          justify-content: center;
        }
        @media screen and (max-width: 1023px) {
          .body {
            left: auto;
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
