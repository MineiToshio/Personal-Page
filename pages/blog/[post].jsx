import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import Layout from '../../components/layout/Layout';
import BlogMeta from '../../components/blog/BlogMeta';
import NavArrows from '../../components/widgets/NavArrows';
import BlogSocial from '../../components/blog/BlogSocial';

const Post = () => {
  return (
    <Layout title='Toshio Minei - Blog'>
      <article>
        <div className="header">
          <div className="title">
            <p className="category">Tecnología</p>
            <h1>Loft Office With Vintage Decor For Creative Working</h1>
            <BlogMeta createdAt='10/10/2018' commentQty='50' readingTime='30' />
          </div>
          <div className="banner" style={{backgroundImage: "url(https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/loft-office-with-vintage-decor-PFD2JSL-1-880x400.jpg)"}}>
          </div>
        </div>
        <div className="body">
          <BlogSocial/>
          <div className="article">
            <p><span className="capital">B</span>ack in 1896, a journal article titled “The Plague of City Noises” set off the 19th century’s version of a Twitter meltdown. The article highlighted “the injurious and exhausting effects of city noises on the auditory apparatus, and on the whole nervous system,” and generated “hundreds” of editorial comments and “scores” of private letters across the United States and Europe.</p>
            <p>“Almost without exception… the medical press agreed with the contention that the noises of our modern cities are not only a source of great discomfort, but are largely life-shortening and health-wrecking in their effects,” the author of an article on the phenomenon wrote the following year.</p>
            <p>Fast-forward to 2011, and a report from the World Health Organization (WHO) came to similar conclusions. The authors concluded that in western Europe alone, roughly 1 million healthy life years are lost each year as a result of traffic-related noise. Noise is inherently arousing, and the long-term effects of “chronic noise stress” on the human hormone and nervous systems are a growing concern, the report states.</p>
            <p>Back in 1896, a journal article titled “The Plague of City Noises” set off the 19th century’s version of a Twitter meltdown. The article highlighted “the injurious and exhausting effects of city noises on the auditory apparatus, and on the whole nervous system,” and generated “hundreds” of editorial comments and “scores” of private letters across the United States and Europe.</p>
            <p>“Almost without exception… the medical press agreed with the contention that the noises of our modern cities are not only a source of great discomfort, but are largely life-shortening and health-wrecking in their effects,” the author of an article on the phenomenon wrote the following year.</p>
            <p>Fast-forward to 2011, and a report from the World Health Organization (WHO) came to similar conclusions. The authors concluded that in western Europe alone, roughly 1 million healthy life years are lost each year as a result of traffic-related noise. Noise is inherently arousing, and the long-term effects of “chronic noise stress” on the human hormone and nervous systems are a growing concern, the report states.</p>
            <p>Back in 1896, a journal article titled “The Plague of City Noises” set off the 19th century’s version of a Twitter meltdown. The article highlighted “the injurious and exhausting effects of city noises on the auditory apparatus, and on the whole nervous system,” and generated “hundreds” of editorial comments and “scores” of private letters across the United States and Europe.</p>
            <p>“Almost without exception… the medical press agreed with the contention that the noises of our modern cities are not only a source of great discomfort, but are largely life-shortening and health-wrecking in their effects,” the author of an article on the phenomenon wrote the following year.</p>
            <p>Fast-forward to 2011, and a report from the World Health Organization (WHO) came to similar conclusions. The authors concluded that in western Europe alone, roughly 1 million healthy life years are lost each year as a result of traffic-related noise. Noise is inherently arousing, and the long-term effects of “chronic noise stress” on the human hormone and nervous systems are a growing concern, the report states.</p>
          </div>
        </div>
      </article>
      <NavArrows urlPrev="#" urlNext="#" />
      <style jsx>{`
        .header {
          display: grid;
          grid-template-areas: "titulo banner";
          grid-template-columns: repeat(2, 1fr);
        }
        .header img {
          width: 100%;
        }
        .title {
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
          color: var(--muted);
          text-transform: uppercase;
          margin: 0;
          font-size: 14px;
          text-align: left;
        }
        h1 {
          text-align: left;
          font-size: 40px;
          line-height: 50px;
          font-family: Heldane;
          margin: 10px 0; 
        }
        .article {
          max-width: 700px;
          margin: 0 auto 0 0;
          font-family: Charter;
          font-size: 20px;
          line-height: 34px;
          padding: 0 20px;
        }
        p {
          margin-top: 0;
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
          color: var(--muted);
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
        .capital {
          font-size: 69px;
          display: block;
          position: relative;
          float: left;
          top: 16px;
          font-weight: bold;
          padding: 5px;
          font-family: Heldane;
        }
        @media screen and (max-width: 1280px) {
          .header {
            grid-template-areas: "banner"
                                  "titulo";
            grid-template-columns: 1fr;
          }
          .title {
            margin: auto;
            padding: 50px 20px 0;
            max-width: initial;
            text-align: center;
            max-width: 700px;
          }
          h1 {
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
          .article {
            margin: 0 auto;
          }
        }
        @media screen and (max-width: 768px) {
          .article {
            font-size: 18px;
            line-height: 28px;
          }
          .banner {
            min-height: initial;
          }
        }
        @media screen and (max-width: 425px) {
          h1 {
            font-size: 30px;
            line-height: 40px;
          }
          .body {
            margin: 30px 0;
          }
          .title {
            padding-top: 35px;
          }
          .banner {
            height: 30vh;
          }
        }
        @media screen and (max-width: 375px) {
          h1 {
            font-size: 25px;
            line-height: 35px;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Post