import React, { useRef, useEffect, useState } from 'react';
import theme from '@/styles/theme';
import type Quill from 'quill';
import 'quill/dist/quill.snow.css';

const TOOLBAR_OPTIONS = [
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
  const [quill, setQuill] = useState<Quill>();

  useEffect(() => {
    const loadQuill = async () => {
      if (ref && ref.current) {
        const QuillModule = (await import('quill')).default;
        const editor = new QuillModule(ref.current, {
          theme: 'snow',
          modules: {
            toolbar: TOOLBAR_OPTIONS,
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
  }, [quill, value]);

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

  return <div className="editor">
    <div ref={ref} />
    <style jsx>{`
      .editor :global(.ql-container) {
        font-family: ${theme.font.family.default};
        font-size: ${theme.font.size.body};
      }
      .editor :global(.ql-editor p) {
        margin: 1em 0;
        line-height: 32px;
      }
    `}</style>
  </div>;
};

export default TextEditor;
