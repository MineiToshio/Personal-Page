import React from 'react';
import { NextPage } from 'next';
import { getPostsByIsPublished } from '@/firebase/posts';
import withLocale from '@/hocs/withLocale';
import useTranslation from '@/hooks/useTranslation';
import { MainLayout as Layout } from '@/components/layout';
import { Section } from '@/components/shared';
import { timestampToDateString } from '@/firebase/utils';
import { BlogSidebar, PostPreview } from '@/components/pages/blog';
import removeHtml from '@/helpers/removeHtml';
import type { PostDoc } from '@/types/firebase';

type Props = {
  posts: PostDoc[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  const { t, locale } = useTranslation('Blog');
  return (
    <Layout title="Toshio Minei - Blog">
      <Section id="blog" title="Blog" subtitle={t('subtitle')}>
        <div className="blog">
          <div id="blog-list">
            {posts.map(post => (
              <PostPreview
                key={post.id}
                title={post[locale].title ?? ''}
                featureImage={post.featureImage}
                summary={removeHtml(post[locale].content ?? '')}
                createdAt={timestampToDateString(post.createdAt, locale)}
                commentsQty={post.commentsQty}
                readingTime={post[locale].readingTime ?? 0}
                likeQty={post.likeQty}
                url={post.url ?? ''}
              />
            ))}
          </div>
          <BlogSidebar recentPosts={posts} />
        </div>
      </Section>

      <style jsx>{`
        .blog {
          display: grid;
          grid-template-columns: 1fr minmax(auto, 300px);
          max-width: 1000px;
          column-gap: 30px;
          margin: 10px;
        }
        @media screen and (max-width: 790px) {
          .blog {
            column-gap: 0;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  const posts = await getPostsByIsPublished();
  return { posts };
};

export default withLocale(Blog);
