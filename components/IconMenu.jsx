import React from 'react';
import social from '../static/config/social.json';
import SocialIcon from './SocialIcon';

export default class IconMenu extends React.Component {

  render() {
    const { color } = this.props;

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

            :global(a) {
              color: ${ color };
            }
          }
        `}</style>
      </div>
    )
  }
}