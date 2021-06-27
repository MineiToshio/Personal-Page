import React, { FC } from 'react';
import { Icon } from '@/components/core';
import { Icon as IconType } from '@/styles/icons';
import theme from '@/styles/theme';

export type Props = {
  icon?: IconType;
  text: string;
  imgIcon?: string;
  border?: string;
  width?: string;
  backgroundColor?: string;
  iconColor?: string;
  textColor?: string;
  onClick: () => void;
};

const BrandButton: FC<Props> = ({
  icon,
  text,
  imgIcon,
  onClick,
  border,
  width = '100%',
  backgroundColor,
  iconColor,
  textColor = '#000',
}) => (
  <button className="brandButton" onClick={onClick} type="button">
    {imgIcon && <img src={imgIcon} width="30" alt={text} />}
    {icon && <Icon icon={icon} />}
    <span className="text">{text}</span>

    <style jsx>{`
      .brandButton {
        border-radius: 10px;
        border: ${border};
        display: flex;
        align-items: center;
        width: ${width};
        cursor: pointer;
        font-family: ${theme.font.family.default};
        background: ${backgroundColor};
        padding: 0.75em 0.65em;
        font-size: 1.1em;
      }

      .icon {
        color: ${iconColor};
      }

      img {
        margin: 0;
        padding: 0;
      }

      .text {
        flex: 1;
        font-family: ${theme.font.family.default};
        color: ${textColor};
        font-weight: 600;
        margin-left: 10px;
      }

      @media only screen and (min-width: 1600px) {
        .brandButton {
          padding: 0.95em 0.75em;
        }
        .text {
          font-size: 1.2em;
        }
      }
    `}</style>
  </button>
);

export default BrandButton;
