import React, { FC } from 'react';
import classnames from 'classnames';
import theme, { Color, FontSize } from '@/styles/theme';
import { Icon as IconType } from '@/styles/icons';
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
      <Icon icon="spinner" color="white" fontSize={fontSize} pulse />
    ) : (
      <>
        {icon && <Icon icon={icon} color="white" fontSize={fontSize} />}
        {icon && text && <Spacer direction="horizontal" size={1.5} />}
        {text && <Typography text={text} color="white" variant="body2" fontSize={fontSize} />}
      </>
    )}

    <style jsx>{`
      .button {
        display: flex;
        background: ${theme.color[backgroundColor]};
        padding: 5px 15px;
        border: none;
        color: ${theme.color.white};
        border-radius: 5px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
      }
      .button:hover {
        filter: brightness(1.1);
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
