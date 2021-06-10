import React from 'react';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';

type Props = {
  likeQty: number;
}

const BlogSocial = ({ likeQty }: Props) => (
  <div className="social">
    <button type="button" title="Me Gusta">
      <Icon icon="thumbsUp" />
      <span className="like-count">{likeQty}</span>
    </button>
    <button type="button" title="Compartir en Twitter">
      <Icon icon="twitter" />
    </button>
    <button type="button" title="Compartir en Facebook">
      <Icon icon="facebookSquare" />
    </button>

    <style jsx>{`
      .social {
        position: sticky;
        top: 150px;
        font-size: 22px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        max-width: 100px;
        width: 100%;
      }
      .social button {
        color: #545454;
        margin-bottom: 18px;
        text-decoration: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 1.2em;
        display: flex;
        align-items: center;
        outline: none;
        width: 85px;
      }
      .social button:hover {
        color: ${theme.color.muted};
      }
      .like-count {
        font-size: 15px;
        margin-left: 10px;
        margin-top: 8px;
      }
      @media screen and (max-width: 1023px) {
        .social {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default BlogSocial;
