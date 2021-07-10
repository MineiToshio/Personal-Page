import React, { useRef, useState, useEffect } from 'react';
import codemirror from 'codemirror';
import format from 'xml-formatter';
import { Article } from '@/components/pages/blog-post';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';
import { getScrollStyles } from '@/styles/common';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import classNames from 'classnames';

type Props = {
  initialValue: string;
  onConfirm: (newVal: string) => void;
  onClose: () => void;
};

const { className: scrollClass, styles } = getScrollStyles('div');

const HtmlView = ({ initialValue, onConfirm, onClose }: Props) => {
  const [html, setHtml] = useState(initialValue);
  const [editor, setEditor] = useState<codemirror.Editor | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCodemirror = async () => {
      if (ref.current) {
        const htmlEditor = codemirror(ref.current, {
          lineNumbers: true,
          tabSize: 2,
          mode: 'xml',
        });
        // TODO: xml-formatter breaks if there are multiple parent nodes. Find a way to emit parent div
        const formattedValue = format(`<div>${initialValue}</div>`, {
          indentation: '  ',
          lineSeparator: '\n',
        });
        htmlEditor.setValue(formattedValue);
        setEditor(htmlEditor);
      }
    };
    loadCodemirror();
  }, [initialValue]);

  useEffect(() => {
    const onChange = (instance: codemirror.Editor) => {
      setHtml(instance.getValue().replace(/\n[ ]*/g, ''));
    };

    if (editor) {
      editor.on('change', onChange);
    }
    return () => {
      if (editor) {
        editor.off('change', onChange);
      }
    };
  }, [editor]);

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
        .editor :global(.CodeMirror) {
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
