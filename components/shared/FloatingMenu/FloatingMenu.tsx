import React, { FC } from 'react';
import type { Icon } from '@/styles/icons';
import OptionFloatingMenu from './OptionFloatingMenu';

export type FloatingMenuOptions = {
  icon: Icon;
  text: string;
  onClick: () => void;
};

export type Props = {
  onHideMenu: () => void;
  options: FloatingMenuOptions[];
};

const FloatingMenu: FC<Props> = ({ options, onHideMenu }) => (
  <div className="floating-menu">
    {options.map(option => (
      <OptionFloatingMenu
        icon={option.icon}
        text={option.text}
        onClick={option.onClick}
        onHideMenu={onHideMenu}
        key={option.text}
      />
    ))}
    <style jsx>{`
      .floating-menu {
        background: white;
        border-radius: 5px;
        box-shadow: 0 0 15px 3px rgba(68, 83, 133, 0.25);
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default FloatingMenu;
