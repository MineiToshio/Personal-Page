import React from 'react';
import social from '../static/config/social.json';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class IconMenu extends React.Component {

  render() {
    return (
      <div className="social-icons">
        {
          social.map((item, index) => (
            <a href={item.url} target="_blank" key={index} ><FA icon={['fab', item.name]} /></a>
          ))
        }

        <style jsx>{`
          .social-icons {
            z-index: 1;

            a {
              color:  var(--black);
              font-size: 25pt;
              cursor: pointer;
              z-index: 1;
              padding: 5px;
            }
          }
        `}</style>
      </div>
    )
  }
}