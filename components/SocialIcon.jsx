import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class SocialIcon extends React.Component {
  render() {
    const { color, url, icon } = this.props;

    return (
      <a href={url} target="_blank">
        <FA icon={['fab', icon]} />

        <style jsx>{`
          a {
            color: var(--black);
            font-size: 25pt;
            cursor: pointer;
            z-index: 1;
            padding: 5px 10px;
            border-radius: 3px;
            transition: all .3s ease;
            margin: 0 5px;

            &:hover {
              background-color: ${ color };
              background-position: 0 -40px!important;
              color: #fff;
            }
          }
        `}</style>
      </a>
    )
  }
} 