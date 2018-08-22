import React from 'react';
import social from '../../static/data/social.json';
import SocialIcon from './SocialIcon';

export default class IconMenu extends React.Component {

  render() {
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
}