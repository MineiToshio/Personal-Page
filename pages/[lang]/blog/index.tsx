import React from 'react';
import { getPostsByIsPublished } from '@/firebase/posts';
import withLocale from '@/hocs/withLocale';
import useTranslation from '@/hooks/useTranslation';
import { MainLayout as Layout } from '@/components/layout';
import { Section, MainContainer } from '@/components/shared';
import { timestampToDate } from '@/firebase/utils';
import { BlogSidebar, PostPreview } from '@/components/pages/blog';
import formatHtml from '@/helpers/formatHtml';
import type { NextPage } from 'next';
import type { PostDoc } from '@/types/firebase';

type Props = {
  posts: PostDoc[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  const { t, locale } = useTranslation('Blog');
  return (
    <Layout title="Blog">
      <Section id="blog" title="Blog" subtitle={t('subtitle')}>
        <MainContainer centered>
          <div className="blog">
            <div id="blog-list">
              {posts.map(post => (
                <PostPreview
                  key={post.id}
                  postId={post.id ?? ''}
                  title={post[locale].title ?? ''}
                  featureImage={post.featureImage}
                  summary={formatHtml(post[locale].content ?? '', 380)}
                  publishedAt={timestampToDate(post.publishedAt!)}
                  readingTime={post[locale].readingTime ?? 0}
                  url={post.url ?? ''}
                />
              ))}
            </div>
            {/* TODO: Bring this from Firestore when pagination is implemented */}
            <BlogSidebar
              mostViewedPosts={[...posts]
                .sort((postA, postB) => postB.viewsQty - postA.viewsQty)
                .slice(0, 5)}
            />
          </div>
        </MainContainer>
      </Section>

      <style jsx>{`
        .blog {
          display: grid;
          grid-template-columns: 1fr minmax(auto, 300px);
          max-width: 1000px;
          column-gap: 30px;
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
