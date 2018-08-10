import React from 'react';
import social from '../static/config/social.json';
import SocialIcon from './SocialIcon';

export default class IconMenu extends React.Component {

  render() {
    return (
      <div className="social-icons">
        {
          social.map((item, index) => (
            <SocialIcon url={item.url} icon={item.name} color={item.color} key={index}/>
            // <a href={item.url} target="_blank" key={index} ><FA icon={['fab', item.name]} /></a>
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