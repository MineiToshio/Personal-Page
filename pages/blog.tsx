import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Section from '../components/widgets/Section';
import BlogPreview from '../components/blog/PostPreview';
import posts from '../public/data/posts.json';
import BlogSidebar from '../components/blog/BlogSidebar';

const Blog: NextPage = () => {
  return (
    <Layout title='Toshio Minei - Blog'>
      <Section id="blog" title="Blog" subtitle="aprendamos un poco juntos">
        <div className="blog">
          <div id="blog-list">
            {
              posts.map((post) => (
                <BlogPreview key={post.id} {...post} />
              ))
            }
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
        @media screen and (max-width:790px) {
          .blog {
            column-gap: 0;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Blog