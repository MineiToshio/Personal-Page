import React from 'react';
import theme from '@/styles/theme';

type Props = {
  title: string;
  url: string;
  button: string;
};

const SectionFooter = ({ title, url, button }: Props) => (
  <div className="view-more">
    <p>{title}</p>
    <a href={url} target="_blank" rel="noreferrer" aria-label={title}>
      {button}
    </a>

    <style jsx>{`
      .view-more {
        width: 100%;
        text-align: center;
        font-family: ${theme.font.family.title};
        font-size: 30px;
        color: ${theme.color.secondary};
        background-color: #f5f5f5;
        padding: 40px 0;
        margin-top: 40px;
      }

      p {
        margin: 0 0 10px 0;
      }

      a {
        color: ${theme.color.main};
        margin: 5px;
        border: 2px solid ${theme.color.main};
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        font-size: 15pt;
      }

      a:hover {
        background-color: ${theme.color.main};
        color: white;
      }
    `}</style>
  </div>
);

export default SectionFooter;
