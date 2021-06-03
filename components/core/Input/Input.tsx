import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import classnames from 'classnames';
import theme from '@/styles/theme';
import { getScrollStyles } from '@/styles/common';

export type Props = {
  placeholder: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  multiline?: boolean;
  width?: number;
  control: Control;
  rules?: RegisterOptions;
};

const { className: scrollClass, styles } = getScrollStyles('textarea');

const StandardInput = ({ placeholder, name, multiline, width, control, rules }: Props) => {
  const {
    field,
    fieldState: { invalid },
  } = useController({ control, name, rules });
  return (
    <>
      {multiline ? (
        <textarea
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          placeholder={placeholder}
          className={classnames({ error: invalid, input: true, [scrollClass]: true })}
        />
      ) : (
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          placeholder={placeholder}
          className={classnames({ error: invalid, input: true })}
        />
      )}
      {styles}
      <style jsx>{`
        .input {
          padding: 6px 16px;
          font-size: ${theme.font.size.body};
          border: 1px solid ${theme.color.border};
          color: ${theme.color.dark};
          font-family: ${theme.font.family.default};
          outline: none;
          width: ${width ? `${width}px` : 'calc(100% - 32px)'};
          border-radius: 5px;
        }
        .input.error {
          border: 1px solid ${theme.color.danger};
        }
        .input::placeholder {
          color: ${theme.color.dark};
          opacity: 0.55;
        }
        textarea {
          resize: vertical;
          height: 100%;
          min-height: 80px;
        }
      `}</style>
    </>
  );
};

export default StandardInput;
