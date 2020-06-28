import React, { FC } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

type Props = {
  likedQty: number;
};

const Like: FC<Props> = ({ likedQty }) => {
  return (
    <button type="button" className="like">
      <FA icon={['fas', 'thumbs-up']} />
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
          border-color: var(--green);
        }
        .like.active {
          color: var(--green);
        }
        @media screen and (max-width: 700px) {
          .like {
            font-size: 18px;
          }
        }
      `}</style>
    </button>
  );
};

export default Like;
