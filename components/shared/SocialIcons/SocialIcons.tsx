import React, { FC } from 'react';
import { SocialIcon as SocialIconType } from '@/types/types';
import social from '@/public/data/social.json';
import SocialIcon from './SocialIcon';

const SocialMedia: Array<SocialIconType> = Object.assign(social);

const IconMenu: FC = () => (
  <div className="social-icons">
    {SocialMedia.map(item => (
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

export default IconMenu;
