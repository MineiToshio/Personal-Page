import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const Like = ({ likedQty }) => {
  return (
    <a className="like" href="#">
      <FA icon={['fas', "thumbs-up"]} />
      <span>{ likedQty }</span>

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
        @media screen and (max-width:700px) {
          .like {
            font-size: 18px;
          }
        }
      `}</style>
    </a>
  )
}

export default Like