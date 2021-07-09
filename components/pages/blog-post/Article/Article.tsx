import React from 'react';
import theme from '@/styles/theme';
import useBreakpointValues from '@/hooks/useBreakpointValues';
import 'quill/dist/quill.snow.css';
import 'highlight.js/styles/atom-one-dark.css';

type Props = {
  content: string;
};

const Article = ({ content }: Props) => (
  <div className="article ql-snow">
    <div dangerouslySetInnerHTML={{ __html: content }} className="ql-editor" />
    <style jsx>{`
      .article {
        max-width: 700px;
        width: 100%;
        font-family: ${theme.font.family.default};
        font-size: ${useBreakpointValues(theme.font.size.body)};
        line-height: 32px;
        padding: 0 20px;
      }
      .article :global(.ql-editor p) {
        margin: 1em 0;
        line-height: 32px;
      }
      .article :global(img) {
        width: 100%;
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
