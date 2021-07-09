import React from 'react';
import theme from '@/styles/theme';
import { FlexContainer } from '@/components/core';

type Props = {
  title: string;
  url: string;
  button: string;
};

const SectionFooter = ({ title, url, button }: Props) => (
  <div className="section-footer">
    <p>{title}</p>
    <a href={url} target="_blank" rel="noreferrer" aria-label={title}>
      {button}
    </a>

    <style jsx>{`
      .section-footer {
        width: 100%;
        text-align: center;
        font-family: ${theme.font.family.title};
        font-size: 30px;
        color: ${theme.color.secondary};
        background-color: #f5f5f5;
        padding: 32px 0;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        margin-bottom: 10px;
        margin-top: 0;
      }

      a {
        color: ${theme.color.main};
        margin: 5px;
        border: 2px solid ${theme.color.main};
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
        letter-spacing: 1px;
        width: fit-content;
        margin: 0;
      }

      a:hover {
        background-color: ${theme.color.main};
        color: white;
      }
    `}</style>
  </div>
);

export default SectionFooter;
