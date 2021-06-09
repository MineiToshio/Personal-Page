import React, { FC } from 'react';
import theme, { Color, FontSize, FontWeight, LineHeight } from '@/styles/theme';

const Variant = Object.freeze({
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  body2: 'span',
});

export type Props = {
  variant?: 'title' | 'subtitle' | 'body' | 'body2';
  text: string | number;
  color?: Color;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
};

const Typography: FC<Props> = ({
  variant = 'body',
  text,
  color = 'dark',
  fontSize,
  fontWeight = 'normal',
  lineHeight = 'normal',
}) => {
  const Tag = Variant[variant] as keyof JSX.IntrinsicElements;
  const defaultFontSize = variant === 'body2' ? 'body' : variant;
  return (
    <Tag className="text">
      {text}
      <style jsx>{`
        .text {
          color: ${theme.color[color]};
          font-family: ${theme.font.family.default};
          margin: 0;
          font-weight: ${theme.font.weight[fontWeight]};
          font-size: ${theme.font.size[fontSize ?? defaultFontSize]};
          line-height: ${theme.lineHeight[lineHeight]};
        }
      `}</style>
    </Tag>
  );
};

export default Typography;
