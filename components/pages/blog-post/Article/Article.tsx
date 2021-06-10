import React from 'react';
import theme from '@/styles/theme';

type Props = {
  content: string;
};

const Article = ({ content }: Props) => (
  <div className="article">
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <style jsx>{`
      .article {
        max-width: 700px;
        font-family: ${theme.font.family.default};
        font-size: ${theme.font.size.body};
        line-height: 32px;
        padding: 0 20px;
      }
      p {
        margin-top: 0;
      }
      .capital {
        font-size: 69px;
        display: block;
        position: relative;
        float: left;
        top: 16px;
        font-weight: bold;
        padding: 5px;
        font-family: ${theme.font.family.elegant};
      }
      @media screen and (max-width: 1023px) {
        .article {
          margin: 0 auto;
        }
      }
      @media screen and (max-width: 768px) {
        .article {
          font-size: 18px;
          line-height: 28px;
        }
      }
    `}</style>
  </div>
);

export default Article;
