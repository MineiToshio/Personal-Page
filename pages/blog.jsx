import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/widgets/Section';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Layout title='Toshio Minei'>
          <Section id="blog" title="Blog" subtitle="aprendamos un poco juntos">
            <div className="blog">
              <div className="posts">
              </div>
              <div className="sidebar">
              </div>
            </div>
          </Section>
        </Layout>


        <style jsx>{`
          .blog {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "posts sidebar";
          }
        `}</style>
      </div>
    )
  }
}