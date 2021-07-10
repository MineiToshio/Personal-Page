import React, { ReactNode } from 'react';
import classnames from 'classnames';
import theme, { Color, FontSize, FontWeight, LineHeight, FontFamily, Align } from '@/styles/theme';
import useBreakpointValues from '@/hooks/useBreakpointValues';

const Variant = Object.freeze({
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  body2: 'span',
});

export type Props = {
  variant?: 'title' | 'subtitle' | 'body' | 'body2';
  children: ReactNode;
  color?: Color;
  hoverColor?: Color;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  fontFamily?: FontFamily;
  align?: Align;
  noWrap?: boolean;
};

const Typography = ({
  variant = 'body',
  children,
  color = 'dark',
  hoverColor,
  fontSize,
  fontWeight = 'normal',
  lineHeight = 'normal',
  fontFamily,
  align,
  noWrap = false,
}: Props) => {
  const Tag = Variant[variant] as keyof JSX.IntrinsicElements;
  const defaultFontFamily = variant === 'title' ? 'title' : 'default';
  const defaultFontSize = variant === 'body2' ? 'body' : variant;
  const fontSizeValue = useBreakpointValues(theme.font.size[fontSize ?? defaultFontSize]);
  return (
    <Tag className={classnames({ text: true, 'no-wrap': noWrap })}>
      {children}
      <style jsx>{`
        .text {
          color: ${theme.color[color]};
          font-family: ${theme.font.family[fontFamily ?? defaultFontFamily]};
          margin: 0;
          font-weight: ${theme.font.weight[fontWeight]};
          font-size: ${fontSizeValue};
          line-height: ${theme.lineHeight[lineHeight]};
          text-align: ${align ?? 'inherit'};
        }
        .text:hover {
          color: ${theme.color[hoverColor ?? color]};
        }
        .no-wrap {
          white-space: nowrap;
        }
      `}</style>
    </Tag>
  );
};

export default Typography;
