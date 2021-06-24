import React, { useRef, useEffect, useState } from 'react';
import theme from '@/styles/theme';
import type Quill from 'quill';
import useBoolean from '@/hooks/useBoolean';
import hljs from '@/helpers/highlightjs';
import { ImageGallery } from '../../shared';
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
];

type Props = {
  value?: string;
  onChange: (newVal: string) => void;
};

const TextEditor = ({ value, onChange }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>();
  const [showGallery, onImageOpen, onImageClose] = useBoolean();

  useEffect(() => {
    const loadQuill = async () => {
      if (ref && ref.current) {
        const QuillModule = (await import('quill')).default;
        const editor = new QuillModule(ref.current, {
          theme: 'snow',
          modules: {
            syntax: {
              highlight: (text: string) => hljs.highlightAuto(text).value,
            },
            toolbar: {
              container: TOOLBAR_CONTAINER,
              handlers: {
                image: onImageOpen,
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
  }, [onImageOpen, quill, value]);

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

  return (
    <>
      {showGallery && <ImageGallery onImageSelected={onImageSelected} onClose={onImageClose} />}
      <div className="editor">
        <div ref={ref} />
        <style jsx>{`
          .editor :global(.ql-container) {
            font-family: ${theme.font.family.default};
            font-size: ${theme.font.size.body};
          }
          .editor :global(.ql-toolbar) {
            position: sticky;
            top: 72px;
            background: ${theme.color.white};
            z-index: 1;
          }
          .editor :global(.ql-editor p) {
            margin: 1em 0;
            line-height: 32px;
          }
        `}</style>
      </div>
    </>
  );
};

export default TextEditor;
