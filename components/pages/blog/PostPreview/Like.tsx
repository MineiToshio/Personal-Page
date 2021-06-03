import React from 'react';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';

type Props = {
  likedQty: number;
};

const Like = ({ likedQty }: Props) => (
  <button type="button" className="like">
    <Icon icon="thumbsUp" />
    <span>{likedQty}</span>

    <style jsx>{`
      .like {
        grid-area: like;
        justify-self: left;
        align-self: flex-start;
        color: #bababa;
        border: 1px solid #bababa;
        border-radius: 10px;
        padding: 6px 10px 3px;
        font-size: 20px;
        text-align: center;
        line-height: 25px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        cursor: pointer;
        background: none;
        outline: none;
      }
      .like span {
        font-size: 15px;
        font-weight: bold;
      }
      .like:hover {
        border-color: ${theme.color.main};
      }
      .like.active {
        color: ${theme.color.main};
      }
      @media screen and (max-width: 700px) {
        .like {
          font-size: 18px;
        }
      }
    `}</style>
  </button>
);

export default Like;
