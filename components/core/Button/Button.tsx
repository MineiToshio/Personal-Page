import React, { FC } from 'react';
import classnames from 'classnames';
import theme, { Color, FontSize } from '@/styles/theme';
import { Icon as IconType } from '@/styles/icons';
import { hexToRgba } from '@/styles/utils';
import { Typography, Icon, Spacer } from '..';

type Button = {
  type?: 'button';
  onClick: () => void;
};

type Submit = {
  type: 'submit';
  onClick?: undefined;
};

export type Props = {
  icon?: IconType;
  text?: string;
  backgroundColor?: Color;
  fullWidth?: boolean;
  fontSize?: FontSize;
  isLoading?: boolean;
  title?: string;
  bordered?: boolean;
} & (Button | Submit);

const StandardButton: FC<Props> = ({
  icon,
  text,
  backgroundColor = 'main',
  onClick,
  fullWidth,
  fontSize,
  type = 'button',
  isLoading,
  title,
  bordered = false,
}) => (
  <button
    onClick={onClick}
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classnames({ button: true, 'full-width': fullWidth, loading: isLoading })}
    disabled={isLoading}
    title={title}
  >
    {isLoading ? (
      <Icon icon="spinner" color={bordered ? backgroundColor : 'white'} fontSize={fontSize} pulse />
    ) : (
      <>
        {icon && (
          <Icon icon={icon} color={bordered ? backgroundColor : 'white'} fontSize={fontSize} />
        )}
        {icon && text && <Spacer direction="horizontal" size={1.5} />}
        {text && (
          <Typography
            color={bordered ? backgroundColor : 'white'}
            variant="body2"
            fontSize={fontSize}
          >
            {text}
          </Typography>
        )}
      </>
    )}

    <style jsx>{`
      .button {
        display: flex;
        background: ${bordered ? 'transparent' : theme.color[backgroundColor]};
        padding: ${text ? '5px 15px' : '8px 10px'};
        border: ${bordered ? `2px solid ${theme.color[backgroundColor]}` : 'none'};
        border-radius: 5px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
      }
      .button:hover {
        filter: brightness(1.1);
        background: ${bordered
          ? hexToRgba(theme.color[backgroundColor], 0.1)
          : theme.color[backgroundColor]};
      }
      .full-width {
        width: 100%;
      }
      .loading {
        filter: brightness(0.9);
      }
      .loading:hover {
        filter: brightness(0.9);
      }
    `}</style>
  </button>
);

export default StandardButton;
