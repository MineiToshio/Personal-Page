import React, { FC } from 'react';
import theme from '@/styles/theme';
import { Spacer, Icon } from '../../core';
import { FloatingMenuOptions } from './FloatingMenu';

type Props = FloatingMenuOptions & {
  onHideMenu: () => void;
};

const OptionFloatingMenu: FC<Props> = ({ icon, text, onHideMenu, onClick }) => {
  const onClickOption = () => {
    onClick();
    onHideMenu();
  };

  return (
    <div
      className="option-floating-menu"
      onClick={onClickOption}
      onKeyDown={onClickOption}
      role="button"
      tabIndex={0}
    >
      <Icon icon={icon} />
      <Spacer direction="horizontal" size={1} />
      {text}
      <style jsx>{`
        .option-floating-menu {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0.8em 1.25em;
          border-radius: 5px;
          font-size: 0.85em;
          color: ${theme.color.main};
          user-select: none;
        }
        .option-floating-menu:hover {
          background: ${theme.color.main};
          color: white;
        }
      `}</style>
    </div>
  );
};

export default OptionFloatingMenu;
