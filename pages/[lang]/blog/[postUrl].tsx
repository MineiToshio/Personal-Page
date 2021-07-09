import React from 'react';
import Router from 'next/router';
import withLocale from '@/hocs/withLocale';
import { MainLayout as Layout } from '@/components/layout';
import { Spacer } from '@/components/core';
import { Spinner } from '@/components/shared';
import { NavArrows, BlogSocial, Article, PostHeader, Comments } from '@/components/pages/blog-post';
import { getPublishedPostByUrl, increaseViewsQty } from '@/firebase/posts';
import { timestampToDate } from '@/firebase/utils';
import useTranslation from '@/hooks/useTranslation';
import type { NextPageContext, NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';
import useBreakpointValues from '@/hooks/useBreakpointValues';
import type { Size } from '@/components/core';

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
  const commentsTopSpace = useBreakpointValues<Size>({ xs: 3, lg: 6, md: 8 });

  if (!post) {
    Router.push('/[lang]/blog', `/${locale}/blog`);
    return <Spinner />;
  }

  const url = `https://toshiominei.com/${locale}/blog/${post.url}`;

  return (
    <Layout title={post[locale].title} featureImage={post.featureImage} url={url}>
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
          <BlogSocial
            likeQty={post.likeQty}
            postTitle={post[locale].title ?? ''}
            postUrl={post.url ?? ''}
          />
          <Article content={post[locale].content ?? ''} />
        </div>
      </article>
      <Spacer size={commentsTopSpace} direction="vertical" />
      <Comments url={url} id={post.id!} title={post[locale].title!} />
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
