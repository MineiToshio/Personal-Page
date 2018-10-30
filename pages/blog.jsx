import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/widgets/Section';
import BlogPreview from '../components/blog/PostPreview';
import posts from '../static/data/posts.json';
import BlogSidebar from '../components/blog/BlogSidebar';

export default class extends React.Component {
  render() {
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
}