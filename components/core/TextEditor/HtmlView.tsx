/* eslint-disable import/no-extraneous-dependencies */
// TODO: Eslint throws a weird error, the line above is to fix that.
import React, { useRef, useState, useEffect } from 'react';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { html as htmlLanguage } from '@codemirror/lang-html';
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import {
  closeBrackets,
  autocompletion,
  closeBracketsKeymap,
  completionKeymap,
} from '@codemirror/autocomplete';
import { oneDark } from '@codemirror/theme-one-dark';
import format from 'xml-formatter';
import { Article } from '@/components/pages/blog-post';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';
import { getScrollStyles } from '@/styles/common';
import classNames from 'classnames';

type Props = {
  initialValue: string;
  onConfirm: (newVal: string) => void;
  onClose: () => void;
};

const { className: scrollClass, styles } = getScrollStyles('div');

const HtmlView = ({ initialValue, onConfirm, onClose }: Props) => {
  const [html, setHtml] = useState(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCodemirror = async () => {
      if (ref.current) {
        // TODO: xml-formatter breaks if there are multiple parent nodes. Find a way to emit parent div
        const formattedValue = format(`<div>${initialValue}</div>`, {
          indentation: '  ',
          lineSeparator: '\n',
        });
        const updateListenerExtension = EditorView.updateListener.of(e => {
          if (e.docChanged) {
            const editorText = e.state.doc.toString();
            setHtml(editorText.replace(/\n[ ]*/g, ''));
          }
        });
        const htmlEditor = new EditorView({
          parent: ref.current,
          doc: formattedValue,
          extensions: [
            oneDark,
            updateListenerExtension,
            lineNumbers(),
            history(),
            htmlLanguage(),
            syntaxHighlighting(defaultHighlightStyle),
            closeBrackets(),
            autocompletion(),
            keymap.of([
              ...defaultKeymap,
              ...historyKeymap,
              ...completionKeymap,
              ...closeBracketsKeymap,
            ]),
          ],
        });
      }
    };
    loadCodemirror();
  }, [initialValue]);

  const onConfirmClick = () => onConfirm(html);

  return (
    <div>
      <div className="modal">
        <button className="button confirm" onClick={onConfirmClick} type="button">
          <Icon icon="check" />
        </button>
        <button className="button close" onClick={onClose} type="button">
          <Icon icon="times" />
        </button>
        <div className="container">
          <div className="editor">
            <div ref={ref} />
          </div>
          <div className={classNames(scrollClass, 'article')}>
            <Article content={html} />
          </div>
        </div>
      </div>
      {styles}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${theme.color.white};
          z-index: 99;
        }
        .button {
          position: fixed;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          right: 25px;
          border: 0;
          padding: 0;
          cursor: pointer;
          color: ${theme.color.white};
        }
        .confirm {
          background: ${theme.color.main};
          bottom: 80px;
        }
        .close {
          background: ${theme.color.muted};
          bottom: 25px;
        }
        .container {
          display: flex;
        }
        .editor {
          width: calc(100% - 700px);
        }
        .editor :global(.cm-editor) {
          height: 100vh;
        }
        .article {
          overflow-y: auto;
          height: 100vh;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default HtmlView;
