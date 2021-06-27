import React from 'react';
import theme, { Color, FontSize } from '@/styles/theme';
import icons, { Icon as IconType } from '@/styles/icons';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconType;
  color?: Color;
  fontSize?: FontSize;
  pulse?: boolean;
};

const Icon = ({ icon, color, fontSize, pulse = false }: Props) => (
  <span className="icon-container">
    <FA icon={icons[icon]} className="fa-icon" pulse={pulse} />
    <style jsx>{`
      .icon-container :global(.fa-icon) {
        color: ${color && theme.color[color]};
        font-size: ${fontSize && theme.font.size[fontSize]};
      }
    `}</style>
  </span>
);

export default Icon;
