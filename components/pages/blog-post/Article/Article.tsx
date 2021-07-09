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
        margin: 0 auto;
      }
      .article :global(.ql-editor) {
        padding: 0;
      }
      .article :global(.ql-editor p) {
        margin-bottom: 1em;
        line-height: ${theme.lineHeight.normal};
      }
      .article :global(img) {
        width: 100%;
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
      @media screen and ${theme.breakpoint.lgUp} {
        .article {
          margin: inherit;
        }
      }
    `}</style>
  </div>
);

export default Article;
