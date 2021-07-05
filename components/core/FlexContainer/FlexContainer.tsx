import React, { ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';

type InlineStyleProps = {
  justifyContent?: 'center' | 'flex-end' | 'space-around';
  flexShrink?: number;
  width?: number | string;
  flexGrow?: number;
};

interface Props extends InlineStyleProps {
  className?: string;
  children: ReactNode | ReactNode[];
  vertical?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  wrap?: boolean;
  justified?: boolean;
  centered?: boolean;
}

const getInlineStyles = (styleProps: InlineStyleProps) => {
  const inlineStyles: CSSProperties = {};

  if (styleProps.justifyContent) {
    inlineStyles.justifyContent = styleProps.justifyContent;
  }

  if (styleProps.flexShrink != null) {
    inlineStyles.flexShrink = styleProps.flexShrink;
  }

  if (styleProps.width) {
    inlineStyles.width = styleProps.width;
  }

  if (styleProps.flexGrow) {
    inlineStyles.flexGrow = styleProps.flexGrow;
  }

  return inlineStyles;
};

const FlexContainer = ({
  vertical = false,
  fullWidth = false,
  fullHeight = false,
  children,
  wrap = false,
  justified = false,
  centered = false,
  ...styleProps
}: Props) => (
  <div
    className={classnames({
      'flex-container': true,
      vertical,
      'full-width': fullWidth,
      'full-height': fullHeight,
      wrap,
      justified,
      centered,
    })}
    style={{ ...getInlineStyles(styleProps) }}
  >
    {children}
    <style jsx>{`
      .flex-container {
        display: flex;
        flex-wrap: nowrap;
      }
      .vertical {
        flex-direction: column;
      }
      .full-width {
        width: 100%;
      }
      .full-height {
        height: 100%;
      }
      .wrap {
        flex-wrap: wrap;
      }
      .justified {
        justify-content: space-between;
      }
      .centered {
        ${vertical ? 'align-items' : 'justify-content'}: center;
      }
    `}</style>
  </div>
);

export default FlexContainer;
