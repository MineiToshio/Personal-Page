import React from 'react';
import IconMenu from './IconMenu';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <IconMenu color="#fff" />
        <div>Toshio Minei ©2018</div>

        <style jsx>{`
          footer {
            padding: 15px;
            display: flex;
            flex-direction: columns;
            align-items: center;
            justify-content: center;
            background: var(--black);
            flex-direction: column;
            color: #fff;

            div {
              margin-top: 15px;
            }
          }
        `}</style>
      </footer>
    )
  }
}