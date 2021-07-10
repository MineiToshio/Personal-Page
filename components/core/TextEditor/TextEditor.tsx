import React, { useRef, useEffect, useState } from 'react';
import theme from '@/styles/theme';
import Quill from 'quill';
import useBoolean from '@/hooks/useBoolean';
import hljs from '@/helpers/highlightjs';
import useBodyScroll from '@/hooks/useBodyScroll';
import useBreakpointValues from '@/hooks/useBreakpointValues';
import { ImageGallery } from '../../shared';
import HtmlView from './HtmlView';
import 'quill/dist/quill.snow.css';

const TOOLBAR_CONTAINER = [
  [{ header: 1 }, { header: 2 }], // custom button values
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  [{ align: [] }],
  ['blockquote', 'code-block'],

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ size: [] }], // custom dropdown
  ['image', 'video'],
  ['clean'], // remove formatting button
  ['html'],
];

type Props = {
  value?: string;
  onChange: (newVal: string) => void;
};

const TextEditor = ({ value, onChange }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>();
  const [showGallery, onImageOpen, onImageClose] = useBoolean();
  const [showHtml, onHtmlOpen, onHtmlClose] = useBoolean();

  useBodyScroll(!showHtml);

  useEffect(() => {
    const loadQuill = async () => {
      if (ref && ref.current) {
        const editor = new Quill(ref.current, {
          theme: 'snow',
          modules: {
            syntax: {
              highlight: (text: string) => hljs.highlightAuto(text).value,
            },
            toolbar: {
              container: TOOLBAR_CONTAINER,
              handlers: {
                image: onImageOpen,
                html: onHtmlOpen,
              },
            },
          },
        });
        if (value) {
          editor.clipboard.dangerouslyPasteHTML(value);
        }
        setQuill(editor);
      }
    };

    if (typeof window !== 'undefined' && !quill) {
      loadQuill();
    }
  }, [onHtmlOpen, onImageOpen, quill, value]);

  useEffect(() => {
    const onTextChange = () => {
      const innerHTML = quill?.root.innerHTML.trimEnd();
      // getText().length always returns 1 when editor is empty cause quill always ads a line break by default
      const updatedText = innerHTML && quill?.getText().length !== 1 ? innerHTML : '';
      onChange(updatedText);
    };

    quill?.on('text-change', onTextChange);
    return () => {
      if (quill) {
        quill.off('text-change', onTextChange);
      }
    };
  }, [quill, onChange]);

  const onImageSelected = (imageUrl: string) => {
    if (quill) {
      const range = quill.getSelection();
      if (range) {
        quill.insertEmbed(range.index, 'image', imageUrl);
        // TODO: Apparently there is a type error with setSelection. Remove the following comments when that is fixed
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        quill.setSelection(range.index + 1);
      }
      onImageClose();
    }
  };

  const onHtmlConfirm = (newVal: string) => {
    if (quill) {
      onHtmlClose();
      quill.setText('');
      quill.clipboard.dangerouslyPasteHTML(newVal);
    }
  };

  return (
    <>
      {showGallery && <ImageGallery onImageSelected={onImageSelected} onClose={onImageClose} />}
      {showHtml && (
        <HtmlView
          initialValue={quill?.root.innerHTML.trimEnd() ?? ''}
          onConfirm={onHtmlConfirm}
          onClose={onHtmlClose}
        />
      )}
      <div className="editor">
        <div ref={ref} />
        <style jsx>{`
          .editor :global(.ql-container) {
            font-family: ${theme.font.family.default};
            font-size: ${useBreakpointValues(theme.font.size.body)};
          }
          .editor :global(.ql-toolbar) {
            position: sticky;
            top: 72px;
            background: ${theme.color.white};
            z-index: 1;
          }
          .article :global(.ql-editor) {
            padding: 0;
          }
          .editor :global(.ql-editor p) {
            margin-bottom: 1em;
            line-height: ${theme.lineHeight.normal};
          }
          .editor :global(.ql-html:after) {
            content: 'html';
          }
        `}</style>
      </div>
    </>
  );
};

export default TextEditor;
