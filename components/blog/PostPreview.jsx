import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import Like from '../widgets/Like';

export default class extends React.Component { 
  render () {
    const { title, photo, summary, createdAt, commentQty, readingTime, likedQty } = this.props;

    return (
      <article>
        <a href="#">
          <img src={ photo } className="post-img"/>
        </a>
        <div className="blog-data">
          <Like likedQty={likedQty} />
          <a href="#">
            <h2>{ title }</h2>
          </a>
          <div className="blog-meta">
            <span><FA icon={['far', "clock"]} /> { createdAt }</span>
            <span><FA icon={['far', "comment-dots"]} /> { commentQty } comentarios</span>
            <span><FA icon={['far', "bookmark"]} /> { readingTime } min de lectura</span>
          </div>
        </div>
        <p>
          { summary }
          <a href="#" className="more-dots">…</a>
        </p>
        <a className="view-more">Seguir Leyendo</a>

        <style jsx>{`
          article {
            padding-bottom: 35px;
            border-bottom: 1px dotted #ddd;
            margin-bottom: 40px;
          }
          .more-dots {
            text-decoration: none;
          }
          .view-more {
            padding: 8px 20px;
            background: none;
            border: 1px solid var(--green);
            color: var(--green);
            border-radius: 20px;
            cursor: pointer;
            transition: 0.1s ease-in;
          }
          .view-more:hover {
            background: var(--green);
            color: #fff;
          }
          .blog-meta {
            grid-area: meta;
            font-size: 14px;
            color: #8f8f8f;
          }
          .blog-meta > * {
            margin-right: 15px;
          }
          .post-img {
            border-radius: 20px;
            width: 100%;
          }
          p {
            font-family: 'KievitOT';
            line-height: 24px;
            font-size: 17px;
            text-align: justify;
          }
          .blog-data {
            display: grid;
            grid-template-areas: "like title"
                                "like meta";
            grid-template-columns: minmax(auto, 50px) 1fr;
            margin-top: 20px;
            grid-column-gap: 10px;
          }
          .blog-data h2 {
            grid-area: title;
            margin-bottom: 5px;
            margin-top: 0;
            color: #000;
          }
          .blog-data h2:hover {
            color: var(--green);
          }
          a {
            text-decoration: none;
            color: var(--green);
            font-size: 15px;
          }
          @media screen and (max-width:700px) {
            .blog-data h2 {
              font-size: 1.3em;
            }
            p {
              line-height: 21px;
              font-size: 15px;
            }
            .view-more {
              padding: 6px 15px;
              font-size: 14px;
            }
          }
        `}</style>
      </article>
    )
  }
}