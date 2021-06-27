import React from 'react';
import theme from '@/styles/theme';
import { Icon } from '../../core';

type Props = {
  quote: string;
  author: string;
  image: string;
};

const Parallax = ({ quote, author, image }: Props) => (
  <div className="parallax">
    <div className="overlay" />
    <div className="caption">
      <Icon icon="quoteLeft" />
      <span className="quote">{quote}</span>
      <Icon icon="quoteRight" />
      <span className="author">{author}</span>
    </div>

    <style jsx>{`
      .parallax {
        background-image: url('${image}');
        height: 400px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .overlay {
        background: url('../../img/pattern.png');
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
      }
      .caption {
        position: absolute;
        max-width: 1200px;
        text-align: center;
        color: #000;
      }
      .caption :global(svg) {
        font-size: 15pt;
        vertical-align: top;
        margin: 5px 10px;
        color: ${theme.color.main};
      }
      .quote {
        text-transform: uppercase;
        color: ${theme.color.white};
        font-size: 35pt;
        font-family: ${theme.font.family.title};
        font-weight: bold;
      }
      .author {
        font-size: 17px;
        font-weight: 600;
        color: ${theme.color.white};
        margin-top: 25px;
        font-style: italic;
        text-align: center;
        display: block;
      }
      @media only screen and (max-width: 1024px) {
        .parallax {
          height: 350px;
        }
        .caption :global(svg) {
          font-size: 13pt;
        }
        .quote {
          font-size: 30pt;
        }
      }
      @media only screen and (max-width: 600px) {
        .parallax {
          height: 250px;
        }
        .caption :global(svg) {
          font-size: 10pt;
        }
        .quote {
          font-size: 18pt;
        }
        .author {
          font-size: 13px;
        }
      }
    `}</style>
  </div>
);

export default Parallax;
