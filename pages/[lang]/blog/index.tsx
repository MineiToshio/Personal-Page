import React from 'react';
import { NextPage } from 'next';
import posts from '@/public/data/posts.json';
import withLocale from '@/hocs/withLocale';
import useTranslation from '@/hooks/useTranslation';
import { MainLayout as Layout } from '@/components/layout';
import { Section } from '@/components/shared';
import { BlogSidebar, PostPreview } from '@/components/pages/blog';

const Blog: NextPage = () => {
  const { t } = useTranslation('Blog');
  return (
    <Layout title="Toshio Minei - Blog">
      <Section id="blog" title="Blog" subtitle={t('subtitle')}>
        <div className="blog">
          <div id="blog-list">
            {posts.map(post => (
              <PostPreview
                key={post.id}
                title={post.title}
                photo={post.photo}
                summary={post.summary}
                createdAt={post.createdAt}
                commentQty={post.commentQty}
                readingTime={post.readingTime}
                likedQty={post.likedQty}
                url={post.url}
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

export default withLocale(Blog);
