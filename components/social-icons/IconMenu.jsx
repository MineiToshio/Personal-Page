import React from 'react';
import social from '../../public/data/social.json';
import SocialIcon from './SocialIcon';

const IconMenu = () => {
  return (
    <div className="social-icons">
      {
        social.map((item, index) => (
          <SocialIcon url={item.url} icon={item.name} color={item.color} key={index}/>
        ))
      }
      <style jsx>{`
        .social-icons {
          z-index: 1;
        }
      `}</style>
    </div>
  )
}

export default IconMenu