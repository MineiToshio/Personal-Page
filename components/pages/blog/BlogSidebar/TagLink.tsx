import React, { FC } from 'react';
import theme from '@/styles/theme';

type Props = {
  tag: string;
};

const TagLink: FC<Props> = ({ tag }) => (
  <a href="/" className="tag-link">
    {tag}
    <style jsx>{`
      .tag-link {
        padding: 5px 10px;
        border-radius: 50px;
        border: 1px solid ${theme.color.main};
        display: inline-block;
        margin-bottom: 8px;
        transition: 0.1s ease-in;
        margin-right: 5px;
      }
      .tag-link:hover {
        text-decoration: none;
        color: ${theme.color.white};
        background: ${theme.color.main};
      }
      a {
        text-decoration: none;
        color: ${theme.color.main};
        font-size: 15px;
      }
    `}</style>
  </a>
);

export default TagLink;
