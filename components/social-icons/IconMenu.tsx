import React, { FC } from 'react';
import social from '../../public/data/social.json';
import SocialIcon from './SocialIcon';
import { SocialIcon as SocialIconType } from '../../types/types';

const SocialMedia: Array<SocialIconType> = Object.assign(social);

const IconMenu: FC = () => {
  return (
    <div className="social-icons">
      {SocialMedia.map((item) => (
        <SocialIcon
          url={item.url}
          icon={item.icon}
          color={item.color}
          name={item.name}
          key={item.name}
        />
      ))}
      <style jsx>{`
        .social-icons {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default IconMenu;
